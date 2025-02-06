import { useState, useEffect } from "react";

export function useIsTouchScreen() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      let hasTouch = false;
      if ("maxTouchPoints" in navigator) {
        hasTouch = navigator.maxTouchPoints > 0;
      } else if ("msMaxTouchPoints" in navigator) {
        hasTouch = navigator.msMaxTouchPoints > 0;
      } else {
        const mQ = matchMedia?.("(pointer:coarse)");
        if (mQ?.media === "(pointer:coarse)") {
          hasTouch = !!mQ.matches;
        } else if ("orientation" in window) {
          hasTouch = true;
        } else {
          const UA = navigator.userAgent;
          hasTouch =
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
      }
      setIsTouchScreen(hasTouch);
    }
  }, []);

  return isTouchScreen;
}
