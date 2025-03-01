import React, { useRef, useEffect } from 'react';
import { 
    TouchableOpacity,
    Animated,
    Easing,
    Image,
    StyleSheet,
    ViewStyle,
    ImageSourcePropType 
} from 'react-native';
import { useHover } from 'react-native-web-hooks';

interface MapChangeButtonProps {
    onPress: () => void;
    imageSource: ImageSourcePropType;
    style?: ViewStyle;
}

const MapChangeButton: React.FC<MapChangeButtonProps> = ({ onPress, imageSource, style }) => {
    const ref = useRef(null);
    const isHovered = useHover(ref);

    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(scaleAnim, {
            toValue: isHovered ? 1.5 : 1,
            duration: 100,
            easing: Easing.bezier(0.5, 0, 1, 0.5),
            useNativeDriver: true,
        }).start();
    }, [isHovered, scaleAnim]);

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
                ]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    }
});

export default MapChangeButton;