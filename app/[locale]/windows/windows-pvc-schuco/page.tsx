import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Line from "@/app/components/Line";

type Props = {
  params: { locale: string };
};

const WindowsPVCSchucoPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations();
  return (
    <section className="sectionCl pt-60">
      <div className="container">
        <h1 className="titleCl">{t("title")}</h1>
        <Line className="marsala-center" color="marsala" />
        <h2 className="subTitleCl text-center">{t("subtitle")}</h2>
        <Line className="marsala-center" color="marsala" />
        <p className="mb-4">{t("pageDesc1")}</p>
      </div>
    </section>
  );
};

export default WindowsPVCSchucoPage;
