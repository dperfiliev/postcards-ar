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

  return (

    <a-scene
      
    >


      {Object.entries(models).map(([key, { model, patt }]) => (
        <a-marker key={key} preset="custom" type="pattern" url={patt}>
          <a-entity
            gltf-model={model}
            scale="0.5 0.5 0.5"
            position="0 0 0"
            rotation="0 90 0"
          ></a-entity>
        </a-marker>
      ))}

    <a-entity camera></a-entity>


    </a-scene>

  );
};

export default ARScene;

