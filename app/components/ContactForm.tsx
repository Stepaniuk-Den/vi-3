"use client";

import { useTranslations } from "use-intl";
import { useForm } from "react-hook-form";
// import { sendEmail } from "@/utils/send-email";
// import Accept from "@/public/icons/ContactForm/accept.svg";
import SubmitButton from "./Buttons/SubmitButton";
import { formHandlerSubmit } from "@/helpers/formHandlerSubmit";
import { formSchema, IFormSchema } from "@/helpers/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const t = useTranslations("ContactForm");
  const t2 = useTranslations("ContactForm.AfterSubmitFormActions");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    // clearErrors,
  } = useForm<IFormSchema>({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    mode: "onBlur",
    // reValidateMode: "onBlur",
  });

  // const onSubmit = async (data: IFormSchema) => {
  //   const { success, message } = await formHandlerSubmit(data);
  //   // if (message) {
  //   //   // toast.success(successMsg);
  //   //   reset();
  //   alert(message);
  //   if (success) reset();
  //   // }
  // };

  const onSubmit = async (data: IFormSchema) => {
    const { success, message } = await formHandlerSubmit(data, t2);
    alert(message);
    if (success) reset();
    // try {
    //   const { success, message } = await formHandlerSubmit(data);
    //   alert(message);
    //   if (success) reset();
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   alert("An error occurred. Please try again.");
    // }
  };

  return (
    <>
      <div className="flex flex-[0.4] flex-col gap-8 py-12 px-16 bg-customTeal rounded-3xl">
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="w-full">
            <input
              className="inputsCl capitalize"
              id="name"
              type="text"
              placeholder={t("placeholderName")}
              {...register(
                "name"
                // { onChange: () => clearErrors("name") }
              )}
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
              {...register(
                "email"
                // { onChange: () => clearErrors("email") }
              )}
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
            />
            <div className="errorWrapperCl">
              {errors?.phoneNumber && (
                <p>{errors?.phoneNumber?.message || "Error!"}</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <textarea
              className="inputsCl h-28 pt-3 resize-none"
              autoCapitalize="sentences"
              id="message"
              placeholder={t("placeholderMessage")}
              rows={8}
              {...register("message", {
                // onChange: () => clearErrors("message"),
              })}
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
