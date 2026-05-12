import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

export default function useWindowDimensions() {

  const getWindowDimensions = (): WindowSize => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowDimensions, setWindowDimensions] =
    useState<WindowSize>(getWindowDimensions());

  useEffect(() => {

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return windowDimensions;
}