"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { callRequestSchema, ICallRequestSchema } from "@/helpers/formSchema";
import { useModal } from "./ModalProvider";
import { SelectChangeEvent } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "./Buttons/SubmitButton";
import clsx from "clsx";
import TimeSelect from "./MuiSelect/TimeSelect";
import DateSelect from "./MuiSelect/DateSelect";
import Observer from "@/helpers/observer";

const CallRequestForm = () => {
  const t = useTranslations("CallForm");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
    clearErrors,
    setValue,
  } = useForm<ICallRequestSchema>({
    resolver: zodResolver(callRequestSchema(t)),
    defaultValues: {
      phone: "",
      date: "",
      time: "",
    },
    mode: "onBlur",
  });

  const [availableDates, setAvailableDates] = useState<
    { value: string; label: string }[]
  >([]);
  const [message, setMessage] = useState<string>("");
  const [subMessage, setSubMessage] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const { closeModal } = useModal();

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    // const currentHour = 10;

    const workingHoursStart = 9;
    const workingHoursEnd = 18;

    let messageText = "";
    let messageSubText = "";

    let options = [];

    if (currentHour < workingHoursStart || currentHour >= workingHoursEnd) {
      messageText = t("nonWorkText");
      messageSubText = t("nonSubWorkText");
    } else {
      messageText = t("workText");
      messageSubText = t("subWorkText");
    }

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const dayNames = [
      t("daysOfWeek.sunday"),
      t("daysOfWeek.monday"),
      t("daysOfWeek.tuesday"),
      t("daysOfWeek.wednesday"),
      t("daysOfWeek.thursday"),
      t("daysOfWeek.friday"),
      t("daysOfWeek.saturday"),
    ];

    if (currentHour < 9) {
      options = [
        { value: today.toISOString().split("T")[0], label: t("today") },
        { value: tomorrow.toISOString().split("T")[0], label: t("tomorrow") },
      ];
    } else if (currentHour < 18) {
      options = [
        { value: today.toISOString().split("T")[0], label: t("today") },
        { value: tomorrow.toISOString().split("T")[0], label: t("tomorrow") },
      ];
    } else {
      options = [
        { value: tomorrow.toISOString().split("T")[0], label: t("tomorrow") },
        {
          value: dayAfterTomorrow.toISOString().split("T")[0],
          label: dayNames[dayAfterTomorrow.getDay()],
        },
      ];
    }

    setAvailableDates(options);
    setMessage(messageText);
    setSubMessage(messageSubText);
    // setValue("date", options[0].value);
    setValue("date", "");
  }, [setValue]);

  const onSubmit = async (data: ICallRequestSchema) => {
    const { phone, date, time } = data;

    const response = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, time, phone: phone }),
    });

    if (response.ok) {
      setShowForm(false);
      setMessage(t("formSuccessMessage"));
      setShowMessage(true);
      reset();
    } else {
      let errorMessage = t("errorMessages.unknownError");

      if (response.status === 500) {
        errorMessage = t("errorMessages.serverError");
      } else if (response.status === 429) {
        errorMessage = t("errorMessages.tooManyRequests");
      }
      // setMessage(t("formErrorMessage"));
      setMessage(errorMessage);
      setShowForm(false);
      setShowMessage(true);
    }
  };

  const handleDateChange = (e: SelectChangeEvent<unknown>) => {
    setValue("date", e.target.value as string);
    clearErrors("date");
  };

  return (
    <>
      {showMessage && (
        <div className=" flex items-center justify-center flex-col text-center">
          <p className="mt-28 mb-5">{message}</p>
          <button onClick={closeModal} className="linkToPageCl text-center">
            <span>{t("close")}</span>
            <i></i>
          </button>
        </div>
      )}

      {showForm && (
        <div>
          <p className="mb-4 text-base lg:text-lg text-center">{message}</p>
          <Observer
            animation="zoom-in"
            duration="0.8s"
            classNameObserver="flex justify-center"
            classNameChild="laser-text"
          >
            <p
              data-text={subMessage}
              className="subTitleCl inline-block mb-4 landscape:max-[1023.98px]:mb-6 portrait:md:mb-12 lg:mb-10 font-open_sans normal-case portrait:md:uppercase"
            >
              {subMessage}
            </p>
          </Observer>
          {/* <p className="mb-5 text-base">{subMessage}</p> */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="flex flex-col sm:flex-row portrait:md:flex-col lg:flex-col justify-between sm:gap-3">
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-7 w-full mb-3">
                <div className="w-full landscape:max-[1023.98px]:w-[50%]">
                  <div className="w-full relative flex flex-col group">
                    {/* <select
                id="date"
                  {...register("date", { required: "Оберіть дату" })}
                  className=" w-full border-2 border-solid border-customElement rounded-md py-2 pr-4 pl-3 h-11 appearance-none  peer focus:outline-none "
                  value={watch("date")}
                  onChange={(e) => setValue("date", e.target.value)}
                >
                  {availableDates.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="date"
                  className={`absolute left-3 top-1/2 -translate-y-[159%] text-sm text-customElement bg-white
                 `}
                >
                  {t("date")}
                </label> */}
                    {/* <IconArrowRounded className="absolute inset-y-0 top-4 right-3 flex items-center pointer-events-none fill-customElement w-3 h-3 rotate-90" /> */}
                    <DateSelect
                      label={t("date")}
                      value={watch("date")}
                      onChange={handleDateChange}
                      options={availableDates}
                      error={errors?.date?.message}
                    />
                  </div>
                  <div className="errorWrapperCl !pl-0">
                    {" "}
                    {errors?.date && (
                      <p className="text-xs text-customMarsala">
                        {errors.date.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full landscape:max-[1023.98px]:w-[50%]">
                  <div className="w-full relative">
                    <TimeSelect
                      onChange={(selectedTime) => {
                        setValue("time", selectedTime);
                        clearErrors("time");
                      }}
                      // selectedDate={watch("time")}
                      selectedDate={watch("date")}
                      t={t}
                      disabled={!watch("date") || watch("date") === ""}
                      error={errors?.time?.message}
                    />
                  </div>
                  <div className="errorWrapperCl !pl-0">
                    {errors?.time && (
                      <p className=" text-xs text-customMarsala">
                        {errors.time.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full mb-3 landscape:max-[1023.98px]:w-[50%]">
                <div className="w-full relative group">
                  <input
                    className={clsx(
                      "inputsCl h-[52px]",
                      errors?.phone && "border-customMarsala"
                    )}
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={t("phone")}
                    {...register("phone", {
                      onChange: () => clearErrors("phone"),
                    })}
                  />
                  <label
                    className={clsx("label", errors?.phone && "text-red-600")}
                    htmlFor="phone"
                  >
                    {t("phone")}
                  </label>
                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="errorWrapperCl !pl-0">
                  {errors?.phone && (
                    <p className="text-xs">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <SubmitButton isSubmitting={isSubmitting} />
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              {t("notice")}
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default CallRequestForm;
