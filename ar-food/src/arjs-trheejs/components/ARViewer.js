/*import React, { useEffect } from 'react';
import * as THREE from 'three';


const ARViewer = () => {
  useEffect(() => {
    // Crear la escena de A-Frame con AR.js en modo surface
    const scene = document.createElement('a-scene');
    scene.setAttribute('vr-mode-ui' , 'enable: false');
    scene.setAttribute('arjs', 'sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3');
    scene.setAttribute('ar-hit-test' , 'objetivo:#plato');
    // Crear el modelo GLTF y posicionarlo
    const model = document.createElement('a-entity');
    model.setAttribute('id' , 'plato')
    model.setAttribute('gltf-model', './assets/breakfast-food-dish/source/breakfast.glb');
    model.setAttribute('scale', '5 5 5');
    model.setAttribute('position', '0 0 -10');

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
    ground.setAttribute('color', '#000000');
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

export default ARViewer;*/






/*import React, { useEffect, useState } from 'react';

const ARViewer = () => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [logMessage, setLogMessage] = useState("Inicializando...");
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar/ocultar el popup

  useEffect(() => {
    //verificar carga del componente ARViewer.js
    alert("ARViewer iniciado"); // Mensaje al cargar la página.
    // Verificar si el navegador soporta AR.js
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setIsARSupported(supported);
      });
    }

    // Crear la escena de A-Frame con AR.js
    const scene = document.createElement('a-scene');
    scene.setAttribute('vr-mode-ui', 'enabled: false');
    /*scene.setAttribute(
      'arjs',
      'sourceType: webcam; debugUIEnabled: true; detectionMode: mono; matrixCodeType: 3x3'
    );
    scene.setAttribute('webxr', 'optionalFeatures: hit-test;');
    scene.setAttribute('ar-hit-test', 'target: #plato;');

    // Crear el modelo GLTF
    const model = document.createElement('a-entity');
    model.setAttribute('id', 'plato');
    model.setAttribute('gltf-model', './assets/breakfast-food-dish/source/breakfast.glb');
    model.setAttribute('scale', '5 5 5');
    model.setAttribute('visible', 'false'); // Oculto por defecto

    // Añadir animación de rotación infinita
    model.setAttribute('animation', {
      property: 'rotation',
      to: '0 360 0',
      loop: true,
      dur: 10000, // 10 segundos por rotación
      easing: 'linear',
    });

    // Añadir un indicador para el hit test
    const pointer = document.createElement('a-sphere');
    pointer.setAttribute('color', 'yellow');
    pointer.setAttribute('radius', '0.05');
    pointer.setAttribute('visible', 'true'); // Oculto hasta detectar un plano
    scene.appendChild(pointer);

    scene.addEventListener('ar-hit-test', (event) => {
      // Mensaje para confirmar que se activó el evento
      alert('Evento hit-test activado');

      const hitPoint = event.detail.intersection?.point;

      if (hitPoint) {
        //logs
        console.log("Plano detectado en:", hitPoint);
        setLogMessage(`Plano detectado en: x=${hitPoint.x}, y=${hitPoint.y}, z=${hitPoint.z}`);
        setShowPopup(true);

        // Mostrar y posicionar el marcador amarillo
        pointer.setAttribute('position', `${hitPoint.x} ${hitPoint.y} ${hitPoint.z}`);
        pointer.setAttribute('visible', 'true');
        setShowPopup(true);

        // Colocar el modelo cuando el usuario haga clic en la pantalla
        scene.addEventListener('click', () => {
          //logs
          console.log("Modelo colocado en:", hitPoint);
          setLogMessage(`Modelo colocado en: x=${hitPoint.x}, y=${hitPoint.y}, z=${hitPoint.z}`);
          setShowPopup(true);

          //pocisionamiento
          model.setAttribute('position', `${hitPoint.x} ${hitPoint.y} ${hitPoint.z}`);
          model.setAttribute('visible', 'true');
          pointer.setAttribute('visible', 'false'); // Ocultar el marcador
        });
      } else {
        //logs
        console.warn("No se detectó ningún plano.");
        setLogMessage("No se detectó ningún plano. Mueve la cámara.");
        setShowPopup(true);

        // Si no se detecta un plano, ocultar el marcador
        pointer.setAttribute('visible', 'false');
      }
    });

    // Confirmar que el evento se añadió correctamente 
    alert("Listener de ar-hit-test registrado."); 

    //eventos de ar-hit-test
    scene.addEventListener('ar-hit-test-start', () => {
      alert('Buscando superficies para posicionar el objeto...');
    });
    
    scene.addEventListener('ar-hit-test-achieved', () => {
      alert('Superficie encontrada. Toca para colocar el objeto.');
    });
    
    scene.addEventListener('ar-hit-test-select', (event) => {
      const position = event.detail.position; // Posición detectada
      alert(`Objeto colocado en: ${position.x.toFixed(2)}, ${position.y.toFixed(2)}, ${position.z.toFixed(2)}`);
    });    

    // Añadir la escena al DOM
    document.body.appendChild(scene);

    return () => {
      // Limpiar la escena al desmontar el componente
      document.body.removeChild(scene);
    };
  }, []);

  return (
    <div>
      {isARSupported ? (
        <p>Busca una superficie para colocar el modelo. Toca para posicionarlo.</p>
      ) : (
        <p>AR no está disponible en este dispositivo.</p>
      )}
    </div>
  );
};

export default ARViewer;*/

import React, { useEffect, useState } from 'react';

const ARViewer = () => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [logMessage, setLogMessage] = useState("Inicializando...");
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar/ocultar el popup

  useEffect(() => {
    if (document.querySelector('a-scene')) {
      console.log('La escena ARViewer ya está inicializada.');
      return;
    }
  
    console.log('ARViewer iniciado');
    const scene = document.createElement('a-scene');
    scene.setAttribute('vr-mode-ui', 'enabled: false');
    scene.setAttribute('webxr', 'optionalFeatures: hit-test;');
    scene.setAttribute('ar-hit-test', '');
    scene.setAttribute('arjs' , 'trackingBackend: best;');
  
    // Crear un retículo visible (esfera)
    const reticle = document.createElement('a-sphere');
    reticle.setAttribute('color', 'yellow');
    reticle.setAttribute('radius', '0.05');
    reticle.setAttribute('visible', 'false'); // Oculto inicialmente
    scene.appendChild(reticle);
  
    //evento para iniciar hit test
    scene.addEventListener('ar-hit-test-start', () => {
      console.log('El hit-test ha comenzado.');
      alert('El hit-test ha comenzado.');
    });

    // Añadir eventos para hit-test
    scene.addEventListener('ar-hit-test-achieved', () => {
      console.log('Superficie encontrada');
      alert('Superficie encontrada. Mueve la cámara.');
      reticle.setAttribute('visible', 'true'); // Mostrar el retículo
    });
  
    scene.addEventListener('ar-hit-test-select', (event) => {
      const position = event.detail.position;
      console.log('Posición detectada:', position);
      alert(`Posición detectada: x=${position.x.toFixed(2)}, y=${position.y.toFixed(2)}, z=${position.z.toFixed(2)}`);
      reticle.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
    });
  
    document.body.appendChild(scene);
  
    return () => {
      document.body.removeChild(scene);
    };
  }, []);  

return (
  <div>
    {isARSupported ? (
      <p>Busca una superficie para colocar el modelo. Toca para posicionarlo.</p>
    ) : (
      <p>AR no está disponible en este dispositivo.</p>
    )}
  </div>
);
};

export default ARViewer;