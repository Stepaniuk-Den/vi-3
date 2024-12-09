import { useTranslations } from "next-intl";
import PageLayout from "./PageLayout";
import Line from "./Line";
// import PageLayout from "./PageLayout";

const NotFoundPage = () => {
  const t = useTranslations("NotFoundPage");

  return (
    // <div>
    //   <h1>{t("title")}</h1>
    //   <p>{t("description")}</p>
    // </div>

    <PageLayout>
      <h1 className="titleCl">{t("title")}</h1>
      <Line className="marsala-center" color="marsala"></Line>
      <p className="subTitleCl max-w-[460px] mx-auto normal-case">
        {t("description")}
      </p>
    </PageLayout>
  );
};

export default NotFoundPage;
