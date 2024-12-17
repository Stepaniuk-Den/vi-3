import React from "react";
import NestedCard from "../NestedCard";
import Line from "../Line";
import { IParameterItem } from "@/helpers/interfaces";
import NestedParameterDescList from "../NestedParameterDescList";
import TitleBanner from "../TitleBanner";
import Image from "next/image";
import clsx from "clsx";

interface ICard {
  bannerTitle?: string;
  img: string;
  description?: string;
}

interface ISectionCardsAndBannerProps {
  t: {
    list?: ICard[];
    title: string;
    description?: string;
    parametersList?: Record<string, IParameterItem>;
    imgThreeList?: ICard[];
  };
  isShowtitle?: boolean;
  isShowNested?: boolean;
  isShowDescr?: boolean;
  isShowTitleBanner?: boolean;
  columns?: number;
  isImgThreeList?: boolean;
  isNestedCard?: boolean;
}

const SectionCardsAndBanner: React.FC<ISectionCardsAndBannerProps> = ({
  t,
  isShowtitle = true,
  isShowNested = false,
  isShowDescr = false,
  isShowTitleBanner = false,
  isImgThreeList = false,
  isNestedCard = true,
  columns = 2,
}) => {
  const cardsList = t.list ? Object.values(t.list) : [];
  const parameters = t.parametersList ? Object.values(t.parametersList) : [];
  const imgThreeList = t.imgThreeList ? Object.values(t.imgThreeList) : [];

  return (
    <section className="sectionCl">
      <div className="container">
        {isShowtitle &&
          (isShowTitleBanner ? (
            <TitleBanner>
              <h2 className="titleCl">{t.title}</h2>
            </TitleBanner>
          ) : (
            <>
              <h2 className="titleCl text-center">{t.title}</h2>
              <Line className="marsala-center" color="marsala" />
            </>
          ))}
        {isShowDescr && <p className="mb-5">{t.description}</p>}
        <ul
          className={clsx("grid gap-7", {
            "grid-cols-2": columns === 2,
            "grid-cols-3": columns === 3,
          })}
        >
          {isImgThreeList &&
            imgThreeList.length > 0 &&
            imgThreeList.map((el, idx) => (
              <li
                key={idx}
                className="relative w-[260px] h-[260px] border border-gray-300 rounded-md overflow-hidden mx-auto"
              >
                <Image
                  className="object-cover"
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={el.img || ""}
                  alt={el.img || ""}
                  fill
                  priority
                />
              </li>
            ))}
          {isNestedCard &&
            cardsList.map((el, idx) => (
              <NestedCard
                key={idx}
                src={el.img || ""}
                alt={el.bannerTitle || ""}
                title={el.bannerTitle}
                description={el.description}
                isRow={false}
              />
            ))}
        </ul>
        {isShowNested && parameters.length > 0 && (
          <>
            {parameters.map((param, idx) => (
              <NestedParameterDescList key={idx} param={param} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default SectionCardsAndBanner;

//=============Previous Variant =============/////

// import React from 'react';
// import TitleBanner from '../TitleBanner';
// import Image from 'next/image';

// interface ISectionCardsAndBannerProps {
//   t: {
//     (key: string): string;
//     raw: (key: string) => Record<string, { bannerTitle: string; img: string }>;
//   };
// }

// const SectionCardsAndBanner: React.FC<ISectionCardsAndBannerProps> = ({ t }) => {
//   const cards = t.raw("list");
//   const cardsList = Object.values(cards);

//   return (
//     <section className="sectionCl">
//       <div className="container">
//       <ul className="grid grid-cols-2 gap-7">
//           {cardsList.map((el, idx) => (
//             <li key={idx} className="mb-4">
//               <TitleBanner title={el.bannerTitle} size="medium" />
//               <div className='relative w-3/4 h-[480px] mb-4 mx-auto'>
//               <Image src={el.img} alt={el.bannerTitle} width={300} height={300}  className="w-full h-full object-cover rounded-md" />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default SectionCardsAndBanner;
