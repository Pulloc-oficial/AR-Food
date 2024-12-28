import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Verificar si el navegador soporta WebGL
    if (!THREE.WebGLRenderer.prototype.isWebGLAvailable) {
      console.error("WebGL no está disponible en este navegador.");
      alert("WebGL no está disponible en tu navegador. Por favor, habilítalo o usa otro navegador.");
      return;
    }

    let renderer;
    try {
      // Configuración básica de escena, cámara y renderizador
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();

      // Agregar el renderizador al DOM
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Crear un cubo básico
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Configurar la posición de la cámara
      camera.position.z = 5;

      // Animar el cubo
      const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };
      animate();
    } catch (error) {
      console.error("Error creando el contexto WebGL:", error);
      alert("Hubo un problema al inicializar WebGL. Por favor, verifica la configuración de tu sistema.");
    }

    // Limpiar el renderizador al desmontar el componente
    return () => {
      if (renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ThreeViewer;
