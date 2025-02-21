
import { useTranslations } from "next-intl";
import ContactForm from "@/app/components/ContactForm";
import { generateMetadataPage } from "@/helpers/generateMetadata";
import { setRequestLocale } from "next-intl/server";
import PageTopDescription from "@/app/components/PageTopDescription";
import ContactCardsSection from "@/app/components/ContactPage/ContactCardsSection";

type Props = {
  params: { locale: string };
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return generateMetadataPage(params.locale, "Contact");
}

const ContactsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("Contact");
  // const cardListOpt = Object.values(t.raw("pskTiltOpt") as IImgList);

  return (
    <>
      <PageTopDescription t={t} />
      <ContactCardsSection t={t} />
      <ContactForm />
    </>
  );
};

export default ContactsPage;
