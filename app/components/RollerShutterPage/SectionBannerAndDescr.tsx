import { Formats, RichTranslationValues } from "next-intl";
import React from "react";
import TitleBanner from "../TitleBanner";

interface ISectionBannerAndDescrProps {
  t: {
    title: string;
    rich: (
      key: string,
      values?: RichTranslationValues,
      formats?: Formats
    ) => React.ReactNode;
  };
}

const SectionBannerAndDescr: React.FC<ISectionBannerAndDescrProps> = ({
  t,
}) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <p className="mb-4">
          {t.rich("description", {
            br: () => <br />,
          })}
        </p>
      </div>
    </section>
  );
};

export default SectionBannerAndDescr;
