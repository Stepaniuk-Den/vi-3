
// import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const ContactsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  // const t = useTranslations("SlidingDoorsPage");
  // const tMessage = useTranslations("MessageBanner");
  // const tButtons = useTranslations("Buttons");

  return (
    <div>
    </div>
  );
};

export default ContactsPage;
