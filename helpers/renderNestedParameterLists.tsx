import NestedParameterDescList from "@/app/components/NestedParameterDescList";
import { IParameterItem } from "./interfaces";

interface ITranslations {
  raw: (key: string) => unknown;
}

 export const renderNestedParameterLists = (
  t: ITranslations,
    sectionKey: string,
    titleBanner: boolean,
    description: boolean
  ) => {
    const parametersList = t.raw(`${sectionKey}.parametersList`) as Record<
      string,
      IParameterItem
    >;
    return Object.entries(parametersList).map(([key, param]) => (
      <NestedParameterDescList
        key={key}
        param={param}
        titleBanner={titleBanner}
        description={description}
      />
    ));
  };
