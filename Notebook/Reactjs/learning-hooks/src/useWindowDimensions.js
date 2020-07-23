import { useState, useEffect } from "react";

function debounce(callback, wait) {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}

const useWindowDimensions = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerHeight);
  const [innerHeight, setInnerHeight] = useState(window.innerWidth);

  useEffect(() => {
    const calcWindowSize = debounce(() => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      setInnerWidth(width);
      setInnerHeight(height);
    }, 500);

    calcWindowSize();
    window.addEventListener("resize", calcWindowSize);
    return () => {
      window.removeEventListener("resize", calcWindowSize);
    };
  }, []);
  return [{ height: innerHeight, width: innerWidth }];
};

export default useWindowDimensions;
