import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';

interface MapChangeButtonProps {
    onPress: () => void;
    imageSource: ImageSourcePropType;
    style?: ViewStyle;
}

const MapChangeButton: React.FC<MapChangeButtonProps> = ({ onPress, imageSource, style }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.7}>
            <Image source={imageSource} style={styles.image} />
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
    }
});

export default MapChangeButton;