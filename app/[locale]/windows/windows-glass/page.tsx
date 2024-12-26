import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import MessageBanner from "@/app/components/MessageBanner";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import { INestedCardsSectionItem } from "@/helpers/interfaces";
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
      <PageTopDescription t={t} />
      <MessageBanner t={MessageBannerT} />
      <SectionCarouselAndDescr t={carouselSectionInfo} />
      {tSectionsList.map((tSectionItem, idx) => (
        <NestedCardsSection
          key={idx}
          tSectionItem={tSectionItem as INestedCardsSectionItem}
          titleBanner={true}
          size={idx === 0 ? "w-full" : "max-w-[396px]"}
          positioning={idx === 0 ? "grid" : "flexWrap"}
          isRow={false}
          imageFit="contain"
          // titleBannerCard={idx === 0}
          // size={idx === 0 ? "w-1/4" : "w-full"}
          // sectionIdx={idx}
        />
      ))}
    </>
  );
};

export default WindowsGlassPage;
