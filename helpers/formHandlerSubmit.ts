import sendMail from "@/app/api/email/route";
import { formSchema } from "./formSchema";
import { IFormData } from "./interfaces";

export async function formHandlerSubmit(
  formData: IFormData,
  t2: (key: string) => string
) {
  // Simulate network delay
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const formSchemaMethod = formSchema((key) => key);
  const validatedData = formSchemaMethod.safeParse(formData);

  if (!validatedData.success) {
    return {
      success: false,
      message: "Please fix the errors in the form",
    };
  }

  const { name, email, phoneNumber, message, accept } = validatedData.data;

  try {
    await sendMail({
      email: email,
      sendTo: "",
      subject: `${t2("adminEmailSubject")}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${
        phoneNumber || "N/A"
      }\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phoneNumber || "N/A"}</p>
       <p><strong>Message:</strong> ${message}</p>
      <p><strong>Form accept:</strong>${accept}</p>`,
    });

    await sendMail({
      email: email,
      sendTo: email,
      subject: `${t2("adminEmailSubject")}`,
      text: "Thank you for contacting us. We will contact you shortly.",
      html: `<p>${t2("userGreeting")} ${name},</p>
       <p>${t2("userMsgBody")}</p>
       <p>${t2("regards")}<br>${t2("companyName")}</p>`,
    });

    return {
      success: true,
      message: `${t2("successModal")}`,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: `${t2("errorModal")}`,
    };
  }
}

// return {
//   success: true,
//   message: "Contact form submitted successfully!",
//   formData: {},
//   // formData: {
//   //   name: "",
//   //   email: "",
//   //   phoneNumber: "",
//   //   message: "",
//   // },
// };
