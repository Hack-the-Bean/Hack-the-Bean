import React, { useRef } from 'react';
import { 
    TouchableOpacity,
    Animated,
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

    return (
        <TouchableOpacity
            ref={ref}
            style={[styles.button, style]}
            onPress={onPress}
            activeOpacity={0.7}>
            <Image
                source={imageSource}
                style={[
                    styles.image,
                    isHovered && styles.hover,
                ]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    hover: {
        transform: [{ scale: 1.1 }],
    }
});

export default MapChangeButton;