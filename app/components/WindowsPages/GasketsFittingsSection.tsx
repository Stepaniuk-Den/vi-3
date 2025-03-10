import { INestedCard, IParametersList } from "@/helpers/interfaces";
import NestedParameterDescList from "../NestedParameterDescList";
import ModalTrigger from "../ModalTrigger";
import Observer from "@/helpers/observer";

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

  const getImageData = (card: INestedCard) => ({
    id: card.id || "",
    src: card.src || "",
    alt: card.alt || "",
  });
  const imgGaskets = getImageData(cardGaskets);
  const imgFittings = getImageData(cardFittings);

  return (
    <>
      <section className="sectionCl">
        <div className="container">
          <h2 className="sr-only">{t.title}</h2>
          <div className="flex max-md:flex-col max-md:items-center max-md:gap-3 justify-between">
            <div className="w-full sm:max-md:max-w-[396px] md:w-1/2">
              <Observer animation="slide-up">
                <h3 className="subTitleCl max-md:text-center mb-3">
                  {cardGaskets.title}
                </h3>
              </Observer>
              <ModalTrigger
                className="relative w-full h-[240px] sm:h-[332px] md:h-[312px] lg:h-[414px] xl:h-[520px] border border-gray-300 rounded-md overflow-hidden"
                src={cardGaskets.src || ""}
                alt={cardGaskets.alt || ""}
                img={[imgGaskets]}
              />

              {/* <div
                className="relative w-full h-[332px] md:h-[312px] lg:h-[414px] xl:h-[520px] border border-gray-300 rounded-md overflow-hidden"
                onClick={() => openModal(<ModalContent slide={imgGaskets} />)}
              >
                <Image
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={cardGaskets.src || ""}
                  alt={cardGaskets.alt || ""}
                  fill
                  priority
                />
              </div> */}
            </div>
            <div className="w-full sm:max-md:max-w-[396px] md:w-1/2">
              <Observer animation="slide-up">
                <h4 className="subTitleCl mb-3 md:pl-6">{gaskets.subTitle}</h4>
              </Observer>
              <ul>
                {parametersArr.map(([key, param]) => (
                  <li key={key}>
                    <NestedParameterDescList
                      param={param}
                      description={true}
                      pL="pl-0 md:pl-6"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex max-md:flex-col max-md:items-center max-md:gap-3 justify-between pt-10 md:pt-16">
            <div className="w-full sm:max-md:max-w-[396px] md:w-1/2">
              <Observer animation="slide-up">
                <h3 className="subTitleCl max-md:text-center mb-3">
                  {cardFittings.title}
                </h3>
              </Observer>
              <ModalTrigger
                className="relative w-full h-[240px] sm:h-[332px] md:h-[312px] lg:h-[414px] xl:h-[520px] border border-gray-300 rounded-md overflow-hidden"
                src={cardFittings.src || ""}
                alt={cardFittings.alt || ""}
                img={[imgFittings]}
              />

              {/* <div
                className="relative w-full h-[332px] md:h-[312px] lg:h-[414px] xl:h-[520px] border border-gray-300 rounded-md overflow-hidden"
                onClick={() => openModal(<ModalContent slide={imgFittings} />)}
              >
                <Image
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={cardFittings.src || ""}
                  alt={cardFittings.alt || ""}
                  fill
                  priority
                />
              </div> */}
            </div>
            <div className="w-full sm:max-md:max-w-[396px] md:w-1/2 md:pl-6">
              <Observer animation="slide-up">
                <h4 className="subTitleCl mb-3 md:pl-6">{fittings.subTitle}</h4>
              </Observer>
              <Observer threshold={1} animation="zoom-in">
                <p className="w-full">{cardFittings.description}</p>
              </Observer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GasketsFittingsSection;
