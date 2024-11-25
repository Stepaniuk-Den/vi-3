import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <section className="">
      <div className="">
        <div className="pt-48">
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
      </div>
    </section>
  );
}
