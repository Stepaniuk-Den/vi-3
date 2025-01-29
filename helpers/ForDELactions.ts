// "use server";

// import { z } from "zod";
// import { IActionResponse, IFormData } from "./interfaces";

// const formSchema = z.object({
//   name: z
//     .string({ message: "Name is required" })
//     .min(2, "Must be at least 2 characters")
//     .max(20, "Maximum 20 symbols"),
//   email: z
//     .string({ message: "Email is required" })
//     .email({ message: "Invalid email address" }),
//   phoneNumber: z.string({ message: "Phone number is required" }),
//   message: z
//     .string({ message: "Message is required" })
//     .min(1, "State is required")
//     .max(20, "Maximum 180 symbols"),
// });

// export async function formHandlerSubmit(
//   prevState: IActionResponse | null,
//   formData: FormData
// ): Promise<IActionResponse> {
//   // Simulate network delay
//   //   await new Promise((resolve) => setTimeout(resolve, 1000));

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
//         success: false,
//         message: "Please fix the errors in the form",
//         errors: validatedData.error.flatten().fieldErrors,
//       };
//     }

//     // Here you would typically save the form to your database
//     console.log("Contact form submitted:", validatedData.data);

//     return {
//       success: true,
//       message: "Contact form submitted successfully!",
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: "An unexpected error occurred",
//     };
//   }
// }
