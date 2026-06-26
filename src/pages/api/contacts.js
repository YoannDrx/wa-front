import { IncomingForm } from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const getRequiredEnv = (key) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const parseForm = (req) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({ fields, files });
    });
  });

const getFieldValue = (fields, key) => {
  const value = fields[key];

  if (Array.isArray(value)) {
    return value[0] || "";
  }

  return value || "";
};

const getAttachments = (files) =>
  Object.values(files)
    .flat()
    .filter(Boolean)
    .map((file) => ({
      filename: file.originalFilename,
      path: file.filepath,
    }));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { fields, files } = await parseForm(req);
    const email = getFieldValue(fields, "email");
    const name = getFieldValue(fields, "name");
    const subject = getFieldValue(fields, "subject") || "Nouveau message depuis le site";
    const message = getFieldValue(fields, "message");

    const transporter = nodemailer.createTransport({
      host: getRequiredEnv("SMTP_HOST"),
      port: Number(getRequiredEnv("SMTP_PORT")),
      secure: Number(getRequiredEnv("SMTP_PORT")) === 465,
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getRequiredEnv("SMTP_PASSWORD"),
      },
    });

    await transporter.sendMail({
      from: getRequiredEnv("CONTACT_FROM_EMAIL"),
      to: getRequiredEnv("CONTACT_TO_EMAIL"),
      replyTo: email || undefined,
      subject,
      text: [`Nom : ${name}`, `Email : ${email}`, "", message].join("\n"),
      attachments: getAttachments(files),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.log(`082143 `, error);
    return res.status(400).json({ ok: false, error: error.message });
  }
}
