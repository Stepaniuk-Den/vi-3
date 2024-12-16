import SectionCardsAndBanner from "@/app/components/DoorsPage/SectionCardsAndBanner";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import { renderNestedParameterLists } from "@/helpers/renderNestedParameterLists";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const DoorsPvcSchuco: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("PVCDoorsSchucoPage");
  // const parametersList = t.raw(
  //   "SchucoProfile82Section.parametersList"
  // ) as Record<string, IParameterItem>;

  return (
    <section className="sectionCl pt-60">
      <SectionCarouselAndDescr t={t} />
      <SectionCardsAndBanner t={t.raw("SchucoProfilesSection")} />
      <div className="container">
        {/* {Object.entries(parametersList).map(([key, param]) => (
          <NestedParameterDescList
            key={key}
            param={param}
            titleBanner={true}
            description={true}
          />
        ))} */}
        {renderNestedParameterLists(t, "SchucoProfile82Section", true, true)}
      </div>
      {/* <SectionBannerAndList t={t.raw("SchucoProfile82Section")} /> */}
      <SectionCardsAndBanner
        t={t.raw("CardsSchuco82Section")}
        isShowtitle={false}
        isShowNested={true}
      />
      <SectionCardsAndBanner
        t={t.raw("PanelTypes")}
        isShowNested={true}
        isShowDescr={true}
        isShowTitleBanner={true}
      />
      <div className="container">
        {renderNestedParameterLists(t, "DoorFillingsTypes", true, true)}
      </div>
      <SectionCardsAndBanner
        t={t.raw("DoorFillingsTypes")}
        isShowtitle={false}
      />
            <SectionCardsAndBanner
        t={t.raw("EntranceDoorSystem")}
        isShowTitleBanner={true}
        // isShowtitle={false}
        isImgThreeList={true}
        columns={3}
      />
    </section>
  );
};

export default DoorsPvcSchuco;
