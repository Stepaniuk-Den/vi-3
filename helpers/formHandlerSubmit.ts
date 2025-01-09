// import { IFormData } from "./interfaces";

// export const formHandlerSubmit = async (formData: IFormData) => {};

"use server";

import { convertZodErrors } from "./convertZodErrors";
import { formSchema } from "./formSchema";
import { IActionResponse, IFormData } from "./interfaces";

export async function formHandlerSubmit(
  prevState: IActionResponse | null,
  formData: FormData
): Promise<IActionResponse> {
  // Simulate network delay
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const unvalidatedData: IFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      message: formData.get("message") as string,
    };

    // Validate the form data
    const validatedData = formSchema.safeParse(unvalidatedData);

    if (!validatedData.success) {
      return {
        // success: false,
        // message: "Please fix the errors in the form",
        // errors: validatedData.error.flatten().fieldErrors,
        errors: convertZodErrors(validatedData.error),
        data: unvalidatedData,
        blurs: Object.fromEntries(
          Object.keys(unvalidatedData).map((key) => [key, true])
        ),
      };
    }

    // Here you would typically save the form to your database
    console.log("Contact form submitted:", validatedData.data);

    return {
      // success: true,
      message: "Contact form submitted successfully!",
      data: {
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      },
    };
  } catch (error) {
    return {
      // success: false,
      message: "An unexpected error occurred",
      data: {
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      },
    };
  }
}
