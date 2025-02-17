import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { generateMetadataPage } from "@/helpers/generateMetadata";
import CardsSection from "@/app/components/CardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import ContactForm from "@/app/components/ContactForm";


type Props = {
  params: { locale: string };
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return generateMetadataPage(params.locale, "RollerBlindsPage");
}

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
        path="roller-shutters"
        background="marsala"
        imgH={"h-[360px] md:h-[280px] lg:h-[360px]"}
      />
      <ContactForm />
    </>
  );
};

export default RollerBlindsPage;
