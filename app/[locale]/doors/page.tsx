import CardsSection from "@/app/components/CardsSection";
import DoorsPageDescription from "@/app/components/DoorsPage/DoorsPageDescription";
import MessageBanner from "@/app/components/MessageBanner";
import { getTranslations, setRequestLocale } from "next-intl/server";


type Props = {
  params: { locale: string };
};

const DoorsPage: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = await getTranslations("DoorsPage");
  const tButtons = await getTranslations("Buttons");

  return (
    <>
      <section className="sectionCl pt-60">
       <DoorsPageDescription t={t} />
       <MessageBanner t={t} />
       <CardsSection t={t} tBtn={tButtons} source="doorsList" wrapper={false} path="doors" background="blue" />
      </section>
      
    </>
  );
};

export default DoorsPage;

