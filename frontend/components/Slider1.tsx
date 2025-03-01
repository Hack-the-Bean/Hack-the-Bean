import React, { useState } from 'react';
import { View, Image, PanResponder, StyleSheet, Text, Dimensions } from 'react-native';
import { Asset } from 'expo-asset';

const purpleURI = Asset.fromModule(require('../assets/images/purple.png')).uri;
const backURI = Asset.fromModule(require('../assets/images/back.png')).uri;

const IMAGE_WIDTH = 967;
const IMAGE_HEIGHT = 349;
const windowWidth = Dimensions.get('window').width;

const App = () => {

    var offset = (windowWidth - IMAGE_WIDTH) / 2;

    const [sliderPosition, setSliderPosition] = useState(IMAGE_WIDTH / 2);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            let newPos = gestureState.moveX;
            if (newPos < offset) newPos = offset;
            if (newPos > IMAGE_WIDTH + offset) newPos = IMAGE_WIDTH + offset;
            setSliderPosition(newPos - offset);
            console.log(newPos);
        },
    });

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 36, marginBottom: 20 }}>Image Slider</Text>
            <View style={styles.sliderContainer}>
                <Image source={{ uri: backURI }} style={styles.image} />
                <View style={[styles.overlay, { width: sliderPosition }]}>
                <Image source={{ uri: purpleURI }} style={styles.image} />
            </View>
            <View {...panResponder.panHandlers} style={[styles.slider, { left: sliderPosition - 10 }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  sliderContainer: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: IMAGE_HEIGHT,
    overflow: 'hidden',
  },
  slider: {
    position: 'absolute',
    top: 0,
    width: 20,
    height: IMAGE_HEIGHT,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderColor: '#000',
    borderWidth: 1,
    zIndex: 2,
  },
});

export default App;
