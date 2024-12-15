import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsAccessories: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("AccessoriesPage");

  return (
    <>
      <section className="sectionCl pt-60">
      <SectionCarouselAndDescr t={t} />
      </section>
      
    </>
  );
};

export default DoorsAccessories;