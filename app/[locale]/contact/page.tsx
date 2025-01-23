
import ImageSlider from "@/app/components/ImageSlider";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const ContactsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsPage");
  const tMessage = useTranslations("MessageBanner");
  const tButtons = useTranslations("Buttons");

  return (
    <>
      <ImageSlider />
    </>
  );
};

export default ContactsPage;
