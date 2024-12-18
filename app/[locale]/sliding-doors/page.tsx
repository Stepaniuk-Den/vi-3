import CardsSection from "@/app/components/CardsSection";
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
      <section className="pageCl">
        <PageTopDescription t={t} />
        <MessageBanner t={tMessage} />
        <CardsSection
          t={t}
          tBtn={tButtons}
          source="slidingDoorsList"
          wrapper={false}
          path="sliding-doors"
          background="blue"
        />
      </section>
    </>
  );
};

export default SlidingDoorsPage;
