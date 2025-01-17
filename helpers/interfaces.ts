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
  title?: string;
  description?: string;
  src: string | StaticImageData;
  alt: string;
  tBtn?: string;
  className?: string;
  btnOffset?: string;
  layout?: "horizontal" | "vertical";
  reverse?: boolean;
  background?: "marsala" | "blue" | "";
  alignment?: "end" | "center" | "start";
  path?: string;
}

export interface INestedCard {
  id?: string;
  title?: string;
  description?: string;
  src: string | StaticImageData;
  alt: string;
  className?: string;
  // sizesize?: string;
  size?: string;
  //   size?: "w-1/2" | "w-1/4" | "w-full";
  titleBannerCard?: boolean;
  isRow?: boolean;
  onClick?: () => void;
  imgFit?: "cover" | "contain";
  imgH?: string;
}

export interface IParameterItem {
  title?: string;
  description?: string;
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
  [key: string]: INestedCard | IParametersList | string | undefined;
  parametersList?: IParametersList;
  //   size?: "w-1/4" | "w-full";
  //   titleBanner?: boolean;
  //   titleBannerCard?: boolean;
}

export interface INestedCardsSectionsList {
  [key: string]: INestedCardsSectionItem;
  //     { title?: string;
  //     description?: string;
  //     [key: string]: string | INestedCard | IParametersList | undefined;
  //     parametersList?: IParametersList;
  //   };
}

export interface IProfilesCrossSections {
  //   [key: string]: {
  title: string;
  imgList: {
    (key: string): string | INestedCard;
  };
  descriptionProfilesCrosSections: {
    (key: string): string | IDesc;
  };
  //   };
}

export interface IImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  params?: {
    list: {
      [key: string]: IDesc;
    };
  };
}

export interface IImgList {
  [key: string]: IImage;
}

export interface ICard {
  id: string;
  title?: string;
  src: string;
  alt?: string;
  parametersList: IParameterItem;
  parametersList2?: IParameterItem;
  descrList?: {
    [key: string]: IDesc;
  };
}

export interface ISectionImgAndListProps {
  t: {
    title: string;
    cards: Record<string, ICard>;
  };
  isShowSecondList?: boolean;
}

export interface IFormData {
  name: string;
  email: string;
  phoneNumber?: string;
  message: string;
}
