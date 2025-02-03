import Line from "@/app/components/Line";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import OfferSection from "@/app/components/WindowsPages/OfferSection";
import ProfilesCrossSections from "@/app/components/WindowsPages/ProfilesCrossSections";
import {
  IItemCard,
  INestedCardsSectionItem,
  IProfilesCrossSections,
} from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type ISectionsList = {
  [key: string]: IProfilesCrossSections;
} & {
  [key: string]: INestedCardsSectionItem;
} & {
  [key: string]: {
    title: string;
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
    <div className="pb-24">
      <section className="pageCl">
        <div className="container">
          <h1 className="titleCl pt-16">{t("title")}</h1>
          <h2 className="subTitleCl mt-5 text-center">{t("subtitle")}</h2>
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
          size="w-full sm:w-[380px] md:flex-1"
          imgH="h-[240px] md:h-[360px] lg:h-[368px] xl:h-[460px]"
          imgFit="cover"
          // titleBannerCard={idx === 0}
          // size={idx === 0 ? "w-1/4" : "w-full"}
          // sectionIdx={idx}
        />
      ))}
    </div>
  );
};

export default WindowsKommerlingPage;
