import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function ModelViewer({ modelPath }: { modelPath: string }) {
    const gltf = useGLTF(modelPath, true); 

    return <primitive object={gltf.scene} position={[0, -2, 0]} />;
}

export default function Model({ url }: {url: string}) {

    const modelPath = url;  

    return (
        <Canvas style={{ width: '100%', height: '100%', borderRadius: "20px" }} camera={{ position: [3, 1, 1], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ModelViewer modelPath={modelPath} />
            <OrbitControls 
                minDistance={2} 
                maxDistance={5} 
            />
        </Canvas>
    );
}
