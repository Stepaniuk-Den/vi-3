"use server";

import nodemailer from "nodemailer";

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

type Props = {
  sendTo: string;
  email: string;
  subject: string;
  text: string;
  html?: string;
};

const sendMail = async ({ sendTo, email, subject, text, html }: Props) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: SMTP_SERVER_HOST,
    port: 465,
    secure: true,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
  });

  console.log("SMTP_SERVER_USERNAME", SMTP_SERVER_USERNAME);

  try {
    // const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }

  const info = await transporter.sendMail({
    from: `"Contact Form" <${email}>`,
    //   `"Contact Form" <${SMTP_SERVER_USERNAME}>`,
    to: sendTo || SITE_MAIL_RECIEVER,
    //   SITE_MAIL_RECIEVER || email,
    subject,
    text,
    html: html ? html : "",
  });

  //   console.log("Message Sent:  %s", info.messageId);
  // console.log("Mail sent to", SITE_MAIL_RECIEVER);
  return info;
};

export default sendMail;

// =================================================================

// // "use server";

// import nodemailer from "nodemailer";

// const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
// const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
// const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
// const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

// export const sendMail = async (
//   to: string,
//   subject: string,
//   text: string,
//   html?: string
// ) => {
//   const transporter = nodemailer.createTransport({
//     // service: "gmail",
//     host: SMTP_SERVER_HOST,
//     port: 587,
//     secure: false,
//     auth: {
//       user: SMTP_SERVER_USERNAME,
//       pass: SMTP_SERVER_PASSWORD,
//     },
//   });

//   // try {
//   //   const isVerified = await transporter.verify();
//   // } catch (error) {
//   //   console.error(
//   //     "Something Went Wrong",
//   //     SMTP_SERVER_USERNAME,
//   //     SMTP_SERVER_PASSWORD,
//   //     error
//   //   );
//   //   return;
//   // }

//   // const info = await transporter.sendMail({
//   //   from: email,
//   //   to: sendTo || SITE_MAIL_RECIEVER,
//   //   subject: subject,
//   //   text: text,
//   //   html: html ? html : "",
//   // });

//   const info = await transporter.sendMail({
//     from: `"Contact Form" <${SMTP_SERVER_USERNAME}>`,
//     to,
//     subject,
//     text,
//     html,
//   });

//   console.log("Message Sent:  %s", info.messageId);
//   // console.log("Mail sent to", SITE_MAIL_RECIEVER);
//   return info;
// };

// export default sendMail;

// =================================================================

// import nodemailer from "nodemailer";

// const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
// const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
// const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
// const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: SMTP_SERVER_HOST,
//   port: 465,
//   secure: true,
//   auth: {
//     user: SMTP_SERVER_USERNAME,
//     pass: SMTP_SERVER_PASSWORD,
//   },
// });

// export async function sendMail(
//   {
//   email,
//   sendTo,
//   subject,
//   text,
//   html,
//   }:
//     {
//   email: string;
//   sendTo?: string;
//   subject: string;
//   text: string;
//   html?: string;
// }) {
//   try {
//     const isVerified = await transporter.verify();
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
//     from: email,
//     to: sendTo || SITE_MAIL_RECIEVER,
//     subject: subject,
//     text: text,
//     html: html ? html : "",
//   });
//   console.log("Message Sent", info.messageId);
//   console.log("Mail sent to", SITE_MAIL_RECIEVER);
//   return info;
// }

// // =================================================================

// import { IFormData } from "./interfaces";

// export async function sendEmail(data: IFormData) {
//   const apiEndpoint = "/api/email";
//   const response = await fetch(apiEndpoint, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   if (!response.ok) {
//     throw new Error(`Error: ${response.statusText}`);
//   }

//   return response.json();
// }
