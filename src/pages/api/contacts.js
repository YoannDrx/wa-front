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
              console.log(`5324 `, err);
                res.status(500).json({ ok: false });
                return;
              }

              const { email, name, message } = fields;        

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
                to: 'zzz@yopmail.com',
                subject: 'Nouveau message depuis le site',
                text: `${email} ${name} ${message}`,
                attachments: [
                  ...Object.keys(files).map(fileKey=>({
                    filename: files[fileKey][0].originalFilename,
                    path: files[fileKey][0].filepath,
                  }))
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
