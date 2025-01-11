// import { IFormData } from "./interfaces";

// export const formHandlerSubmit = async (formData: IFormData) => {};

"use server";

import { formSchema } from "./formSchema";
import { IActionResponse, IFormData } from "./interfaces";

export async function formHandlerSubmit(
  // prevState: IActionResponse | null,
  formData: IFormData
) {
  // : Promise<IActionResponse>
  // Simulate network delay
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // const unvalidatedData: IFormData = {
  //   name: formData.get("name") as string,
  //   email: formData.get("email") as string,
  //   phoneNumber: formData.get("phoneNumber") as string,
  //   message: formData.get("message") as string,
  // };

  // Validate the form data
  // const validatedData = formSchema.safeParse(unvalidatedData);
  const validatedData = formSchema.safeParse(formData);

  if (!validatedData.success) {
    return {
      success: false,
      message: "Please fix the errors in the form",
      // errors,
      // errors: validatedData.error.flatten().fieldErrors,
      // errors: { !formData ? "Data is required" : undefined}
      // errors: {
      //   name: !validatedData.name ? "Name is required" : undefined,
      //   email: !email ? "Email is required" : undefined,
      //   // phoneNumber: !phoneNumber ? "PhoneNumber is required" : undefined,
      //   message: !message ? "Message is required" : undefined,
      // },
    };
  }
  // Here you would typically save the form to your database
  console.log("Contact form submitted:", validatedData.data);

  return {
    success: true,
    message: "Contact form submitted successfully!",
    // formData: {},
    // formData: {
    //   name: "",
    //   email: "",
    //   phoneNumber: "",
    //   message: "",
    // },
  };
}

// ==============================================================

// import { convertZodErrors } from "./convertZodErrors";
// import { formSchema } from "./formSchema";
// import { IActionResponse, IFormData } from "./interfaces";

// export async function formHandlerSubmit(
//   prevState: IActionResponse | null,
//   formData: FormData
// ): Promise<IActionResponse> {
//   // Simulate network delay
//   // await new Promise((resolve) => setTimeout(resolve, 1000));

//   try {
//     const unvalidatedData: IFormData = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       phoneNumber: formData.get("phoneNumber") as string,
//       message: formData.get("message") as string,
//     };

//     // Validate the form data
//     const validatedData = formSchema.safeParse(unvalidatedData);

//     if (!validatedData.success) {
//       return {
//         // success: false,
//         // message: "Please fix the errors in the form",
//         // errors: validatedData.error.flatten().fieldErrors,
//         errors: convertZodErrors(validatedData.error),
//         data: unvalidatedData,
//         blurs: Object.fromEntries(
//           Object.keys(unvalidatedData).map((key) => [key, true])
//         ),
//       };
//     }

//     // Here you would typically save the form to your database
//     console.log("Contact form submitted:", validatedData.data);

//     return {
//       // success: true,
//       message: "Contact form submitted successfully!",
//       data: {
//         name: "",
//         email: "",
//         phoneNumber: "",
//         message: "",
//       },
//     };
//   } catch (error) {
//     return {
//       // success: false,
//       message: "An unexpected error occurred",
//       data: {
//         name: "",
//         email: "",
//         phoneNumber: "",
//         message: "",
//       },
//     };
//   }
// }

// ==============================================================
// ==============================================================
// ==============================================================

// try {
//   const unvalidatedData: IFormData = {
//     name: formData.get("name") as string,
//     email: formData.get("email") as string,
//     phoneNumber: formData.get("phoneNumber") as string,
//     message: formData.get("message") as string,
//   };

//   // Validate the form data
//   const validatedData = formSchema.safeParse(unvalidatedData);

//   if (!validatedData.success) {
//     return {
//       success: false,
//       message: "Please fix the errors in the form",
//       errors: validatedData.error.flatten().fieldErrors,
//       // errors: {!unvalidatedData || !validatedData  ? data is required : undefined}
//     };
//   }

//   // Here you would typically save the form to your database
//   console.log("Contact form submitted:", validatedData.data);

//   return {
//     success: true,
//     message: "Contact form submitted successfully!",
//     // data: {
//     //   name: "",
//     //   email: "",
//     //   phoneNumber: "",
//     //   message: "",
//     // },
//   };
// } catch (error) {
//   return {
//     success: false,
//     message: "An unexpected error occurred",
//     // data: {
//     //   name: "",
//     //   email: "",
//     //   phoneNumber: "",
//     //   message: "",
//     // },
//   };
// }
