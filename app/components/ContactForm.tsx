"use client";

import { useTranslations } from "use-intl";
import { useForm } from "react-hook-form";
// import { sendEmail } from "@/utils/send-email";
// import Accept from "@/public/icons/ContactForm/accept.svg";
import SubmitButton from "./Buttons/SubmitButton";
// import { IActionResponse } from "@/helpers/interfaces";
import { formHandlerSubmit } from "@/helpers/formHandlerSubmit";
import { formSchema, IFormSchema } from "@/helpers/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

// const initialState: IActionResponse = {
//   success: false,
//   message: "",
// };

const ContactForm = () => {
  const t = useTranslations("ContactForm");

  // const [serverState, formAction] = useFormState(
  //   formHandlerSubmit,
  //   initialState
  // );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: IFormSchema) => {
    const { message } = await formHandlerSubmit(data);
    if (message) {
      // toast.success(successMsg);
      reset();
      alert(message);
    }
  };

  // const [state, action, isPending] = useActionState(
  //   formHandlerSubmit,
  //   initialState
  // );

  // const {
  //   register,
  //   formHandlerSubmit,
  //   // setValue,
  //   reset,
  //   formState: { errors, isValid },
  //   // } = useForm < FormData > { mode: "onChange" };
  // } = useForm<FormData>({ mode: "all" });

  // const [loading, setLoading] = useState(false);

  // const [isError, setIsError] = useState(false);

  // const cleanPhoneNumber = (phoneNumber) => {
  //   return phoneNumber.replace(/[\s()-]/g, "");
  // };

  // const onSubmit = async (data: FormData) => {
  //   setLoading(true);
  //   try {
  //     // const response =
  //     await sendEmail(data);
  //     setLoading(false);
  //     reset();
  //   } catch (err) {
  //     setIsError(true);
  //     console.log(err);
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div className="flex flex-[0.4] flex-col gap-8 py-12 px-16 bg-customTeal rounded-3xl">
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
          // action={formHandlerSubmit}
          // action={formAction}
        >
          {/* <div className="flex gap-7 w-full"> */}
          <div className="w-full">
            <input
              className="inputsCl capitalize"
              id="name"
              type="text"
              placeholder={t("placeholderName")}
              {...register("name")}
              // {...register("name", {
              //   required: `${t("required")}`,
              //   minLength: {
              //     value: 2,
              //     message: `${t("minName")}`,
              //   },
              //   maxLength: {
              //     value: 20,
              //     message: `${t("maxName")}`,
              //   },
              //   validate: {
              //     isNotEmpty: (value) => {
              //       if (value.trim() === "") {
              //         return `${t("required")}`;
              //       }
              //       return true;
              //     },
              //   },
              // })}

              // onChange={handleChange}
            />
            <div className="errorWrapperCl">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
          </div>

          <div className="w-full">
            <input
              className="inputsCl"
              id="email"
              type="email"
              placeholder={t("placeholderEmail")}
              // onBlur={handleOnBlur}
              {...register("email")}
              // {...register("email", {
              //   required: `${t("required")}`,
              //   pattern: {
              //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              //     message: `${t("requiredEmail")}`,
              //   },
              // })}

              // onChange={handleChange}
            />

            <div className="errorWrapperCl">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
          </div>

          <div className="w-full">
            <input
              className="inputsCl"
              id="phoneNumber"
              type="tel"
              placeholder={t("placeholderPhoneNumber")}
              {...register("phoneNumber")}
              // {...register("phone", {
              //   // required: `${t("required")}`,
              //   pattern: {
              //     value: /^\+?[1-9]\d{1,14}$/,
              //   },
              // })}

              // onChange={handleChange}
            />
            <div className="errorWrapperCl">
              {errors?.phoneNumber && (
                <p>{errors?.phoneNumber?.message || "Error!"}</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <textarea
              className="inputsCl h-32 pt-3 resize-none"
              autoCapitalize="sentences"
              id="message"
              placeholder={t("placeholderMessage")}
              rows={8}
              {...register("message")}
              // {...register("message", {
              //   required: `${t("required")}`,
              //   minLength: {
              //     value: 15,
              //     message: `${t("minMessage")} `,
              //   },
              //   maxLength: {
              //     value: 20,
              //     message: `${t("maxMessage")}`,
              //   },
              // })}

              // onChange={handleChange}
            />
            <div className="errorWrapperCl">
              {errors?.message && <p>{errors?.message?.message || "Error!"}</p>}
            </div>
          </div>

          {/* <div className="group">
            <input
              id="accept"
              type="checkbox"
              className="checkboxCl peer"
             
            />
            <label className="labelCheckCl" htmlFor="accept">
              <span className="iconCheckWrapCl">
                <Accept className="iconCheckCl" />
              </span>
              {t("acceptTerms")}
            </label>
              </div> */}

          {/* name="acceptTerms"
              required={true}
             {...register("accent", {
               required: `${t.requiredAccept}`,
             })}
             aria-required={`${t.requiredAccept}` ? "true" : "false"} */}

          <SubmitButton isSubmitting={isSubmitting} />

          {/* <button type="submit" disabled={!isValid} className="linkToPageCl">
            {loading ? "Sending..." : `${t("submit")}`}
          </button> */}
        </form>
      </div>
    </>
  );
};

export default ContactForm;

// --------------------------------------------------------

// import { useTranslations } from "use-intl";
// import { useForm } from "react-hook-form";
// import { useActionState, useEffect, useState } from "react";
// // import { sendEmail } from "@/utils/send-email";
// import Accept from "@/public/icons/ContactForm/accept.svg";
// import SubmitButton from "./Buttons/SubmitButton";
// import { IActionResponse, IBlursBoolean } from "@/helpers/interfaces";
// import { formHandlerSubmit } from "@/helpers/formHandlerSubmit";
// import { formSchema, FormSchema } from "@/helpers/formSchema";
// import { useFormState } from "react-dom";
// import { convertZodErrors } from "@/helpers/convertZodErrors";

// // const initialState: IActionResponse = {
// //   success: false,
// //   message: "",
// // };

// const inputNames = ["name", "email", "phoneNumber", "message"];
// const initialState: IActionResponse = {};

// const initialData: FormSchema = {
//   name: "",
//   email: "",
//   phoneNumber: "",
//   message: "",
// };

// const ContactForm = () => {
//   const t = useTranslations("ContactForm");

//   const [serverState, formAction] = useFormState(
//     formHandlerSubmit,
//     initialState
//   );

//   const [errors, setErrors] = useState(serverState.errors || {});
//   const [blurs, setBlurs] = useState(serverState.blurs || {});
//   const [deal, setDeal] = useState<FormSchema>(serverState.data || initialData);

//   // const [state, action, isPending] = useActionState(
//   //   formHandlerSubmit,
//   //   initialState
//   // );

//   // const {
//   //   register,
//   //   formHandlerSubmit,
//   //   // setValue,
//   //   reset,
//   //   formState: { errors, isValid },
//   //   // } = useForm < FormData > { mode: "onChange" };
//   // } = useForm<FormData>({ mode: "all" });

//   // const [loading, setLoading] = useState(false);

//   // const [isError, setIsError] = useState(false);

//   // const cleanPhoneNumber = (phoneNumber) => {
//   //   return phoneNumber.replace(/[\s()-]/g, "");
//   // };

//   // const onSubmit = async (data: FormData) => {
//   //   setLoading(true);
//   //   try {
//   //     // const response =
//   //     await sendEmail(data);
//   //     setLoading(false);
//   //     reset();
//   //   } catch (err) {
//   //     setIsError(true);
//   //     console.log(err);
//   //     setLoading(false);
//   //   }
//   // };

//   useEffect(() => {
//     if (serverState.message) {
//       alert(serverState.message);
//       setBlurs({});
//     } else if (serverState.errors) {
//       setAllBlurred();
//     }
//     if (serverState.data) {
//       setDeal(serverState.data);
//     }
//     setErrors(serverState.errors || {});
//   }, [serverState]);

//   const setAllBlurred = () => {
//     const blurred: IBlursBoolean = {};
//     inputNames.forEach((name) => {
//       blurred[name] = true;
//     });
//     setBlurs(blurred);
//   };

//   const handleOnBlur = (
//     e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name } = e.target;
//     setBlurs((prev) => ({ ...prev, [name]: true }));
//   };

//   const handleOnChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setDeal((prev) => {
//       const updatedData = { ...prev, [name]: value };
//       const validatedData = formSchema.safeParse(updatedData);
//       if (validatedData.success) {
//         setErrors({});
//       } else {
//         const errors = convertZodErrors(validatedData.error);
//         setErrors(errors);
//       }
//       return updatedData;
//     });
//   };

//   return (
//     <>
//       <div className="flex flex-[0.4] flex-col gap-8 py-12 px-16 bg-customTeal rounded-3xl">
//         <form
//           className="flex flex-col items-center"
//           // onSubmit={formHandlerSubmit(onSubmit)}
//           // action={formHandlerSubmit}
//           action={formAction}
//         >
//           {/* <div className="flex gap-7 w-full"> */}
//           <div className="w-full">
//             <input
//               className="inputsCl capitalize"
//               id="name"
//               name="name"
//               type="text"
//               placeholder={t("placeholderName")}
//               onBlur={handleOnBlur}
//               onChange={handleOnChange}
//               value={deal.name}
//               // {...register("name", {
//               //   required: `${t("required")}`,
//               //   minLength: {
//               //     value: 2,
//               //     message: `${t("minName")}`,
//               //   },
//               //   maxLength: {
//               //     value: 20,
//               //     message: `${t("maxName")}`,
//               //   },
//               //   validate: {
//               //     isNotEmpty: (value) => {
//               //       if (value.trim() === "") {
//               //         return `${t("required")}`;
//               //       }
//               //       return true;
//               //     },
//               //   },
//               // })}

//               // onChange={handleChange}
//             />
//             {/* <div className="errorWrapperCl">
//               {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
//             </div> */}

//             <div className="errorWrapperCl">
//               {blurs.name && errors?.name && <p>{errors.name || "Error!"}</p>}
//             </div>
//           </div>

//           <div className="w-full">
//             <input
//               className="inputsCl"
//               id="email"
//               name="email"
//               type="email"
//               placeholder={t("placeholderEmail")}
//               onBlur={handleOnBlur}
//               onChange={handleOnChange}
//               value={deal.email}
//               // {...register("email", {
//               //   required: `${t("required")}`,
//               //   pattern: {
//               //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               //     message: `${t("requiredEmail")}`,
//               //   },
//               // })}

//               // onChange={handleChange}
//             />

//             {/* <div className="errorWrapperCl">
//               {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
//             </div> */}

//             <div className="errorWrapperCl">
//               {blurs.email && errors?.email && (
//                 <p>{errors.email || "Error!"}</p>
//               )}
//             </div>
//           </div>

//           <div className="w-full">
//             <input
//               className="inputsCl"
//               id="phoneNumber"
//               name="phoneNumber"
//               type="tel"
//               placeholder={t("placeholderPhoneNumber")}
//               onBlur={handleOnBlur}
//               onChange={handleOnChange}
//               value={deal.phoneNumber}
//               // {...register("phone", {
//               //   // required: `${t("required")}`,
//               //   pattern: {
//               //     value: /^\+?[1-9]\d{1,14}$/,
//               //   },
//               // })}

//               // onChange={handleChange}
//             />

//             {/* <div className="errorWrapperCl">
//               {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
//             </div> */}

//             <div className="errorWrapperCl">
//               {blurs.phoneNumber && errors?.phoneNumber && (
//                 <p>{errors.phoneNumber || "Error!"}</p>
//               )}
//             </div>
//           </div>
//           {/* </div> */}
//           <div className="w-full">
//             <textarea
//               className="inputsCl h-32 pt-3 resize-none"
//               autoCapitalize="sentences"
//               id="message"
//               name="message"
//               placeholder={t("placeholderMessage")}
//               onBlur={handleOnBlur}
//               onChange={handleOnChange}
//               value={deal.message}
//               // {...register("message", {
//               //   required: `${t("required")}`,
//               //   minLength: {
//               //     value: 15,
//               //     message: `${t("minMessage")} `,
//               //   },
//               //   maxLength: {
//               //     value: 20,
//               //     message: `${t("maxMessage")}`,
//               //   },
//               // })}

//               // onChange={handleChange}
//             />
//             {/* <div className="errorWrapperCl">
//               {errors?.message && <p>{errors?.message?.message || "Error!"}</p>}
//             </div >*/}

//             <div className="errorWrapperCl">
//               {blurs.message && errors?.message && (
//                 <p>{errors.message || "Error!"}</p>
//               )}
//             </div>
//           </div>

//           {/* <div className="group">
//             <input
//               id="accept"
//               type="checkbox"
//               className="checkboxCl peer"

//             />
//             <label className="labelCheckCl" htmlFor="accept">
//               <span className="iconCheckWrapCl">
//                 <Accept className="iconCheckCl" />
//               </span>
//               {t("acceptTerms")}
//             </label>
//               </div> */}

//           {/* name="acceptTerms"
//               required={true}
//              {...register("accent", {
//                required: `${t.requiredAccept}`,
//              })}
//              aria-required={`${t.requiredAccept}` ? "true" : "false"} */}

//           <SubmitButton />

//           {/* <button type="submit" disabled={!isValid} className="linkToPageCl">
//             {loading ? "Sending..." : `${t("submit")}`}
//           </button> */}
//         </form>
//       </div>
//     </>
//   );
// };

// export default ContactForm;
