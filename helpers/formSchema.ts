import { z } from "zod";

// const phoneRegex = new RegExp(/^\+?[1-9]\d{1,14}$/);

export const formSchema = (t: (key: string) => string) => {
  return z.object({
    name: z
      .string()
      .trim()
      .min(1, t("required"))
      .min(2, t("minName"))
      .max(30, t("maxName")),
    email: z.string().trim().min(1, t("required")).email(t("validEmail")),
    phoneNumber: z
      .string()
      .trim()
      .optional()
      .refine((value) => !value || /^(\+)?[0-9]{10,15}$/.test(value), {
        message: t("validPhoneNumber"),
      }),
    message: z
      .string()
      .trim()
      .min(1, t("required"))
      .min(6, t("minMessage"))
      .max(380, t("maxMessage")),
    accept: z
      .boolean()
      .refine((value) => value, { message: t("requiredAccept") }),
  });
};

export type IFormSchema = z.infer<ReturnType<typeof formSchema>>;


export const callRequestSchema = (t: (key: string) => string) => {
  return z.object({
    date: z
      .string()
      .min(1, t("error"))
      .refine((value) => value !== "", { message: t("error") })
      .refine((value) => {
        const today = new Date().toISOString().split("T")[0];
        const maxDate = new Date(Date.now() + 48 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0];
        return value >= today && value <= maxDate;
      }),

    time: z.string().refine((value) => value !== "", { message: t("error") }),

    phone: z
      .string()
      .trim()
      .min(1, t("error"))
      .refine((value) => /^(\+)?[0-9]{10,15}$/.test(value), {
        message: t("errorPhone"),
      }),
  });
};

export type ICallRequestSchema = z.infer<ReturnType<typeof callRequestSchema>>;


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
