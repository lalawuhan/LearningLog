import React, { useState, useEffect } from "react";
import useScroll from "./useScroll";
import useWindowDimensions from "./useWindowDimensions";
import useInterval from "./useInterval";
function App() {
  const scrollPos = useScroll();
  const widowDimensions = useWindowDimensions();
  const [count, setCount] = useState(0);
  const [wait, setWait] = useState(2000);
  useInterval(() => {
    setCount(count + 1);
  }, wait);
  function handleWait(e) {
    setWait(Number(e.target.value));
  }
  const box1 = {
    position: "fixed",
    top: 0,
    width: "50%",
    backgroundColor: "#184A45FF",
  };
  const box2 = {
    position: "fixed",
    top: 0,
    left: "50%",
    width: "50%",
    backgroundColor: "#B0B8B4FF",
  };
  const textStyle = {
    borderRadius: "50%",
    width: count / 100 + "px",
    height: count / 100 + "px",
    backgroundColor: "red",
    zIndex: "-1",
  };
  const slowTimer = (e) => {
    e.preventDefault();
    if (wait !== null) {
      setWait(null);
    }
    setWait(2000);
  };
  return (
    <div className="App">
      <div style={{ height: 5000 }}>
        <div style={{ height: scrollPos, ...box1 }}>
          <h1> Scroll Y Position: {scrollPos}</h1>
          {widowDimensions.map((x) => (
            <>
              <h1>Window width:{x.width}</h1>
              <h1>Window height:{x.height}</h1>
            </>
          ))}
        </div>
        <div style={{ height: scrollPos, ...box2 }}>
          <form onSubmit={slowTimer}>
            <h1>{count}</h1>
            <input value={wait} onChange={handleWait} />
            <button type="submit">Slow down</button>
          </form>

          <div style={textStyle}> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
