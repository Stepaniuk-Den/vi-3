export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const navigationLinks = [
  { home: "/" },
  { contact: "/contact" },
  {
    windows: "/windows",
    list: "",
  },
  {
    doors: "/doors",
    list: "",
  },
  {
    sliding_doors: "/sliding doors",
    list: "",
  },
  {
    roller_shutter: "/roller shutter",
    list: "",
  },
  {
    manufactured: "/manufactured",
    list: "",
  },
];
