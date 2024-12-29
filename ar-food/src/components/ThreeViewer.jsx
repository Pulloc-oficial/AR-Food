import React, { useRef } from "react";

const ThreeViewer = () => {
  const mountRef = useRef(null);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh", backgroundColor: "lightgray" }} />;
};

export default ThreeViewer;

