import React, { useState, useEffect } from "react";
import useScroll from "./useScroll";
import useWindowDimensions from "./useWindowDimensions";

function App() {
  console.log("window dimensions", useWindowDimensions());
  const scrollPos = useScroll();
  const widowDimensions = useWindowDimensions();
  console.log("app.js wd", widowDimensions);
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
        <div style={{ height: scrollPos, ...box2 }}></div>
      </div>
    </div>
  );
}

export default App;
