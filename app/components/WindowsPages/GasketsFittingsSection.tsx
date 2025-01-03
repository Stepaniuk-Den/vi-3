import { INestedCard, IParametersList } from "@/helpers/interfaces";
import NestedParameterDescList from "../NestedParameterDescList";
import Image from "next/image";

type Props = {
  t: {
    title: string;
    subTitle: string;
    gaskets: {
      subTitle: string;
      // [key: string]: INestedCard | { parametersList: IParametersList };
      card: INestedCard;
      parametersList: IParametersList;
    };
    fittings: {
      subTitle: string;
      card: INestedCard;
    };
  };
};

const GasketsFittingsSection: React.FC<Props> = ({ t }) => {
  const gaskets = t.gaskets;
  const cardGaskets = gaskets.card;
  const parametersArr = Object.entries(gaskets.parametersList);
  const fittings = t.fittings;
  const cardFittings = fittings.card;

  return (
    <>
      <section className="sectionCl">
        <div className="container">
          <h2 className="sr-only">{t.title}</h2>
          <div className="flex justify-between">
            <div className="w-1/2">
              <h3 className="subTitleCl mb-3">{cardGaskets.title}</h3>
              <div className="relative w-full h-[520px] border border-gray-300 rounded-md overflow-hidden">
                <Image
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={cardGaskets.src || ""}
                  alt={cardGaskets.alt || ""}
                  fill
                  priority
                />
              </div>
            </div>
            <div className="w-1/2">
              <h4 className="subTitleCl mb-2 pl-6">{gaskets.subTitle}</h4>
              <ul>
                {parametersArr.map(([key, param]) => (
                  <li key={key}>
                    <NestedParameterDescList param={param} description={true} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between pt-16">
            <div className="w-1/2">
              <h3 className="subTitleCl mb-3">{cardFittings.title}</h3>
              <div className="relative w-full h-[520px] border border-gray-300 rounded-md overflow-hidden">
                <Image
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={cardFittings.src || ""}
                  alt={cardFittings.alt || ""}
                  fill
                  priority
                />
              </div>
            </div>
            <div className="w-1/2 pl-6">
              <h3 className="subTitleCl mb-3">{fittings.subTitle}</h3>
              <p className="w-full">{cardFittings.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GasketsFittingsSection;
