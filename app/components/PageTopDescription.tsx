import React from "react";
import Line from "./Line";
import { IParameterItem } from "@/helpers/interfaces";
import NestedParameterDescList from "./NestedParameterDescList";

interface IPageTopDescriptionProps {
  t: (key: string) => string;
  parametersList?: IParameterItem;
}

const PageTopDescription: React.FC<IPageTopDescriptionProps> = ({
  t,
  parametersList,
}) => {
  return (
    <section className="pageCl">
      <div className="container">
        <h1 className="titleCl pt-16">{t("title")}</h1>
        <Line className="marsala-center" color="marsala" />
        <p className="mb-4">{t("description")}</p>
        {t("description2") && <p className="mb-4">{t("description2")}</p>}
        {t("description3") && <p className="mb-4">{t("description3")}</p>}
        {parametersList && <NestedParameterDescList param={parametersList} />}
      </div>
    </section>
  );
};

export default PageTopDescription;
