"use client";

import {
  IDesc,
  INestedCard,
  IProfilesCrossSections,
} from "@/helpers/interfaces";
import NestedCard from "../NestedCard";
import { useModal } from "../ModalProvider";
import ModalSwiperContent from "../ModalSwiperContent";

type Props = {
  t: IProfilesCrossSections;
};

const ProfilesCrossSections: React.FC<Props> = ({ t }) => {
  const nestedCardsList = Object.values(t.imgList) as INestedCard[];
  const descriptionProfiles = Object.values(
    t.descriptionProfilesCrosSections
  ) as IDesc[];

  const { openModal } = useModal();
  const images = nestedCardsList.map((img) => ({
    id: img.id || "",
    src: img.src || "",
    alt: img.alt || "",
  }));

  return (
    <section className="sectionCl">
      <div className="container">
        <h3 className="sr-only">{t.title}</h3>
        <div className="flex max-md:flex-col gap-6">
          <div className="flex-1">
            <ul>
              {nestedCardsList.slice(0, 1).map((nestedCard, idx) => (
                <NestedCard
                  key={nestedCard.id}
                  title={nestedCard.title}
                  description={nestedCard.description}
                  src={nestedCard.src || ""}
                  alt={nestedCard.alt || ""}
                  size="w-full sm:w-[236px] md:w-1/2"
                  imgH="h-[240px] sm:h-[236px] md:h-[178px] lg:h-[240px] xl:h-[304px]"
                  className="mx-auto"
                  imgFit="cover"
                  onClick={() =>
                    openModal(
                      <ModalSwiperContent slides={images} initialSlide={idx} />
                    )
                  }
                />
              ))}
            </ul>
            <div className="self-center">
              <h3 className="subTitleCl my-6">
                {descriptionProfiles[0].title}
              </h3>
              <p>{descriptionProfiles[0].desc}</p>
            </div>
          </div>

          <div className="flex-1">
            <ul className="flex max-sm:flex-col max-md:items-center justify-center gap-1">
              {nestedCardsList.slice(1, 3).map((nestedCard) => (
                <NestedCard
                  key={nestedCard.id}
                  title={nestedCard.title}
                  description={nestedCard.description}
                  src={nestedCard.src || ""}
                  alt={nestedCard.alt || ""}
                  size="w-full sm:max-md:w-[236px] md:flex-1"
                  imgH="h-[240px] sm:h-[236px] md:h-[178px] lg:h-[240px] xl:h-[304px]"
                  imgFit="cover"
                  onClick={() =>
                    openModal(
                      <ModalSwiperContent
                        slides={images}
                        initialSlide={images.findIndex(
                          (img) => img.id === nestedCard.id
                        )}
                      />
                    )
                  }
                />
              ))}
            </ul>
            <div>
              <h3 className="subTitleCl my-6">
                {descriptionProfiles[1].title}
              </h3>
              <p>{descriptionProfiles[1].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    // ------------------
    // <section className="sectionCl">
    //   <div className="container">
    //     <h3 className="sr-only">{t.title}</h3>
    //     <ul className="flex justify-center gap-1">
    //       {nestedCardsList.map((nestedCard, idx) => (
    //         <NestedCard
    //           key={nestedCard.id}
    //           title={nestedCard.title}
    //           description={nestedCard.description}
    //           src={nestedCard.src || ""}
    //           alt={nestedCard.alt || ""}
    //           size={"w-1/4"}
    //           className={clsx(idx === 0 && "mr-auto")}
    //         />
    //       ))}
    //     </ul>

    //     <ul className="flex justify-between gap-6">
    //       {descriptionProfiles.map((item) => (
    //         <div key={item.title} className="w-1/2">
    //           <h3 className="subTitleCl my-6">{item.title}</h3>
    //           <p>{item.desc}</p>
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    // </section>
  );
};

export default ProfilesCrossSections;
