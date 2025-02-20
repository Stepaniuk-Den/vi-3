import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import MessageBanner from "@/app/components/MessageBanner";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import { INestedCardsSectionItem } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "WindowsPage",
    "windowsElementsList",
    1,
    "windows",
    true
  );
}

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
          // size={idx === 0 ? "w-full" : "max-w-[396px]"}
          // size={
          //   idx === 0
          //     ? "w-[380px] md:w-[354px] lg:w-[478px] xl:w-[606px]"
          //     : "w-[396px] md:w-[356px] lg:w-[396px]"
          // }
          // imgH={
          //   idx === 0
          //     ? "h-[288px] md:h-[268px] lg:h-[362px] xl:h-[460px]"
          //     : "h-[460px] md:h-[414px] lg:h-[460px]"
          // }
          // imgFit="contain"

          size={
            idx === 0
              ? "w-full sm:w-[380px] md:w-[354px] lg:w-[478px] xl:w-[606px]"
              : "w-full sm:w-[396px] md:w-[356px] lg:w-[396px]"
          }
          imgH={
            idx === 0
              ? "h-[240px] sm:h-[288px] md:h-[268px] lg:h-[362px] xl:h-[460px]"
              : "h-[240px] sm:h-[460px] md:h-[414px] lg:h-[460px]"
          }
          imgFit="cover"
          // positioning={idx === 0 ? "grid" : "flexWrap"}
          positioning="flexWrap"
          isRow={false}
          // titleBannerCard={idx === 0}
          // size={idx === 0 ? "w-1/4" : "w-full"}
          // sectionIdx={idx}
        />
      ))}
    </>
  );
};

export default WindowsGlassPage;
