"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const SpeechBubble = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  max-width: 220px;
  z-index: 10;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const StartButton = styled.a`
  position: fixed;
  bottom: 300px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 14px 28px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.6);
    transform: translateX(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateX(-50%) scale(0.95);
  }
`;

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;

export default function ThreeAnimation() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("Hi, I'm Ana Araújo. 🙋🏻‍♀️ Welcome to my 3D world! 🌎");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Speech bubble disappears after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const phrases = [
      "Hi, I'm Ana Araújo. 🙋🏻‍♀️ Welcome to my 3D world! 🌎",
      "Let's explore together! 🚀",
      "Keep scrolling to learn more! 🔽",
    ];

    let index = 0;
    const textLoop = setInterval(() => {
      setText(phrases[index]);
      index = (index + 1) % phrases.length;
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(textLoop);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const clock = new THREE.Clock();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
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
    dracoLoader.setDecoderPath("/models/gltf/");

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    let mixer;
    loader.load("/models/gltf/earth-cartoon.glb", (gltf) => {
      const model = gltf.scene;
      model.position.set(1, 1, 1);
      model.scale.set(2.0, 2.0, 2.0);
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

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} style={{ width: "100%", height: "100vh" }}>
        <StartButton as="a" href="#about">
          START
        </StartButton>
        <SpeechBubble $isVisible={isVisible}>
          {text}
        </SpeechBubble>
      </div>
    </>
  );
}
