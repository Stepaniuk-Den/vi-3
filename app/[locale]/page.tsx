// import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageLayout from "../components/PageLayout";

type Props = {
  // params: { locale: string };
  params: Promise<{ locale: string }>;
};

export default async function IndexPage({ params }: Props) {
  // const { locale } = await Promise.resolve(params);
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("IndexPage");

  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[590px] text-xl">{t("description")}</p>
    </PageLayout>
  );
}

// export default function Home({ params: { locale } }: Props) {
//   setRequestLocale(locale);

//   const t = useTranslations("HomePage");

//   return (
//     <section>
//       <div className="pt-48">
//         <h1>{t("title")}</h1>
//         <p>{t("description")}</p>
//       </div>
//     </section>
//   );
// }
