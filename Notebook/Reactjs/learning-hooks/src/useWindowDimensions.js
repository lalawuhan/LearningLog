import React, { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerHeight);
  const [innerHeight, setInnerHeight] = useState(window.innerWidth);

  const calcWindowSize = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    setInnerWidth(width);
    setInnerHeight(height);
  };
  function debounce(callback, wait) {
    let timeout;
    return (...args) => {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(context, args), wait);
    };
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      debounce(() => {
        calcWindowSize();
      }, 500)
    );
    return () => {
      window.removeEventListener("resize", calcWindowSize);
    };
  }, []);
  return [{ height: innerHeight, width: innerWidth }];
};

export default useWindowDimensions;
