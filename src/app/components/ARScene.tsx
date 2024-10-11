// src/app/components/ARScene.tsx
"use client";

import { useEffect, useState } from "react";

interface MarkerData {
  model: string;
  patt: string;
}

interface ModelsData {
  [key: string]: MarkerData;
}

const ARScene = () => {
  const [models, setModels] = useState<ModelsData | null>(null);

  // Загрузка данных о маркерах и моделях из models.json
  useEffect(() => {
    const loadLibraries = async () => {
      try {
        // Импортируем A-Frame и AR.js внутри useEffect
        await import("aframe");
        await import("@ar-js-org/ar.js");

        console.log("A-Frame и AR.js загружены");

        // Загружаем модели
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
    return <div>Loading AR Scene...</div>;
  }

  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      renderer="logarithmicDepthBuffer: true;"
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      {/* Генерация маркеров и привязанных моделей */}
      {Object.entries(models).map(([key, { model, patt }]) => (
        <a-marker
          key={key}
          type="pattern"
          url={patt}
          emitevents="true"
        >
          <a-entity
            gltf-model={model}
            scale="0.5 0.5 0.5"
            position="0 0 0"
            rotation="0 0 0"
          ></a-entity>
        </a-marker>
      ))}

      {/* Камера */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
