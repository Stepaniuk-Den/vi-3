"use client";

import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const t = useTranslations("Buttons");

  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="linkToPageCl">
      {pending ? `${t("sending")}` : `${t("submit")}`}
    </button>
  );
};

export default SubmitButton;
