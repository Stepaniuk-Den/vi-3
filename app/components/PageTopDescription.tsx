import React from "react";
import Line from "./Line";

interface IPageTopDescriptionProps {
  t: (key: string) => string;
}

const PageTopDescription: React.FC<IPageTopDescriptionProps> = ({ t }) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <h1 className="titleCl">{t("title")}</h1>
        <Line className="marsala-center" color="marsala" />
        <p className="mb-4">{t("description")}</p>
      </div>
    </section>
  );
};

export default PageTopDescription;
