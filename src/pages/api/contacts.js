import { IncomingForm } from "formidable";
import nodemailer from 'nodemailer';

export const config = {
    api: {
      bodyParser: false,
    },
  };

  
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        break;
      case "POST":
        const form = new IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.status(500).json({ ok: false });
                return;
              }

              const { email, name, message } = fields;
              const file = files['cv-file'][0];
        

              const transporter = nodemailer.createTransport({
                host: 'ssl0.ovh.net',
                port: 465,
                secure: true,
                auth: {
                  user: 'contact@weil-paris.fr',
                  pass: '26Weilparis75'
                }
              });


              const mailOptions = {
                from: 'contact@weil-paris.fr',
                to: 'contact@weil-paris.fr',
                subject: 'Nouveau message depuis le site',
                text: `${email} ${name} ${message}`,
                attachments: [
                  {
                    filename: file.originalFilename,
                    path: file.filepath,
                  }
                ]
              };

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log(error);
                  res.statusCode = 500;
                  res.end('Failed to send email');
                } else {
                  console.log('Email sent: ' + info.response);
                  res.end('Email sent successfully');
                }
              });        
        
        })
        res.status(200).json({ ok: true });

        break;
    }
  } catch (error) {
    console.log(`082143 `, error);
    res.status(400).json({ ok: false, error });
  }
}
