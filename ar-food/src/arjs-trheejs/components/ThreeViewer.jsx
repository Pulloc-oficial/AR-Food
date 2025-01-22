import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeViewer = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // Crear la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      85,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Añadir luz a la escena
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Cargar el modelo GLTF
    const loader = new GLTFLoader();
    loader.load(
      './assets/breakfast-food-dish/source/breakfast.glb',
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Rotación infinita del modelo
        function animate() {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01;
          renderer.render(scene, camera);
        }
        animate();
      },
      undefined,
      (error) => {
        console.error('Error cargando el modelo:', error);
      }
    );

    // Limpiar el renderer al desmontar el componente
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeViewer;
