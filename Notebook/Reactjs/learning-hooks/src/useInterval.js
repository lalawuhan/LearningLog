import { useEffect, useRef } from "react";

const useInterval = (callback, wait) => {
  const intervalRef = useRef(); //refers to the latest interval
  useEffect(() => {
    //everytime it renders save the latest callback ti the current one
    intervalRef.current = callback;
  });
  useEffect(() => {
    function tick() {
      intervalRef.current();
    }
    if (wait !== null) {
      let id = setInterval(tick, wait);
      return () => clearInterval(id);
    }
  }, [wait]);
};

//everytime wait changes, the effect cleans up the prev effects
//this way you can adjust the timer dynamically without having to worry about clearing it

//Refs provide a way to access DOM Nodes created in the render method
//https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
export default useInterval;
