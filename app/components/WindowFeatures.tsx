
import React from "react";
import WindowFeaturesCard, { IWindowFeaturesProps } from "./WindowFeaturesCard";
import { Formats, RichTranslationValues } from "next-intl";
import Line from "./Line";

type Props = {
    t: {
      (key: string): string;
      raw: (key: string) => Record<string, IWindowFeaturesProps>;
      rich: <TargetKey extends string>(
        key: TargetKey,
        values?: RichTranslationValues,
        formats?: Formats
      ) => React.ReactNode;
    };
  };

const WindowFeatures: React.FC<Props> = ({ t }) => {

 
const windows = Object.values(t.raw("list")) as IWindowFeaturesProps[];


  return (
    <section className="py-20">
        <div className=" container">
        <h2 className="titleCl text-center">{t.rich('title', {
  br: () => <br />
})
}</h2>
        <Line className="marsala-center" color="marsala"/>
      <ul className="grid gap-10 grid-cols-4 px-10">
        {windows.map((window) => (
          <WindowFeaturesCard key={window.id} t={{...window}} />
        ))}
      </ul>
      </div>
    </section>
  );
};

export default WindowFeatures;
