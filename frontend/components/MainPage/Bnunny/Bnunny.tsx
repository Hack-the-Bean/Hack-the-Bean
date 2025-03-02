import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { View, StyleSheet } from "react-native";
import * as THREE from "three";

function Bnunny(props) {
    const mesh = useRef(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    const obj = useLoader(OBJLoader, require("../../../assets/bunny.obj"));

    useEffect(() => {
        if (obj) {
            obj.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: "hotpink",
                        roughness: 0.5,
                        metalness: 0.5,
                    });
                }
            })
        }
    })

    useFrame((state, delta) => (mesh.current.rotation.x += delta * 0.5));
    return (
        <primitive 
            object={obj}
            ref={mesh}
            scale={active ? 20 : 10.5}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
            {...props}
        >
            {hovered && obj.traverse((child) => {
                if (child.isMesh) {
                    child.material.color.set("hotpink");
                }
            })}
        </primitive>
    );
}

function LoadingFallback() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="gray" wireframe />
        </mesh>
    )
}

export default function BnunnyRender() {
    return (
        <View style={styles.container}>
            <Canvas style={styles.canvas}>
                <ambientLight intensity={1}/>
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={<LoadingFallback />}>
                    <Bnunny position={[0, 0, 0]}/>
                </Suspense>
            </Canvas>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 300,
    },
    canvas: {
        flex: 1,
    }
});