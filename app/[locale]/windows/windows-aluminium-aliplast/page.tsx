import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import {
  INestedCardsSectionItem,
  INestedCardsSectionsList,
} from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

// type ISectionsList = {
//   [key: string]: INestedCardsSectionsList;
// } & {
//   [key: string]: INestedCardsSectionItem;
// } & {
//   [key: string]: {
//     title: string;
//     [key: string]: string | IItemCard;
//   };
// };

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "WindowsPage",
    "windowsProfilesList",
    3,
    "windows",
    true
  );
}

const WindowsAluAliplastPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsAluAliplastPage");

  const tSectionsList = t.raw("SectionsList") as INestedCardsSectionsList;

  return (
    <>
      <PageTopDescription t={t} />
      {Object.values(tSectionsList).map((tSectionItem, idx) => (
        <NestedCardsSection
          key={idx}
          tSectionItem={tSectionItem as INestedCardsSectionItem}
          titleBanner={true}
          // size={
          //   idx === 0 ? "w-[212px] md:w-1/4" : "w-full sm:w-[380px] md:flex-1/2"
          // }
          // imgH={
          //   idx === 0
          //     ? "h-[288px] md:h-[290px] lg:h-[360px] xl:h-[460px]"
          //     : "h-[240px] sm:h-[360px] lg:h-[368px] xl:h-[460px]"
          // }
          // imgFit="contain"
          size={
            idx === 0
              ? "w-full sm:w-[212px] md:w-1/4"
              : "w-full sm:w-[380px] md:flex-1/2"
          }
          imgH={
            idx === 0
              ? "h-[240px] sm:h-[288px] md:h-[290px] lg:h-[360px] xl:h-[460px]"
              : "h-[240px] sm:h-[360px] lg:h-[368px] xl:h-[460px]"
          }
          imgFit="cover"
          positioning="flexWrap"
          // sectionIdx={idx}
        />
      ))}
    </>
  );
};

export default WindowsAluAliplastPage;
