import React from "react";
import WindowFeaturesCard, { IWindowFeaturesProps } from "./WindowFeaturesCard";
import Line from "./Line";

type Props = {
  t: {
    // (key: string): string;
    title: string;
    list: { [key: string]: IWindowFeaturesProps; }
    // rich: <TargetKey extends string>(
    //   key: TargetKey,
    //   values?: RichTranslationValues,
    //   formats?: Formats
    // ) => React.ReactNode;
  };
};

const WindowFeatures: React.FC<Props> = ({ t }) => {
  const windows = Object.values(t.list) as IWindowFeaturesProps[];

  return (
    <section className="py-20">
      <div className=" container">
        <h2 className="titleCl text-center">
          {t.title}
        </h2>
        <Line className="marsala-center" color="marsala" />
        <div className="flex justify-center">
          <ul className="grid gap-6 lg:gap-10 xl:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {windows.map((window) => (
              <WindowFeaturesCard key={window.id} t={{ ...window }} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WindowFeatures;
