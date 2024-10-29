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


    /*
    const observer = new MutationObserver(() => {
      const videoElement = document.getElementById("arjs-video") as HTMLVideoElement;
      //const bodyElement = document.querySelector('body') as HTMLElement;

      if (videoElement) {
        // Устанавливаем нужные стили для видео
        videoElement.style.position = "absolute";
        videoElement.style.top = "0";
        videoElement.style.left = "0";
        videoElement.style.width = "1000vw";  // Устанавливаем ширину в 100%
        videoElement.style.height = "100vh"; // Устанавливаем высоту в 100%
        videoElement.style.zIndex = "0";     // Устанавливаем z-index
        videoElement.style.objectFit = "contain"; // Контейнер без обрезки

        //bodyElement.style.marginLeft = '0';

        observer.disconnect(); // Отключаем наблюдатель после применения стилей
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Убираем наблюдатель при размонтировании компонента
    return () => observer.disconnect();
    */



  }, []);

  if (!models) {
    return <div>Loading AR scene...</div>;
  }


  return (

      <a-scene 
        vr-mode-ui="enabled: false" // Отключает VR-интерфейс
        embedded
        arjs="sourceType: webcam; 
      debugUIEnabled: false; detectionMode: mono_and_matrix; 
      matrixCodeType: 4x4; trackingMethod: best;
      renderer='logarithmicDepthBuffer: true;"
      >

        <a-light type="hemisphere" intensity="0.75"></a-light>

        {/* Камера с настройками дальности и ближности camera="far:100000; near:0.01" */}

        <a-marker-camera></a-marker-camera>

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

{/*
        <div className={styles.panel}>
        <Button text="hello"/>
        </div>
        */}