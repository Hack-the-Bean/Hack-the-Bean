import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { View, StyleSheet } from "react-native";

function Box(props) {
    const mesh = useRef(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => (mesh.current.rotation.x += delta));
    return (
        <mesh 
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    )
}

export default function BoxRender() {
    return (
        <View style={styles.container}>
            <Canvas style={styles.canvas}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
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