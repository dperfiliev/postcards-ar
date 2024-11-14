import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function ModelViewer({ modelPath }: { modelPath: string }) {
    const gltf = useGLTF(modelPath, true); 

    console.log(gltf);
    return <primitive object={gltf.scene} />;
}

export default function Model({ url }: {url: string}) {
    //console.log("Model", url);

    const modelPath = url;  

    return (
        <Canvas style={{ width: '70%', height: '70%' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ModelViewer modelPath={modelPath} />
            <OrbitControls />
        </Canvas>
    );
}
