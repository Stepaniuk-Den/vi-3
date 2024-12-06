import React from "react";
import Line from "../Line";

interface IDoorsPageDescriptionProps {
  t: (key: string) => string;
}

const DoorsPageDescription:React.FC<IDoorsPageDescriptionProps> = ({t}) => {
  return (
    <section>
      <div className="container">
        <h1>{t('title')}</h1>
        <Line className="marsala-center" color="marsala" />
        <p>{t('description')}</p>
      </div>
    </section>
  );
};

export default DoorsPageDescription;
