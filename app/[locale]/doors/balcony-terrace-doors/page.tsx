import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { bigMobOrderSixItems, mobileOrderSixItems, mobileOrderSixItems2 } from "@/data/MobileAndDesktopOrder";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionDescrAndCards from "@/app/components/DoorsPage/SectionDescrAndCards";
import SectionListAndCards from "@/app/components/DoorsPage/SectionListAndCards";

type Props = {
  params: { locale: string };
};


const DoorsBalconyTerrace: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("BalconyTerraceDoorsPage");

  return (
    <section className="pageCl">
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
      <SectionDescrAndCards t={t.raw("BalconyWideSchuco")} columns={2}  mobileOrder={mobileOrderSixItems2}
        bigMobOrder={bigMobOrderSixItems} />
    </section>
  );
};

export default DoorsBalconyTerrace;
