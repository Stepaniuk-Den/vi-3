import { useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  refs: React.RefObject<T> | React.RefObject<T>[],
  handler: (event?: MouseEvent | TouchEvent, refIndex?: number) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const refsArray = Array.isArray(refs) ? refs : [refs];

      const clickedOutsideAnyRef = refsArray.every((ref) =>
        ref.current && !ref.current.contains(event.target as Node)
      );

      if (clickedOutsideAnyRef) {
        refsArray.forEach((ref, index) => {
          if (ref.current && !ref.current.contains(event.target as Node)) {
            handler(event, index);
          }
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handler, refs]);

  return refs;
};

/* Приклад використання:
    1. Викликаєш у потрібному компоненті хук, де прописуєш який
       елемент (<HTMLElement>) потрібно відслідковувати, наприклад:
       const ref = useRef<HTMLDivElement>(null);
         useClickOutside<HTMLDivElement>(ref, func)
         const func = (e?: MouseEvent | TouchEvent, refIndex?: number) => { 
         ось тут можна з івентом і з індексом(якщо масив рефів) якусь логіку виконати
         }
         або якщо мапається список рефів, то 
         const refs = keys.map(() => useRef<HTMLDivElement>(null)); мабуть не працює
         або
         const refsMemo = useMemo(() => keys.map(() => React.createRef<HTMLLIElement>()), [keys]);
         useClickOutside<HTMLDivElement>(refs, func)
    2. Задаєш ref потрібному елементу, наприклад:
        якщо один реф:
         <div ref={ref} className="dropdown">
           <p>Dropdown Content</p>
         </div>
        якщо список рефів:
        <keys.map((key, index) => {
          <div ref={refs[index]} className="dropdown">
            <p>Dropdown Content</p>
          </div>
        })
    3. В результаті поза межами елементу спрацьовує хук.     
*/