import React, { useEffect, useRef } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    Dimensions,
    Easing
} from "react-native";

const carouselImages = [
    require("@/assets/images/carousel_renders/background.png")
];

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = width / 2; // TODO: change to percentage of image width

export default function HeroCarousel() {

    
    return (
        <View style={styles.heroContainer}>
            <View style={[styles.carouselContainer]}>
                <Image
                    source={carouselImages[0]}
                    style={styles.image}
                />
            </View>

            <View style={styles.textOverlay}>
                <Text style={styles.heroText}>Image Upscaling</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heroContainer: {
        height: 700,
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
    },
    carouselContainer: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
    },
    imageWrapper: {
        width: IMAGE_WIDTH,
        height: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        opacity: 0.6,
    },
    textOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    heroText: {
        fontSize: 64,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
})