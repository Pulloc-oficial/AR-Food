import React, { useEffect } from 'react';
import * as THREE from 'three';


const ARViewer = () => {
  useEffect(() => {
    // Crear la escena de A-Frame con AR.js en modo surface
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', 'sourceType: webcam; debugUIEnabled: false; trackingMethod: best; detectionMode: mono; maxDetectionRate: 30; canvasWidth: 240; canvasHeight: 180; videoWidth: 1280; videoHeight: 720');

    // Crear el modelo GLTF y posicionarlo
    const model = document.createElement('a-entity');
    model.setAttribute('gltf-model', './assets/breakfast-food-dish/source/breakfast.glb');
    model.setAttribute('scale', '3 3 3');
    model.setAttribute('position', '0 0 0');

    // Rotación infinita del modelo
    model.setAttribute('animation', {
      property: 'rotation',
      to: '0 360 0',
      loop: true,
      dur: 10000, // 10 segundos por rotación
      easing: 'linear',
    });

    // Añadir el plano donde se posicionará el modelo
    const ground = document.createElement('a-plane');
    ground.setAttribute('position', '0 0 -10');
    ground.setAttribute('rotation', '-90 0 0');
    ground.setAttribute('width', '5');
    ground.setAttribute('height', '5');
    ground.setAttribute('color', '#ffffff');
    ground.setAttribute('arjs-hit-test', ''); // Activar detección de planos

    // Añadir eventos para colocar el modelo sobre el plano detectado
    ground.addEventListener('click', (event) => {
      const intersectedPoint = event.detail.intersection.point;
      model.setAttribute('position', `${intersectedPoint.x} ${intersectedPoint.y} ${intersectedPoint.z}`);
    });

    scene.appendChild(ground);
    scene.appendChild(model);
    document.body.appendChild(scene);

    return () => {
      // Limpiar la escena al desmontar el componente
      document.body.removeChild(scene);
    };
  }, []);

  return null;
};

export default ARViewer;
