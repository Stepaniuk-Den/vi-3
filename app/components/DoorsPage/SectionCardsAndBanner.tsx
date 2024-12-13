import React from "react";
import NestedCard from "../NestedCard";
import Line from "../Line";
import { IParameterItem } from "@/helpers/interfaces";
import NestedParameterDescList from "../NestedParameterDescList";

interface ICard {
  bannerTitle?: string;
  img: string;
  description?: string;
}

interface ISectionCardsAndBannerProps {
  t: {
    list?: ICard[];
    title: string;
    parametersList?: Record<string, IParameterItem>;
  };
  isShowtitle: boolean;
  isShowNested: boolean;
}

const SectionCardsAndBanner: React.FC<ISectionCardsAndBannerProps> = ({
  t,
  isShowtitle,
  isShowNested,
}) => {
  const cardsList = t.list ? Object.values(t.list) : [];
  const parameters = t.parametersList ? Object.values(t.parametersList) : [];

  return (
    <section className="sectionCl">
      <div className="container">
        {isShowtitle && (
          <>
            <h2 className="titleCl text-center">{t.title}</h2>
            <Line className="marsala-center" color="marsala" />
          </>
        )}
        <ul className="grid grid-cols-2 gap-7">
          {cardsList.map((el, idx) => (
            <NestedCard
              key={idx}
              src={el.img}
              alt={el.bannerTitle}
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
