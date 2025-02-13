import CardsSection from "@/app/components/CardsSection";
import ContactForm from "@/app/components/ContactForm";
import MessageBanner from "@/app/components/MessageBanner";
import PageTopDescription from "@/app/components/PageTopDescription";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsPage");
  const tMessage = useTranslations("MessageBanner");
  const tButtons = useTranslations("Buttons");

  return (
    <>
      <PageTopDescription t={t} />
      <MessageBanner t={tMessage} />
      <CardsSection
        t={t}
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
