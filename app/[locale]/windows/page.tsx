import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const WindowsPage: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale;

  const tWindowPage = getTranslations("WindowPage");

  return <div></div>;
};

export default WindowsPage;
