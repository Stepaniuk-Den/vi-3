import { useEffect, useRef } from "react";

export const useClickOutside = <T extends HTMLElement>(
  handler: (event?: MouseEvent | TouchEvent) => void
) => {

  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event || undefined);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handler]);

  return ref;
};

/* Приклад використання:
    1. Викликаєш у потрібному компоненті хук, де прописуєш який
       елемент (<HTMLElement>) потрібно відслідковувати, наприклад:
         const ref = useClickOutside<HTMLDivElement>(() => дія)
         або 
         const ref = useClickOutside<HTMLDivElement>(func)
         const func = (e?: MouseEvent | TouchEvent) => { 
         ось тут можна з івентом якусь логіку виконати
         }
    2. Задаєш ref потрібному елементу, наприклад:
         <div ref={ref} className="dropdown">
           <p>Dropdown Content</p>
         </div>
    3. В результаті поза межами елементу спрацьовує хук.     
*/