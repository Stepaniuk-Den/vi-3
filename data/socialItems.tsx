import Twitter from "@/public/icons/Social/LogosTwitter.svg";
import Facebook from "@/public/icons/Social/LogosFacebook.svg";
import Instagram from "@/public/icons/Social/LogosInstagramIcon.svg";
import Telegram from "@/public/icons/Social/LogosTelegram.svg";
import Viber from "@/public/icons/Social/viber.svg";
import { ILinkProps } from "@/helpers/interfaces";

export const socialItems: ILinkProps[] = [
  {
    id: 1,
    svg: <Twitter />,
    title: "Twitter",
    href: "https://twitter.com/",
    area_label: "Twitter",
  },
  {
    id: 2,
    svg: <Facebook />,
    title: "Facebook",
    href: "https://www.facebook.com/",
    area_label: "Facebook",
  },
  {
    id: 3,
    svg: <Instagram />,
    title: "Instagram",
    href: "https://www.instagram.com/",
    area_label: "Instagram",
  },
  {
    id: 4,
    svg: <Telegram />,
    title: "Telegram",
    href: "https://telegram.org/",
    area_label: "Telegram",
  },
  {
    id: 5,
    svg: <Viber />,
    title: "Viber",
    href: "https://viber.com/",
    area_label: "Viber",
  },
];
