import React, { useRef, useEffect } from 'react';
import { 
    TouchableOpacity,
    Animated,
    Easing,
    Text,
    Image,
    StyleSheet,
    ViewStyle,
    ImageSourcePropType 
} from 'react-native';
import { useHover } from 'react-native-web-hooks';

interface MapChangeButtonProps {
    onPress: () => void;
    imageSource: ImageSourcePropType;
    label?: string;
    style?: ViewStyle;
}

const MapChangeButton: React.FC<MapChangeButtonProps> = ({
    onPress, 
    imageSource,
    label = "Select", 
    style 
}) => {
    const ref = useRef(null);
    const isHovered = useHover(ref);

    const scaleAnim = useRef(new Animated.Value(1)).current;
    const textPositionAnim = useRef(new Animated.Value(30)).current;
    const overlayOpacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(scaleAnim, {
                toValue: isHovered ? 1.5 : 1,
                duration: 100,
                easing: Easing.bezier(0.5, 0, 1, 0.5),
                useNativeDriver: true,
            }),
            Animated.timing(textPositionAnim, {
                toValue: isHovered ? 0 : 30,
                duration: 200,
                easing: Easing.bezier(0.5, 0, 1, 0.5),
                useNativeDriver: true
            }),
            Animated.timing(overlayOpacityAnim, {
                toValue: isHovered ? 0.5 : 0,
                duration: 200,
                easing: Easing.bezier(0.5, 0, 1, 0.5),
                useNativeDriver: true
            })
        ]).start();
    }, [isHovered]);

    return (
        <TouchableOpacity
            ref={ref}
            style={[styles.button, style]}
            onPress={onPress}
            activeOpacity={0.7}>
            <Animated.Image
                source={imageSource}
                style={[
                    styles.image,
                    { transform: [{ scale: scaleAnim }] },
                ]} 
            />

            <Animated.View
                style={[
                    styles.overlay,
                    { opacity: overlayOpacityAnim }
                ]}
            />

            <Animated.View
                style={[
                    styles.textContainer,
                    { transform: [{ translateY: textPositionAnim }] }
                ]}
            >
                <Text style={styles.text}>{label}</Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        overflow: 'hidden',
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black', // Dark overlay
        borderRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.7)', // Semi-transparent background
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default MapChangeButton;