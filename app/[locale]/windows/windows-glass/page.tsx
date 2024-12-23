import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import MessageBanner from "@/app/components/MessageBanner";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import {
  INestedCardsSectionItem,
  INestedCardsSectionsList,
} from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const WindowsGlassPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsGlassPage");
  const MessageBannerT = useTranslations("MessageBanner");
  const carouselSectionInfo = useTranslations(
    "WindowsGlassPage.CarouselSection"
  );

  const tSectionsList = Object.values(t.raw("SectionsList"));

  return (
    <>
      <div className="pageCl">
        <PageTopDescription t={t} />
        <MessageBanner t={MessageBannerT} />
        <SectionCarouselAndDescr t={carouselSectionInfo} />
        {tSectionsList.map((tSectionItem, idx) => (
          <NestedCardsSection
            key={idx}
            tSectionItem={tSectionItem as INestedCardsSectionItem}
            titleBanner={true}
            size="large"
            isGrid={true}
            isRow={false}
            // titleBannerCard={idx === 0}
            // size={idx === 0 ? "small" : "large"}
            // sectionIdx={idx}
          />
        ))}
      </div>
    </>
  );
};

export default WindowsGlassPage;
