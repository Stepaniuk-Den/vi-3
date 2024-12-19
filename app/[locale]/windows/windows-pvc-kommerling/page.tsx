import ItemCard from "@/app/components/ItemCard";
import Line from "@/app/components/Line";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import OfferSection from "@/app/components/WindowsPages/OfferSection";
import ProfilesCrossSections from "@/app/components/WindowsPages/ProfilesCrossSections";
import {
  IDesc,
  IItemCard,
  INestedCard,
  INestedCardsSectionItem,
  IProfilesCrossSections,
} from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type ISectionsList = {
  [key: string]: IProfilesCrossSections;
  // {
  //   title: string;
  //   imgList: {
  //     [key: string]: string | INestedCard;
  //   };
  //   descriptionProfilesCrosSections: {
  //     [key: string]: string | IDesc;
  //   };
  // };
} & {
  [key: string]: INestedCardsSectionItem;
} & {
  [key: string]: {
    title: string;
    // imgList: {
    //   [key: string]: string | INestedCard;
    // };
    [key: string]: string | IItemCard;
  };
};

type Props = {
  params: { locale: string };
};

const WindowsKommerlingPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const tButtons = useTranslations("Buttons");
  const t = useTranslations("WindowsPVCKommerlingPage");

  const tSectionsList = t.raw("SectionsList") as ISectionsList;

  const profileSchemeKeys = Object.keys(tSectionsList).filter((key) =>
    key.startsWith("ProfilesScheme")
  );

  return (
    <>
      <section className="sectionCl pt-60">
        <div className="container">
          <h1 className="titleCl">{t("pageTitle")}</h1>
          <h2 className="subTitleCl mt-5 text-center">{t("pageSubtitle")}</h2>
          <Line className="marsala-center" color="marsala" />
          <p className="mb-4">{t("description")}</p>
        </div>
      </section>

      <OfferSection t={tSectionsList.OfferSection} tBtn={tButtons} />
      <ProfilesCrossSections t={tSectionsList.ProfilesCrossSections} />

      {profileSchemeKeys.map((key) => (
        <NestedCardsSection
          key={key}
          tSectionItem={tSectionsList[key]}
          titleBanner={true}
          size={"large"}
          // titleBannerCard={idx === 0}
          // size={idx === 0 ? "small" : "large"}
          // sectionIdx={idx}
        />
      ))}
    </>
  );
};

export default WindowsKommerlingPage;
