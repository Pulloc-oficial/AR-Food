import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Verificar si el contenedor está disponible
    if (mountRef.current) {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      // Crear la escena
      const scene = new THREE.Scene();

      // Crear la cámara
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      // Crear el renderizador
      const renderer = new THREE.WebGLRenderer();
      if (!renderer.context) {
        console.error('Error creando el contexto WebGL.');
        return;
      }

      renderer.setSize(width, height);

      // Agregar el renderizador al DOM
      mountRef.current.appendChild(renderer.domElement);

      // Crear un cubo
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Añadir luz ambiental
      const light = new THREE.AmbientLight(0x404040); // Luz suave
      scene.add(light);

      // Función de animación
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotar el cubo
        cube.rotation.x += 0.05;
        cube.rotation.y += 0.05;

        // Renderizar la escena con la cámara
        renderer.render(scene, camera);
      };

      animate();

      // Limpiar recursos cuando el componente se desmonta
      return () => {
        mountRef.current.removeChild(renderer.domElement);
      };
    }
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightgray",
      }}
    />
  );
};

export default ThreeViewer;