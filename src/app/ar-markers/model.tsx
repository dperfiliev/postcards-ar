import styles from "./page.module.css";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html } from '@react-three/drei';


function Loader() {
    return (
        <Html center>
            <div className={styles.loader}></div>
        </Html>
    );
}

function ModelViewer({ modelPath }: { modelPath: string }) {
    const gltf = useGLTF(modelPath, true); 

    return <primitive object={gltf.scene} position={[0, -1, 0]} />;
}

export default function Model({ url }: {url: string}) {

    const modelPath = url;  

    return (
        <Canvas style={{ width: '100%', height: '100%', borderRadius: "20px" }} camera={{ position: [3, 1, 1], fov: 75 }}>
            <ambientLight intensity={4} />
            <pointLight position={[10, 10, 10]}/>
            
            <Suspense fallback={<Loader />}>
                <ModelViewer modelPath={modelPath} />
            </Suspense>

            <OrbitControls 
            enablePan={false}
                minDistance={2} 
                maxDistance={5} 
            />
        </Canvas>
    );
}
