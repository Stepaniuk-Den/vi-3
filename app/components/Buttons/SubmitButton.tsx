"use client";

import { useTranslations } from "next-intl";

type Props = {
  isSubmitting: boolean;
};

const SubmitButton: React.FC<Props> = ({ isSubmitting }) => {
  const t = useTranslations("Buttons");

  //   const { pending } = useFormStatus();

  return (
    <button disabled={isSubmitting} type="submit" className="linkToPageCl">
      <span>{isSubmitting ? `${t("sending")}` : `${t("submit")}`}</span>
      <i></i>
    </button>
  );
};

export default SubmitButton;
