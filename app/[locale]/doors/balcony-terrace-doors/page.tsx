import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import {
  bigMobOrderSixItems,
  mobileOrderSixItems,
  mobileOrderSixItems2,
} from "@/data/MobileAndDesktopOrder";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionDescrAndCards from "@/app/components/DoorsPage/SectionDescrAndCards";
import SectionListAndCards from "@/app/components/DoorsPage/SectionListAndCards";

type Props = {
  params: { locale: string };
};
export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "DoorsPage",
    "doorsList",
    5,
    "doors"
  );
}

const DoorsBalconyTerrace: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("BalconyTerraceDoorsPage");

  return (
    <>
      <SectionCarouselAndDescr t={t} />
      <SectionListAndCards
        t={t.raw("BalconyNarrowKömmerling")}
        columns={3}
        mobileOrder={mobileOrderSixItems}
        bigMobOrder={bigMobOrderSixItems}
      />
      <SectionDescrAndCards t={t.raw("BalconyNarrowSchuco")} columns={4} />
      <SectionListAndCards
        t={t.raw("BalconyWideKömmerling")}
        columns={3}
        mobileOrder={mobileOrderSixItems}
        bigMobOrder={bigMobOrderSixItems}
      />
      <SectionDescrAndCards
        t={t.raw("BalconyWideSchuco")}
        columns={2}
        mobileOrder={mobileOrderSixItems2}
        bigMobOrder={bigMobOrderSixItems}
      />
    </>
  );
};

export default DoorsBalconyTerrace;
