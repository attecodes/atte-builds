import { useEffect } from "react";

import { GridContainer } from "components";

import "lib/theme/globals.css";
import "lib/theme/normalize.css";
import "lib/theme/variables.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleMousedown = () => {
      document.body.removeEventListener("mousedown", handleMousedown);
      document.body.classList.remove("user-is-tabbing");
      document.body.addEventListener("keydown", handleKeydown);
    };
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === "Tab") {
        document.body.removeEventListener("keydown", handleKeydown);
        document.body.classList.add("user-is-tabbing");
        document.body.addEventListener("mousedown", handleMousedown);
      }
    };
    document.body.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.removeEventListener("keydown", handleKeydown);
      document.body.removeEventListener("mousedown", handleMousedown);
    };
  }, []);
  return (
    <GridContainer>
      <Component {...pageProps} />
    </GridContainer>
  );
}

export default MyApp;
