import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";



type Props = {
  params: { locale: string };
};

const DoorsAccessories: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("AccessoriesPage");

  return (
    <>
      <section className="pageCl">
      <SectionCarouselAndDescr t={t} />
      </section>
      
    </>
  );
};

export default DoorsAccessories;