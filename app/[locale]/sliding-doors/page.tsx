import CardsSection from "@/app/components/CardsSection";
import ContactForm from "@/app/components/ContactForm";
import MessageBanner from "@/app/components/MessageBanner";
import PageTopDescription from "@/app/components/PageTopDescription";
import { generateMetadataPage } from "@/helpers/generateMetadata";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return generateMetadataPage(params.locale, "SlidingDoorsPage");
}

const SlidingDoorsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations();
  const tMessage = t.raw("MessageBanner");
  const tSlidingDoors = useTranslations("SlidingDoorsPage");
  const tButtons = useTranslations("Buttons");

  return (
    <>
      <PageTopDescription t={tSlidingDoors} />
      <MessageBanner t={tMessage} locale={locale} />
      <CardsSection
        t={tSlidingDoors}
        tBtn={tButtons}
        source="slidingDoorsList"
        wrapper={false}
        path="sliding-doors"
        background="blue"
        imgH={"h-[360px] md:h-[280px] lg:h-[360px]"}
      />
      <ContactForm />
    </>
  );
};

export default SlidingDoorsPage;
