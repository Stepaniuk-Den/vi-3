import { ILinkProps } from "@/helpers/interfaces";
import Phone from "@/public/icons/F7PhoneCircleFill.svg";
import Mail from "@/public/icons/MingcuteMailFill.svg";

export const feedbackItems: ILinkProps[] = [
  {
    id: 1,
    svg: <Phone />,
    title: "067-000-00-00",
    href: "tel:+380670000000",
    area_label: "Phone",
  },
  {
    id: 2,
    svg: <Mail />,
    title: "info@gmail.com",
    href: "mailto:info@gmail.com",
    area_label: "E-mail",
  },
];
