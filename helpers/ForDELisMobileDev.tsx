import { UAParser } from "ua-parser-js";

export const isMobileDev = (userAgent: string | undefined): boolean => {
  if (!userAgent) return false;
  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type;
  return deviceType === "mobile" || deviceType === "tablet";
};
