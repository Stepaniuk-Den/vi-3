import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ILinkToPage {
  href: string;
  className?: string;
  children: ReactNode;
  btnOffset?: string;
}

export interface IItemCard {
  id?: string;
  windowsSlug?: string;
  title: string;
  description?: string;
  src?: string | StaticImageData;
  alt?: string;
  tBtn?: string;
  className?: string;
  btnOffset?: string;
  layout?: "horizontal" | "vertical";
  reverse?: boolean;
  background?: "marsala" | "blue" | "";
  //   background?: string;
}

export interface IDesc {
  desc: string;
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

export interface IWindowSvgItems {
  windows: {
    svg: React.ElementType;
    name: string;
  }[];
}
