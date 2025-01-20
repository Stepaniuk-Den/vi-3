import { useEffect, useState } from "react";

const useCurrentViewportHeight = () => {
  const [height, setHeight] = useState(
    window.visualViewport?.height || window.innerHeight
  );

  useEffect(() => {
    const updateHeight = () => {
      const currentHeight = window.visualViewport?.height || window.innerHeight;
      setHeight(currentHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => updateHeight());
    resizeObserver.observe(document.body);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return height;
};

export default useCurrentViewportHeight;
