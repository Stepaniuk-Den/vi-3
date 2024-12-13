import React from "react";
import TitleBanner from "../TitleBanner";
// import TitleBanner from "../TitleBanner";

interface ISectionBannerAndListProps {
  t: {
    bannerTitle: string;
    title?: string;
    list?: { [key: string]: string };
  };
}

const SectionBannerAndList: React.FC<ISectionBannerAndListProps> = ({ t }) => {
  const descriptionList = t.list ? Object.values(t.list) : [];

  return (
    <section>
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.bannerTitle}</h2>
        </TitleBanner>
        <div>
          <h2 className="font-bold mb-4">{t.title}</h2>
          <ul className="flex flex-col gap-4 mb-8 rounded-md">
            {descriptionList.map((text, idx) => (
              <li key={idx} className="flex">
                <div className="flex-shrink-0 w-2 h-2 bg-customMarsala rounded-[3px] mr-4 mt-[6px]"></div>
                <span >{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionBannerAndList;

//============Previous Variant=========///

// import React from 'react'
// import TitleBanner from '../TitleBanner'

// interface ISectionBannerAndListProps {
//     t: {
//       (key: string): string;
//       raw: (key: string) => Record<string, string>
//     };
//   }

// const SectionBannerAndList:React.FC<ISectionBannerAndListProps> = ({t}) => {

//     const descriptions = t.raw("list");
//     const descriptionList = Object.values(descriptions) as string[];

//   return (
//     <section>
//         <div className='container'>
//             <TitleBanner title={t("bannerTitle")} size='large'/>
//             <div>
//                 <h2 className='font-bold mb-4'>{t("title")}</h2>
//                 <ul className='list-disc list-inside'>
//                 {descriptionList.map((text, idx) => (
//               <li key={idx} className="mb-4">
//                 {text}
//               </li>
//             ))}
//                 </ul>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default SectionBannerAndList
