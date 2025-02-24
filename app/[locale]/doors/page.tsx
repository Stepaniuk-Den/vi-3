import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { generateMetadataPage } from "@/helpers/generateMetadata";
import CardsSection from "@/app/components/CardsSection";
import MessageBanner from "@/app/components/MessageBanner";
import PageTopDescription from "@/app/components/PageTopDescription";
import ContactForm from "@/app/components/ContactForm";

type Props = {
  params: { locale: string };
};

// export const metadata:Metadata ={
//   title:"Doors",
//   description:"Buy high-quality doors, windows, and roller shutters at the best prices. Wide selection, fast delivery, and quality guarantee. Choose comfort and security for your home!",
// }

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return generateMetadataPage(params.locale, "DoorsPage");
}

const DoorsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations();
  const tDoorsPage = useTranslations("DoorsPage");
  const MessageBannerT = t.raw("MessageBanner");
  const tButtons = useTranslations("Buttons");

  return (
    <>
      <PageTopDescription t={tDoorsPage} />
      <MessageBanner t={MessageBannerT} locale={locale} />
      <CardsSection
        t={tDoorsPage}
        tBtn={tButtons}
        source="doorsList"
        wrapper={false}
        path="doors"
        background="blue"
        imgH={"h-[360px] md:h-[280px] lg:h-[360px]"}
      />
      <CardsSection
        t={t}
        tBtn={tButtons}
        source="doorsFeatures"
        wrapper={true}
        path="doors"
        background="marsala"
        imgH={"h-[360px] md:h-[280px] lg:h-[360px]"}
      />
      <ContactForm />
    </>
  );
};

export default DoorsPage;
