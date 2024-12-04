import ProfilesSection from "@/app/components/WindowsPage/ProfilesSection";
import { getTranslations, setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsPage: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = await getTranslations("DoorsPage");
  const tButtons = await getTranslations("Buttons");

  return (
    <>
      <section className="sectionCl pt-60">
       <h1>This is DoorPage</h1>
       <ProfilesSection t={t} tBtn={tButtons} source="doorsList" wrapper={false}/>
      </section>
      
    </>
  );
};

export default DoorsPage;

