import { z } from "zod";

const phoneRegex = new RegExp(/^\+?[1-9]\d{1,14}$/);

export const formSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  phoneNumber: z.string().regex(phoneRegex, "Invalid number"),
  message: z.string().min(6).max(20),
});

export type IFormSchema = z.infer<typeof formSchema>;

// -------------------------------------------
// export const formSchema = z.object({
//   name: z
//     .string({ message: "Name is required" })
//     .min(2, "Must be at least 2 characters")
//     .max(20, "Must contain at most 20 characters"),
//   email: z
//     .string({ message: "Email is required" })
//     .email("Invalid email address"),
//   phoneNumber: z.string().regex(phoneRegex, "Invalid number"),
//   message: z
//     .string({ message: "Message is required" })
//     .min(6, "Must be at least 6 characters")
//     .max(20, "Must contain at most 180 characters"),
// });

// export type FormSchema = z.infer<typeof formSchema>;
