import { IParameterItem } from "@/helpers/interfaces";
import React from "react";
import Line from "./Line";
import NestedParameterDescList from "./NestedParameterDescList";
import Observer from "@/helpers/observer";

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
        <Observer
          animation="zoom-in"
          duration="0.8s"
          classNameObserver="flex justify-center"
          classNameChild="laser-text"
        >
          <h1 className="titleCl mt-16 inline-block" data-text={t("title")}>
            {t("title")}
          </h1>
        </Observer>
        <Observer animation="zoom-in-line" duration="0.8s">
          <Line className="marsala-center" color="marsala" />
        </Observer>
        {t("description") && (
          <Observer animation="zoom-in">
            <p className="mb-4">{t("description")}</p>
          </Observer>
        )}
        {descObj && (
          <div className="mb-4">
            {Object.values(descObj).map((text, index) => (
              <Observer threshold={1} animation="zoom-in" key={index}>
                <p key={index} className="mb-4">
                  {text}
                </p>
              </Observer>
            ))}
          </div>
        )}
        {parametersList && <NestedParameterDescList param={parametersList} />}
      </div>
    </section>
  );
};

export default PageTopDescription;
