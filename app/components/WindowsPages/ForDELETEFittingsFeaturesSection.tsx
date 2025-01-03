import { INestedCardsSectionItem } from "@/helpers/interfaces";
import NestedCardsSection from "../NestedCardsSection";

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
        imgFit="contain"
      />
    </>
  );
};

export default FittingsFeaturesSection;
