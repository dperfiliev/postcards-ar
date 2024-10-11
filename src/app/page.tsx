import dynamic from "next/dynamic";

import ARScene from './components/ARScene'; // Импортируйте ваш компонент ARScene

export default function Home() {
  return (
    <div>
      <ARScene />
    </div>
  );
}
