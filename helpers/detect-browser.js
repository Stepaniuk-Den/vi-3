import { UAParser } from 'ua-parser-js'

const MAC_OS_TYPE = 'Mac OS'
// NOTE: source: https://github.com/DamonOehlman/detect-browser/blob/master/src/index.ts#L130C1-L130C155
const SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/

export const ClientUAInstance = new UAParser()

export const isMacOS = ClientUAInstance.getOS().name === MAC_OS_TYPE

export const device = ClientUAInstance.getDevice()

// NOTE: by default iPad now request desktop version of sites
export const isAppleMobileDevice = device.vendor === 'Apple' && (device.model === 'iPhone' || device.model === 'iPad')

export const isMobileDevice = device.type === 'mobile'

export const browserType = SEARCHBOX_UA_REGEX.test(ClientUAInstance.getUA()) ? 'bot' : 'browser'

let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  const mQ = matchMedia?.("(pointer:coarse)");
  if (mQ?.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ("orientation" in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    const UA = navigator.userAgent;
    hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
  }
}

export const isTouchScreen = hasTouchScreen
