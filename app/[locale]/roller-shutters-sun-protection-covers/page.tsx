import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CardsSection from "@/app/components/CardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";

type Props = {
  params: { locale: string };
};

const RollerBlindsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("RollerBlindsPage");
  const tButtons = useTranslations("Buttons");

  return (
    <>
      <PageTopDescription t={t} />
      <CardsSection
        t={t}
        tBtn={tButtons}
        source="rollersList"
        wrapper={false}
        path="roller-shutters-sun-protection-covers"
        background="marsala"
      />
    </>
  );
};

export default RollerBlindsPage;
