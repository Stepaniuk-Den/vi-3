import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsFolding: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("FoldingDoorsPage");

  return (
    <>
      <section className="sectionCl pt-60">
      <SectionCarouselAndDescr t={t} />
      </section>
      
    </>
  );
};

export default DoorsFolding;