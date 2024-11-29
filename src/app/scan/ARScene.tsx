"use client";
import Script from "next/script";

import Head from 'next/head';

import { useEffect, useState, useRef } from "react";

import { useRouter } from "next/navigation";

//import * as THREE from "three"; // Импортируйте three.js


interface ModelsData {
  [key: string]: {
    model: string;
    patt: string;
    particleTexture: string;
    color: string;
  };
}

const ARScene = () => {
  const [models, setModels] = useState<ModelsData | null>(null);

  const router = useRouter();

  const loadModels = async () => {
    try {
      const response = await fetch("/data/models.json");
      const data: ModelsData = await response.json();
      setModels(data);
    } catch (error) {
      console.error("Error loading models:", error);
    }
  };

  const cleanUpARScene = () => {
    const videoElement = document.getElementById("arjs-video") as HTMLVideoElement;
    if (videoElement) {
      videoElement.pause();
      videoElement.srcObject = null;
      videoElement.remove();

      document.body.innerHTML = '';
    }

    window.location.href = "/";
  };

  useEffect(() => {
    loadModels()

    window.addEventListener("popstate", cleanUpARScene);
  }, []);


  if (!models) {
    return <div>Загрузка сцены...</div>;
  }

  return (
    <>
      <meta
        aframe-injected=""
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui, viewport-fit=cover"
      />

      <a-scene arjs="sourceType: webcam;"
        embedded
        renderer="logarithmicDepthBuffer: true;"
        inspector=""
        keyboard-shortcuts=""
        screenshot=""
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui=""
        gesture-detector
      >
        {Object.entries(models).map(([key, { model, patt, particleTexture, color }]) => (
          <a-marker key={key} preset="custom" type="pattern" url={patt}
            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
          >
            <a-entity
              gltf-model={model}
              scale="1.2 1.2 1.2"
              position="0 0 0"
              rotation="0 0 0"
              gesture-handler="minScale: 0.5; maxScale: 2"
            ></a-entity>

            
            <a-entity
              
              particle-system={`
                texture: ${particleTexture};
                color: ${color};
                size: 3, 0;
                velocityValue: 0.001 0.001 0.001;
                velocitySpread: 0.5 0 0.5;
                accelerationValue: 0.001 0.001 0.001;
                accelerationSpread: 0.001 0.001 0.001;
                rotationAngle: 0;
                blending: 2;
                particleCount: 100;
                maxAge: 7;
              `}
              
              position="0 0.1 0"
            ></a-entity>
            

          </a-marker>
        ))}
        <a-entity camera="fov: 50;"></a-entity>
      </a-scene>
    </>
  );
};

export default ARScene;