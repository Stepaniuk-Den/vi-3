import { Formats, RichTranslationValues } from "next-intl";
import React from "react";
import TitleBanner from "../TitleBanner";
import Observer from "@/helpers/observer";

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
        <Observer threshold={1} animation="zoom-in">
          <p className="mb-4">
            {t.rich("description", {
              br: () => <br />,
            })}
          </p>
        </Observer>
      </div>
    </section>
  );
};

export default SectionBannerAndDescr;
