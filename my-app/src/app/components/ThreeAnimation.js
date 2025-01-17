import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import styled from 'styled-components';
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";


const SpeechBubble = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  max-width: 220px;
  z-index: 10;
`;


export default function ThreeAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const clock = new THREE.Clock();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(5, 2, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const stats = new Stats();
    container.appendChild(stats.dom);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const roomEnvironment = new RoomEnvironment();
    const environment = pmremGenerator.fromScene(roomEnvironment).texture;
    scene.environment = environment;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/models/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    let mixer;
    let littleTokyo = 'LittlestTokyo.glb';
    let Globe = 'earth-cartoon.glb';
    loader.load('/models/gltf/earth-cartoon.glb/', (gltf) => {
      const model = gltf.scene;
      model.position.set(1, 1, 0);
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(gltf.animations[0]).play();

      renderer.setAnimationLoop(() => {
        const delta = clock.getDelta();
        mixer.update(delta);
        controls.update();
        stats.update();
        renderer.render(scene, camera);
      });
    });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <SpeechBubble>
        Hi, I'm Ana Araújo. 🙋🏻‍♀️ Welcome to my 3D world! 🌎
      </SpeechBubble>

      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </>
  );
}
