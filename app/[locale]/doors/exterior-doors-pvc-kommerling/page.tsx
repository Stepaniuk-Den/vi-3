import SectionCardsAndBanner from "@/app/components/DoorsPage/SectionCardsAndBanner";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionImgAndList from "@/app/components/DoorsPage/SectionImgAndList";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsPvcKommerling: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

    const t = useTranslations("PVCDoorsKommerlingPage");

  return (
    <>
      <section className="sectionCl pt-60">
      <SectionCarouselAndDescr t={t} />
      <SectionImgAndList t={t.raw("FeaturesKommerling76Section")} t2={t} source="FeaturesKommerling76Section" isTitleBanner={false} isDescription={false} />
      <SectionCardsAndBanner
        t={t.raw("OutwardDoors76Section")}
        isShowDescr={true}
        isShowTitleBanner={true}
      />
      <SectionCardsAndBanner
        t={t.raw("InwardDoors76Section")}
        isShowDescr={true}
        isShowTitleBanner={true}
      />
            <SectionCardsAndBanner
        t={t.raw("DoorSillFeatures")}
        isShowDescr={true}
        isShowTitleBanner={true}
      />
                  <SectionCardsAndBanner
        t={t.raw("DoorSealsEPDM")}
        isShowDescr={true}
        isShowTitleBanner={true}
        isImgThreeList={true}
        columns={3}
        isNestedCard={false}
      />

      </section>
      
    </>
  );
};

export default DoorsPvcKommerling;