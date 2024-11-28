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
