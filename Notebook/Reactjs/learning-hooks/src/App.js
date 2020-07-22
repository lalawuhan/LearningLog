import React, { useState, useEffect } from "react";
import useScroll from "./useScroll";
function App() {
  const scrollPos = useScroll();
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
        </div>
        <div style={{ height: scrollPos, ...box2 }}></div>
      </div>
    </div>
  );
}

export default App;
