import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ILinkToPage {
  href: string;
  className?: string;
  children: ReactNode;
}

export interface IItemCard {
  id?: string;
  windowsSlug?: string;
  title: string;
  description?: string;
  src?: string | StaticImageData;
  alt?: string;
  className?: string;
}

export interface IGuideProjectElement {
  subtitle: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  className?: string;
  sectionId?: string;
}

export interface IWindowSvgItems {
  windows: {
    svg: React.ElementType;
    name: string;
  }[];
}
