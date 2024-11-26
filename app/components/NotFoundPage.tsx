import { getTranslations } from "next-intl/server";
// import PageLayout from "./PageLayout";

const NotFoundPage = async () => {
  const t = await getTranslations("NotFoundPage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>

    // <PageLayout title={t("title")}>
    //   <p className="max-w-[460px]">{t("description")}</p>
    // </PageLayout>
  );
};

export default NotFoundPage;
