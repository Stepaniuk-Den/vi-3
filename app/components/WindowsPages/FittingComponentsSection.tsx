import { INestedCard } from "@/helpers/interfaces";
import TitleBanner from "../TitleBanner";
import ModalTrigger from "../ModalTrigger";

type Props = {
  t: {
    title: string;
    card: INestedCard;
  };
};
const FittingComponentsSection: React.FC<Props> = ({ t }) => {
  const cardFittingComponents = t.card;
  const imgCardFittingComponents = {
    id: cardFittingComponents.id || "",
    src: cardFittingComponents.src || "",
    alt: cardFittingComponents.alt || "",
  };

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{t.title}</h3>
        </TitleBanner>

        <ModalTrigger
          className="relative w-full h-[520px] border border-gray-300 rounded-md overflow-hidden"
          src={cardFittingComponents.src || ""}
          alt={cardFittingComponents.alt || ""}
          img={[imgCardFittingComponents]}
        />
      </div>
    </section>
  );
};

export default FittingComponentsSection;
