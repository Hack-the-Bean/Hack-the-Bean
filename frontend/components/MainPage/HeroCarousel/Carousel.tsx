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
    require("@/assets/images/carousel_renders/carousel1.jpeg"),
    require("@/assets/images/carousel_renders/carousel2.jpeg"),
    require("@/assets/images/carousel_renders/carousel3.jpeg"),
    require("@/assets/images/carousel_renders/carousel4.jpeg"),
    require("@/assets/images/carousel_renders/carousel5.jpeg"),
    require("@/assets/images/carousel_renders/carousel6.jpeg"),
];

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = width / 2; // TODO: change to percentage of image width

export default function HeroCarousel() {
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        
        const animationSequence = () => {
            Animated.timing(scrollX, {
                toValue: -IMAGE_WIDTH * carouselImages.length,
                duration: carouselImages.length * 6000,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(() => {
                scrollX.setValue(0);
                animationSequence();
            });
        };

        animationSequence();

        return () => {
            scrollX.stopAnimation();
        };

    }, []);

    const duplicatedImages = [
        ...carouselImages,
        ...carouselImages,
        ...carouselImages
    ];
    return (
        <View style={styles.heroContainer}>
            <Animated.View
                style={[
                    styles.carouselContainer,
                    {
                        transform: [
                            {
                                translateX: scrollX
                            },
                        ],
                    },
                ]}
            >
                {duplicatedImages.map((image, index) => (
                    <View key={`image-${index}`} style={styles.imageWrapper}>
                        <Image source={image} style={styles.image} resizeMode="cover"/>
                    </View>
                ))}
            </Animated.View>

            <View style={styles.textOverlay}>
                <Text style={styles.heroText}>Heathrow's Third Runway</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heroContainer: {
        height: 800,
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