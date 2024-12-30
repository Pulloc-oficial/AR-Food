import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeViewer = () => {
  // We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
 const scene = new THREE.Scene()
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
 const renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor("#f4ede8")
 document.body.appendChild( renderer.domElement )
 camera.position.z = 5
 
//Variable para almacenar el modelo cargado
let loadedModel = null

const loader = new GLTFLoader();
const basePath = process.env.NODE_ENV === "production" ? "/AR-Food" : "";
loader.load(
  `${basePath}/assets/breakfast-food-dish/source/breakfast.glb`,
    (gltf) => {
      gltf.scene.scale.set(10, 10, 10 ); // Duplica el tamaño en todos los ejes
      gltf.scene.rotation.set(Math.PI / 6, 0, 0); // Gira 90° en el eje Y
      scene.add(gltf.scene);
      loadedModel = gltf.scene;
      // Apply a material that responds to light
      /*gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Apply a material that reacts to light
        }
      });*/
      console.log('Modelo cargado correctamente');
    },
    (xhr) => {
      console.log(`Cargando modelo: ${(xhr.loaded / xhr.total) * 100}% completado`);
    },
    (error) => {
      console.error('Error al cargar el modelo:', error);
    }
  );

 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
   let width = window.innerWidth
   let height = window.innerHeight
   renderer.setSize( width, height )
   camera.aspect = width / height
   camera.updateProjectionMatrix()
 })
 
 
 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xffffff, 1)
 scene.add( ambientLight )
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 30, 3000);
 pointLight.position.set( 3, 1, 1 );
 scene.add( pointLight );


// Geometria para saber donde esta la fuente de luz 
// Crear una geometría visible en la posición de la luz
/*const pointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLightHelper);

const lightHelper = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 50 , 50),  // Pequeña esfera para representar la luz
  new THREE.MeshBasicMaterial({ color: 0xffff00 })  // Color amarillo
);
lightHelper.position.copy(pointLight.position);  // Colocar la esfera en la misma posición que la luz
scene.add(lightHelper);*/


 const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  if (loadedModel) {
    loadedModel.rotation.y += 0.01; // Rotar en el eje Y
  }
  };
  animate();
};

export default ThreeViewer;

//----------------------------------------------------------------
/*
// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
 const scene = new THREE.Scene()
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
 const renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor("#222222")
 document.body.appendChild( renderer.domElement )
 camera.position.z = 5
 
 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
   let width = window.innerWidth
   let height = window.innerHeight
   renderer.setSize( width, height )
   camera.aspect = width / height
   camera.updateProjectionMatrix()
 })
 
 // basic cube
 var geometry = new THREE.BoxGeometry( 1, 1, 1)
 var material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
 var cube = new THREE.Mesh ( geometry, material )
 scene.add( cube )
 
 // wireframe cube
 var geometry = new THREE.BoxGeometry( 3, 3, 3)
 var material = new THREE.MeshBasicMaterial( {
   color: "#dadada", wireframe: true, transparent: true
 })
 var wireframeCube = new THREE.Mesh ( geometry, material )
 scene.add( wireframeCube )
 
 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
 scene.add( ambientLight )
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 1 );
 pointLight.position.set( 25, 50, 25 );
 scene.add( pointLight );
 
 
 function animate() {
   requestAnimationFrame( animate )
   cube.rotation.x += 0.04;
   cube.rotation.y += 0.04;
   wireframeCube.rotation.x -= 0.01;
   wireframeCube.rotation.y -= 0.01;
   renderer.render( scene, camera )
 }
 animate()
 */



 /*
useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new GLTFLoader();
  loader.load(
    '/assets/modelo.glb', // Ruta del modelo
    (gltf) => {
      scene.add(gltf.scene);
      console.log('Modelo cargado correctamente');
    },
    (xhr) => {
      console.log(`Cargando modelo: ${(xhr.loaded / xhr.total) * 100}% completado`);
    },
    (error) => {
      console.error('Error al cargar el modelo:', error);
    }
  );

  const light = new THREE.HemisphereLight(0xffffff, 0x444444);
  light.position.set(0, 20, 0);
  scene.add(light);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  return () => {
    document.body.removeChild(renderer.domElement); // Limpia el canvas al desmontar el componente
  };
}, []);
 */