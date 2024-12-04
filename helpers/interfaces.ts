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
  slug?: string;
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
  path?:string;
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

export interface ILinkProps {
  id: number;
  svg: React.ReactNode;
  title: string;
  href: string;
  area_label: string;
}
