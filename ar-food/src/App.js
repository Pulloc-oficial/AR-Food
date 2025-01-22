import React from "react";
import ThreeViewer from "./arjs-trheejs/components/ThreeViewer"
import ARViewer from "./arjs-trheejs/components/ARViewer";
//import ARViewer8thWall from "./8thWall/components/8thWallARViewer";


function App() {
  return (
    <div>
      <h1>Location-Based AR Landing Page</h1>
      <ThreeViewer />
      <ARViewer/>
    </div>    
  );
}

export default App;
