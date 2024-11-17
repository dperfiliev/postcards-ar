"use client";

import styles from "./ARScene.module.css"

import { useEffect, useState, useRef } from "react";

import Button from "../components/button/button";


import { useRouter } from "next/navigation";

interface ModelsData {
  [key: string]: {
    model: string;
    patt: string;
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

  useEffect(() => {
    loadModels();

    // Мы используем replace, чтобы контролировать навигацию и обновить маршрут
    const handleBackNavigation = () => {
      window.location.href = "/";  // Принудительное обновление маршрута
    };

    // Добавляем обработчик для кнопки "Назад"
    window.addEventListener("popstate", handleBackNavigation);

    
  }, []);

  if (!models) {
    return <div>Loading AR scene...</div>;
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
              gesture-handler="minScale: 0.5; maxScale: 2"
            ></a-entity>
          </a-marker>
        ))}
        <a-entity camera="fov: 50;"></a-entity>
      </a-scene>
    </>
  );
};

export default ARScene;