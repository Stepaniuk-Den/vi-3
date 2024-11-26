import { Poppins, Open_Sans } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "500", "600", "700", "800"],
});
