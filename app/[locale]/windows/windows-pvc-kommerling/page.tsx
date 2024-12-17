import Line from "@/app/components/Line";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import ProfilesCrossSections from "@/app/components/WindowsPages/ProfilesCrossSections";
import {
  IDesc,
  INestedCard,
  INestedCardsSectionItem,
  IProfilesCrossSections,
} from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type ISectionsList = {
  ProfilesCrossSections: {
    title: string;
    imgList: {
      [key: string]: string | INestedCard;
    };
    descriptionProfilesCrosSections: {
      [key: string]: string | IDesc;
    };
  };
  [key: string]: any;
};

// type ISectionsList = {
//   [key: string]: IProfilesCrossSections | INestedCardsSectionItem;
// }

type Props = {
  params: { locale: string };
};

const WindowsKommerlingPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

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

      <ProfilesCrossSections t={tSectionsList.ProfilesCrossSections} />

      {profileSchemeKeys.map((key) => (
        <NestedCardsSection
          key={key}
          tSectionItem={tSectionsList[key]}
          titleBanner={true}
          // titleBannerCard={idx === 0}
          // size={idx === 0 ? "small" : "large"}
          size={"large"}
          // sectionIdx={idx}
        />
      ))}
    </>
  );
};

export default WindowsKommerlingPage;
