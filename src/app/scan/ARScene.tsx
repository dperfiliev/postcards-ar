// src/app/components/ARScene.tsx
"use client";

import styles from "./ARScene.module.css"

import { useEffect, useState, useRef } from "react";

import Button from "../components/button/button";

import Head from "next/head";
import Script from "next/script";

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
        //await import("aframe");
        //await import("@ar-js-org/ar.js/aframe/build/aframe-ar.js");

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

    <>

      <meta
        aframe-injected=""
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no,user-scalable=no,minimal-ui,viewport-fit=cover"
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

        {Object.entries(models).map(([key, { model, patt }]) => (
          <a-marker key={key} preset="custom" type="pattern" url={patt}

            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
          >
            <a-entity
              gltf-model={model}
              scale="1 1 1"
              position="0 0 0"
              rotation="0 0 0"
              gesture-handler="minScale: 0.25; maxScale: 10"
            ></a-entity>
          </a-marker>
        ))}

        <a-entity camera="fov: 50;"></a-entity>

      </a-scene>
    </>
  );
};

export default ARScene;