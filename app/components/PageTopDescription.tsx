import { IParameterItem } from "@/helpers/interfaces";
import React from "react";
import Line from "./Line";
import NestedParameterDescList from "./NestedParameterDescList";

interface IPageTopDescriptionProps {
  t: (key: string) => string;
  parametersList?: IParameterItem;
  descObj?: Record<string, string>;
}

const PageTopDescription: React.FC<IPageTopDescriptionProps> = ({
  t,
  parametersList,
  descObj,
}) => {
  return (
    <section className="pageCl">
      <div className="container">
        <h1 className="titleCl pt-16">{t("title")}</h1>
        <Line className="marsala-center" color="marsala" />
        {!descObj ? (
          <p className="mb-4">{t("description")}</p>
        ) : (
          <div className="mb-4">
            {Object.values(descObj).map((text, index) => (
              <p key={index} className="mb-4">{text}</p>
            ))}
          </div>
        )}
        {parametersList && <NestedParameterDescList param={parametersList} />}
      </div>
    </section>
  );
};

export default PageTopDescription;
