import { INestedCard } from "@/helpers/interfaces";
import TitleBanner from "../TitleBanner";
import ModalTrigger from "../ModalTrigger";

type Props = {
  t: {
    title: string;
    description: string;
    typesList: {
      title: string;
      [key: string]: INestedCard | string;
    };
  };
};

const HandlesSecusticSection: React.FC<Props> = ({ t }) => {
  const typesListTitle = t.typesList;
  const typesList = Object.values(t.typesList);

  return (
    <section className="pt-4 md:pt-9">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{t.title}</h3>
        </TitleBanner>
        <p className="mb-5">{t.description}</p>

        <h4 className="titleCl mb-5">{typesListTitle.title}</h4>
        <ul className="flex flex-col gap-12 rounded-md pl-6">
          {typesList.map(
            (typeItem) =>
              typeof typeItem === "object" &&
              "id" in typeItem && (
                <li key={typeItem.id}>
                  <div className="flex mb-6">
                    <div className="flex-shrink-0 w-2 h-2 bg-customMarsala rounded-[3px] mr-4 mt-[6px]"></div>
                    <p>{typeItem.description}</p>
                  </div>

                  <ModalTrigger
                    className="relative w-full sm:w-[380px] md:w-1/2 h-[240px] sm:h-[288px] md:h-[268px] lg:h-[362px] xl:h-[460px] m-auto border border-gray-300 rounded-md overflow-hidden"
                    src={typeItem.src || ""}
                    alt={typeItem.alt || ""}
                    img={[
                      {
                        id: typeItem.id || "",
                        src: typeItem.src || "",
                        alt: typeItem.alt || "",
                      },
                    ]}
                  />

                  {/* <div
                    className="relative w-full sm:w-[380px] md:w-1/2 h-[240px] sm:h-[288px] md:h-[268px] lg:h-[362px] xl:h-[460px] m-auto border border-gray-300 rounded-md overflow-hidden"
                    onClick={() =>
                      openModal(
                        <ModalSwiperContent
                          slides={[
                            {
                              id: typeItem.id || "",
                              src: typeItem.src || "",
                              alt: typeItem.alt || "",
                            },
                          ]}
                        />
                      )
                    }
                  >
                    <Image
                      sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                      src={typeItem.src || ""}
                      alt={typeItem.alt || ""}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div> */}

                  {/* <div className="relative w-[380px] md:w-1/2 h-[288px] md:h-[268px] lg:h-[362px] xl:h-[460px] m-auto border border-gray-300 rounded-md overflow-hidden">
                    <Image
                      sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px, 317px,"
                      src={typeItem.src || ""}
                      alt={typeItem.alt || ""}
                      fill
                      priority
                      // className={clsx({
                      //   "object-cover": imgFit === "cover",
                      //   "object-contain": imgFit === "contain",
                      // })}
                      // placeholder="blur"
                    />
                  </div> */}
                </li>
              )
          )}
        </ul>
      </div>
    </section>
  );
};

export default HandlesSecusticSection;
