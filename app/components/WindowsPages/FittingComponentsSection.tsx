import { INestedCard } from "@/helpers/interfaces";
import TitleBanner from "../TitleBanner";
import Image from "next/image";

type Props = {
  t: {
    title: string;
    card: INestedCard;
  };
};
const FittingComponentsSection: React.FC<Props> = ({ t }) => {
  const cardFittingComponents = t.card;

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{t.title}</h3>
        </TitleBanner>

        <div className="relative w-full h-[520px] border border-gray-300 rounded-md overflow-hidden">
          <Image
            sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
            src={cardFittingComponents.src || ""}
            alt={cardFittingComponents.alt || ""}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FittingComponentsSection;
