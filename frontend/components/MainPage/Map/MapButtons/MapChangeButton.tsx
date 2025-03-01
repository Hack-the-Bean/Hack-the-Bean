import React, { useRef, useEffect } from 'react';
import { 
    TouchableOpacity,
    Animated,
    Easing,
    View,
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
        <View 
            ref={ref} 
            style={[styles.wrapper]}>
            <TouchableOpacity
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
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

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
    }
});

export default MapChangeButton;