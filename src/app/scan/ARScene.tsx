// src/app/components/ARScene.tsx
"use client";

import styles from "./ARScene.module.css"

import { useEffect, useState, useRef } from "react";

import Button from "../components/button/button";

interface ModelsData {
  [key: string]: {
    model: string;
    patt: string;
  };
}

const ARScene = () => {
  const [models, setModels] = useState<ModelsData | null>(null);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        // Импортируем A-Frame и AR.js внутри useEffect
        await import("aframe");
        await import("@ar-js-org/ar.js/aframe/build/aframe-ar.js");

        console.log("A-Frame и AR.js загружены");

        // Загружаем модели из JSON-файла
        const response = await fetch("/data/models.json");
        const data: ModelsData = await response.json();
        setModels(data);
      } catch (error) {
        console.error("Error loading libraries or fetching models:", error);
      }

    };

    loadLibraries();

  }, []);

  if (!models) {
    return <div>Loading AR scene...</div>;
  }

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const scale = isMobile ? "2 0.8 2" : "1 1 1";

  return (

    
    <a-scene arjs="sourceType: webcam;" 
    renderer="logarithmicDepthBuffer: true;"
   
    inspector="" 
    keyboard-shortcuts="" 
    screenshot="" 
    vr-mode-ui="enabled: false" 
    device-orientation-permission-ui=""
    >

      {Object.entries(models).map(([key, { model, patt }]) => (
        <a-marker key={key} preset="custom" type="pattern" url={patt}>
          
          <a-entity
            gltf-model={model}
            scale={scale}
            position="0 0 0"
            rotation="0 0 0"
            
          ></a-entity>
        </a-marker>
      ))}

    <a-entity camera="fov: 50; position: 0 5 0;"></a-entity>


    </a-scene>

  );
};

export default ARScene;



{/*
  
  vr-mode-ui="enabled: false" // Отключает VR-интерфейс
      embedded
      arjs="sourceType: webcam; 
      debugUIEnabled: false; detectionMode: mono_and_matrix; 
      matrixCodeType: 4x4; trackingMethod: best;
      renderer='antialias: true; precision: medium; logarithmicDepthBuffer: true;"

  */}