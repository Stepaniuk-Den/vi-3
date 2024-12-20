import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
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
          // titleBannerCard={idx === 0}
          size={idx === 0 ? "small" : "large"}
          // sectionIdx={idx}
        />
      ))}
    </>
  );
};

export default WindowsAluAliplastPage;
