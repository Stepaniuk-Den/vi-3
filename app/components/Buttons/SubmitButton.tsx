"use client";

import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

type Props = {
    isSubmitting: boolean
}

const SubmitButton: React.FC<Props> = ({ isSubmitting }) => {
  const t = useTranslations("Buttons");

  //   const { pending } = useFormStatus();

  return (
    <button disabled={isSubmitting} type="submit" className="linkToPageCl">
      {isSubmitting ? `${t("sending")}` : `${t("submit")}`}
    </button>
  );
};

export default SubmitButton;
