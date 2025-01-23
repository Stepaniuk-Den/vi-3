"use client";

import { useTranslations } from "use-intl";
import { useForm } from "react-hook-form";
// import { sendEmail } from "@/utils/send-email";
import Accept from "@/public/icons/ContactForm/accept.svg";
import SubmitButton from "./Buttons/SubmitButton";
import { formHandlerSubmit } from "@/helpers/formHandlerSubmit";
import { formSchema, IFormSchema } from "@/helpers/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ModalNotificationForm from "./ModalNotificationForm";
import { useModal } from "./ModalProvider";
import clsx from "clsx";
import Line from "./Line";

const ContactForm = () => {
  const t = useTranslations("ContactForm");
  const t2 = useTranslations("ContactForm.AfterSubmitFormActions");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm<IFormSchema>({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      accept: false,
    },
    mode: "onBlur",
    // reValidateMode: "onBlur",
  });

  // const onSubmit = async (data: IFormSchema) => {
  //   const { success, message } = await formHandlerSubmit(data);
  //   // if (message) {
  //   alert(message);
  //   //   reset();
  //   if (success) reset();
  //   // }
  // };

  const { openModal, closeModal } = useModal();

  const onSubmit = async (data: IFormSchema) => {
    const { success, message } = await formHandlerSubmit(data, t2);
    // alert(message);
    openModal(
      <ModalNotificationForm closeModal={closeModal}>
        {message}
      </ModalNotificationForm>,
      {
        classNameBackdrop: "bg-black bg-opacity-40 backdrop-blur-md",
      }
    );
    if (success) reset();
  };

  // =======================

  // try {
  //   const { success, message } = await formHandlerSubmit(data);
  //   alert(message);
  //   if (success) reset();
  // } catch (error) {
  //   console.error("Error submitting form:", error);
  //   alert("An error occurred. Please try again.");
  // }

  return (
    <section className="sectionCl pb-24">
      <div className="container">
        <div className="flex flex-col w-full p-7 shadow-lg rounded-md">
          <div>
            <h2 className="titleCl laserCl mb-4">{t("title")}</h2>
            <Line className="marsala-center" color="marsala" />
          </div>
          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="w-full">
              <div className="w-full relative group">
                <input
                  className={clsx(
                    "inputsCl capitalize",
                    errors?.name && "border-customMarsala"
                  )}
                  id="name"
                  type="text"
                  placeholder={t("placeholderName")}
                  {...register("name", { onChange: () => clearErrors("name") })}
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
                <label className="label" htmlFor="name">
                  {t("placeholderName")}
                </label>
              </div>
              <div className="errorWrapperCl">
                {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
              </div>
            </div>

            <div className="w-full">
              <div className="w-full relative group">
                <input
                  className={clsx(
                    "inputsCl",
                    errors?.email && "border-customMarsala"
                  )}
                  id="email"
                  type="email"
                  placeholder={t("placeholderEmail")}
                  {...register("email", {
                    onChange: () => clearErrors("email"),
                  })}
                  // style={{ backgroundColor: "#fff !important " }}
                />
                <label className="label" htmlFor="name">
                  {t("placeholderEmail")}
                </label>
              </div>
              <div className="errorWrapperCl">
                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
              </div>
            </div>

            <div className="w-full">
              <div className="w-full relative group">
                <input
                  className={clsx(
                    "inputsCl",
                    errors?.phoneNumber && "border-customMarsala"
                  )}
                  id="phoneNumber"
                  type="tel"
                  placeholder={t("placeholderPhoneNumber")}
                  {...register("phoneNumber", {
                    onChange: () => clearErrors("phoneNumber"),
                  })}
                />
                <label className="label" htmlFor="name">
                  {t("placeholderPhoneNumber")}
                </label>
              </div>
              <div className="errorWrapperCl">
                {errors?.phoneNumber && (
                  <p>{errors?.phoneNumber?.message || "Error!"}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <div className="w-full relative group">
                <textarea
                  className={clsx(
                    "inputsCl h-28 pt-3 resize-none",
                    errors?.message && "border-customMarsala"
                  )}
                  autoCapitalize="sentences"
                  id="message"
                  placeholder={t("placeholderMessage")}
                  rows={8}
                  {...register("message", {
                    onChange: () => clearErrors("message"),
                  })}
                />
                <label className="label lTextarea" htmlFor="name">
                  {t("placeholderMessage")}
                </label>
              </div>
              <div className="errorWrapperCl">
                {errors?.message && (
                  <p>{errors?.message?.message || "Error!"}</p>
                )}
              </div>
            </div>

            <div className="group self-start px-4">
              <input
                id="accept"
                type="checkbox"
                className="checkboxCl peer"
                {...register("accept")}
              />
              <label className="labelCheckCl" htmlFor="accept">
                <span className="iconCheckWrapCl">
                  <Accept className="iconCheckCl" />
                </span>
                {t("acceptTerms")}
              </label>

              <div className="errorWrapperCl">
                {errors?.accept && <p>{errors?.accept?.message || "Error!"}</p>}
              </div>
            </div>

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
          <button
            type="button"
            className="submitBtn"
            onClick={
              () =>
                openModal(
                  <ModalNotificationForm closeModal={closeModal}>
                    OGOGO
                  </ModalNotificationForm>,
                  // slides={slides} initialSlide={idx} />
                  {
                    classNameBackdrop:
                      "bg-black bg-opacity-40 backdrop-blur-md",
                  }
                )
              // before:translate-x-1/2
              // after:translate-x-1/2
            }
          >
            <span>SUB</span>
            <i></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
