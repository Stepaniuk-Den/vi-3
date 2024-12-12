import React from "react";
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
        {/* <TitleBanner title={t.bannerTitle} size="large" /> */}
        <div>
          <h2 className="font-bold mb-4">{t.title}</h2>
          <ul className="list-disc list-inside">
            {descriptionList.map((text, idx) => (
              <li key={idx} className="mb-4">
                {text}
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
