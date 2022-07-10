import { useEffect, useState } from "react";

import { throttle } from "lib/util/throttle";

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState<undefined | boolean>(
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile((window.innerWidth || 0) < 768);
    }
    const hanldeResizeThrottled = throttle(handleResize, 500);
    window.addEventListener("resize", hanldeResizeThrottled);
    hanldeResizeThrottled();
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", hanldeResizeThrottled);
    };
  }, []); // Empty array ensures that effect is only run on mount
  return { isMobile, windowSize };
}
