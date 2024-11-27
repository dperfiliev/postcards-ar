import styles from "./page.module.css";

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

function Loader() {
    return (
        <Html center>
            <div className={styles.loader}></div>
        </Html>
    );
}

function ModelViewer({ modelPath }: { modelPath: string }) {
    const gltf = useGLTF(modelPath, true);
    const meshRef = useRef<THREE.Object3D>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    return <primitive ref={meshRef} object={gltf.scene} position={[0, -0.9, 0]} />;
}

export default function Model({ url }: { url: string }) {

    const modelPath = url;

    return (
        <Canvas style={{ width: '100%', height: '100%', borderRadius: "20px" }} camera={{ position: [1.5, 0.5, 1], fov: 75 }}>
            <ambientLight intensity={2.5} />
            <pointLight position={[0, 1.5, 0]} />

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
