import NestedCardsSection from "@/app/components/NestedCardsSection";
import { IImage } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

interface IImgList {
  [key: string]: IImage;
}

const SlidingDoorsHsKom: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsHsKomPage");
  const tImgList = t.raw("imgList") as IImgList;
  const tCardsList = t.raw("komPremiCross") as IImgList;
  const imgList = Object.values(tImgList);
  const cardsList = Object.values(tCardsList);

  return (
    <>
      <section className="sectionCl pt-60">
        <NestedCardsSection
          tSectionItem={tCardsList}
          size="w-1/2"
          titleBanner
          isRow={false}
          descReverse
        />
      </section>
    </>
  );
};

export default SlidingDoorsHsKom;
