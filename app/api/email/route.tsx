// "use server";

// import nodemailer from "nodemailer";

// const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
// const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
// const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
// const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

// type Props = {
//   sendTo: string;
//   email: string;
//   subject: string;
//   text: string;
//   html?: string;
// };

// const sendMail = async ({ sendTo, email, subject, text, html }: Props) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: SMTP_SERVER_HOST,
//     port: 465,
//     secure: true,
//     auth: {
//       user: SMTP_SERVER_USERNAME,
//       pass: SMTP_SERVER_PASSWORD,
//     },
//   });

//   try {
//     // const isVerified = await transporter.verify();
//   } catch (error) {
//     console.error(
//       "Something Went Wrong",
//       SMTP_SERVER_USERNAME,
//       SMTP_SERVER_PASSWORD,
//       error
//     );
//     return;
//   }

//   const info = await transporter.sendMail({
//     from: `"Contact Form" <${email}>`,
//     //   `"Contact Form" <${SMTP_SERVER_USERNAME}>`,
//     to: sendTo || SITE_MAIL_RECIEVER,
//     //   SITE_MAIL_RECIEVER || email,
//     subject,
//     text,
//     html: html ? html : "",
//   });

//   //   console.log("Message Sent:  %s", info.messageId);
//   // console.log("Mail sent to", SITE_MAIL_RECIEVER);
//   return info;
// };

// export default sendMail;

// ----------------------------------------------------------------

// import { type NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

// export async function POST(request: NextRequest) {
//   const { email, name, message } = await request.json();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD,
//     },
//   });

//   const mailOptions: Mail.Options = {
//     from: process.env.EMAIL,
//     to: process.env.EMAIL,
//     cc: email,
//     subject: `Message from ${name} (${email})`,
//     text: message,
//     html: `
//     <p>Your message has been successfully sent to ${process.env.SITE_DOMAIN}</p>
//    <p>Message content</p>
//     <p>sender: <b>${name}</b></p>
//     <p>email: ${email}</p>
//     <p>to: ${process.env.EMAIL}</p>
//     <p>${message}</p>
//     `,
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transporter.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: "Email was sent" });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }
