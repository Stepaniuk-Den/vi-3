import { useTranslations } from "next-intl";
import PageLayout from "./PageLayout";
import Line from "./Line";

const NotFoundPage = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <PageLayout>
      <div className="container py-80 text-center h-screen">
        <h1 className="titleCl">{t("title")}</h1>
        <Line className="marsala-center" color="marsala"></Line>
        <p className="subTitleCl max-w-[460px] mx-auto normal-case">
          {t("description")}
        </p>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
