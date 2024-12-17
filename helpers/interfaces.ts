import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ILinkToPage {
  href: string;
  className?: string;
  children: ReactNode;
  btnOffset?: string;
}

export interface ILinkProps {
  id: number;
  svg: React.ReactNode;
  title: string;
  href: string;
  area_label: string;
}

export interface IWindowSvgItems {
  windows: {
    svg: React.ElementType;
    name: string;
  }[];
}

export interface IDesc {
  title?: string;
  desc?: string;
}

export interface IGuideProjectElement {
  subtitle: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  className?: string;
  sectionId?: string;
  tBtn?: string;
}

export interface IItemCard {
  id?: string;
  slug?: string;
  title: string;
  description?: string;
  src: string | StaticImageData;
  alt: string;
  tBtn?: string;
  className?: string;
  btnOffset?: string;
  layout?: "horizontal" | "vertical";
  reverse?: boolean;
  background?: "marsala" | "blue" | "";
  path?: string;
}

export interface INestedCard {
  id?: string;
  title?: string;
  description?: string;
  src: string | StaticImageData;
  alt: string;
  className?: string;
  size?: "small" | "large" | "w-1/2";
  titleBannerCard?: boolean;
  isRow?: boolean;
}

export interface IParameterItem {
  title: string;
  description?:string;
  list: {
    [key: string]: IDesc;
  };
  notes?: {
    [key: string]: IDesc;
  };
}

export interface IParametersList {
  [key: string]: IParameterItem;
}

export interface INestedCardsSectionItem {
  title?: string;
  description?: string;
  [key: string]: any;
  // string | INestedCard | IParametersList | undefined
  parametersList?: IParametersList;
  //   size?: "small" | "large";
  //   titleBanner?: boolean;
  //   titleBannerCard?: boolean;
}

export interface INestedCardsSectionsList {
  [key: string]: {
    title?: string;
    description?: string;
    [key: string]: string | INestedCard | IParametersList | undefined;
    parametersList?: IParametersList;
  };
}

export interface IProfilesCrossSections {
  t: {
    title: string;
    imgList: {
      [key: string]: string | INestedCard;
    };
    descriptionProfilesCrosSections: {
      [key: string]: string | IDesc;
    };
  };
}

export interface IImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}
