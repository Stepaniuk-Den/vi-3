import { INestedCardsSectionItem } from "@/helpers/interfaces";
import Line from "../Line";
import NestedCardsSection from "../NestedCardsSection";
import TitleBanner from "../TitleBanner";

type Props = {
  t: INestedCardsSectionItem;
};

const FittingsFeaturesSection: React.FC<Props> = ({ t }) => {
  return (
    <>
      <NestedCardsSection
        tSectionItem={t}
        titleBanner={true}
        size={"max-w-[384px]"}
        positioning={"flexWrap"}
        isRow={false}
        imageFit="contain"
      />
    </>
  );
};

export default FittingsFeaturesSection;
