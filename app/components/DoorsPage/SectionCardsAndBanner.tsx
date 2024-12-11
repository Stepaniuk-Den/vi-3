import React from 'react';
import TitleBanner from '../TitleBanner';
import Image from 'next/image';

interface ICard {
  bannerTitle: string;
  img: string;
}

interface ISectionCardsAndBannerProps {
  t: {
    list?: ICard[];
  };
}

const SectionCardsAndBanner: React.FC<ISectionCardsAndBannerProps> = ({ t }) => {
  // const cards = t.raw("list");
  const cardsList = t.list ? Object.values(t.list) : [];

  return (
    <section className="sectionCl">
      <div className="container">
      <ul className="grid grid-cols-2 gap-7">
          {cardsList.map((el, idx) => (
            <li key={idx} className="mb-4">
              <TitleBanner title={el.bannerTitle} size="medium" />
              <div className='relative w-3/4 h-[480px] mb-4 mx-auto'>
              <Image src={el.img} alt={el.bannerTitle} width={300} height={300}  className="w-full h-full object-cover rounded-md" />
              </div>
            </li>
          ))}
        </ul>
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
