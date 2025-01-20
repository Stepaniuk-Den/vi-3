import { useRef } from "react";

export const useDebouncedCallback = (callback: (key: string) => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (key: string, immediate: boolean = false) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (immediate) {
      callback(key);
    } else {
      timeoutRef.current = setTimeout(() => {
        callback(key);
        timeoutRef.current = null;
      }, delay);
    }
  };
}
