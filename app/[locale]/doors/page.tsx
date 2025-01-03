import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CardsSection from "@/app/components/CardsSection";
import MessageBanner from "@/app/components/MessageBanner";
import PageTopDescription from "@/app/components/PageTopDescription";


type Props = {
  params: { locale: string };
};

const DoorsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t =  useTranslations("DoorsPage");
  const MessageBannerT =  useTranslations("MessageBanner");
  const tButtons =  useTranslations("Buttons");



  return (
      <>
       <PageTopDescription t={t} />
       <MessageBanner t={MessageBannerT} />
       <CardsSection t={t} tBtn={tButtons} source="doorsList" wrapper={false} path="doors" background="blue" />
       <CardsSection t={t} tBtn={tButtons} source="doorsFeatures" wrapper={true} path="doors" background="marsala" />
      </>
  );
};

export default DoorsPage;

