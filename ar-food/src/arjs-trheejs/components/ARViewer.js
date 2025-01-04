import React from "react";

const ARViewer = () => {
  return (
    <div>
      <a-scene embedded arjs='sourceType: webcam; detectionMode: mono; matrixCodeType: 3x3;
      sourceWidth: 640; sourceHeight: 480; displayWidth: 640; displayHeight: 480;'>

<a-assets>
    <a-asset-item id="animated-asset" src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"></a-asset-item>
</a-assets>

<a-marker preset="hiro">
    <a-box position='0 0.5 0' color="yellow"></a-box>
</a-marker>

<a-marker id="animated-marker" type='barcode' value='6'>
    <a-entity
        gltf-model="#animated-asset"
        scale="2">
    </a-entity>
</a-marker>
<a-entity camera fov="80"></a-entity>
</a-scene>
          </div>
  );
};

export default ARViewer;
