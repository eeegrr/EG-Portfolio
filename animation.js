
// Import the necessary modules from Three.js
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.js Scene
const scene = new THREE.Scene();

// Create a new camera
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 2); // Adjusted to show character's shoulders and face

// Instantiate a loader for the .glb files
const loader = new GLTFLoader();
let mixer; // To handle animations

// Load the character model
loader.load('3d-objects/character.glb', function (gltf) {
    const model = gltf.scene;

    // Adjust the character's position and scale
    model.position.set(0, 0, 0); // Adjust this to move the character up/down/left/right
    model.scale.set(1.5, 1.5, 1.5); // Adjust this to change the size of the character

    scene.add(model);

    // Load the animation
    loader.load('3d-objects/animation-idle.glb', function (anim) {
        mixer = new THREE.AnimationMixer(model);
        const action = mixer.clipAction(anim.animations[0]);
        action.play();
    });
}, undefined, function (error) {
    console.error(error);
});

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("3d-background").appendChild(renderer.domElement);

// Add lights to the scene
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// Add controls to the camera
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.6, 0); // Focus on the character's head
controls.update();

// Disable rotation
controls.enableRotate = false; // Rotation
controls.enableZoom = false; // Zoom

// Render the scene
function animate() {
    requestAnimationFrame(animate);

    if (mixer) {
        mixer.update(0.01); // Update the animation mixer
    }

    controls.update(); // Update the controls
    renderer.render(scene, camera); // Render the scene
}

// Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the 3D rendering
animate();
