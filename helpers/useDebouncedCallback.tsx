import { useRef } from "react";

export const useDebouncedCallback = (callback: (key: string) => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (key: string, immediate: boolean = false) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // очистка попереднього таймера
    }

    if (immediate) {
      callback(key); // виконуємо одразу
    } else {
      timeoutRef.current = setTimeout(() => {
        callback(key); // виконуємо з затримкою
        timeoutRef.current = null;
      }, delay);
    }
  };
}
