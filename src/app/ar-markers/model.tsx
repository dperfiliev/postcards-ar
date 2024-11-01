// src/components/GltfModel.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface GltfModelProps {
    modelPath: string;
}

function ModelViewer({ modelPath }: GltfModelProps) {
    const gltf = useGLTF(modelPath);
    return <primitive object={gltf.scene} />;
}

export default function Model({ modelPath }: GltfModelProps) {
    return (
        <Canvas style={{ width: '70%', height: '70%' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ModelViewer modelPath={modelPath} />
            <OrbitControls />
        </Canvas>
    );
}
