import React, { useState, useEffect } from 'react';
import { View, Image, PanResponder, StyleSheet, Text, Dimensions } from 'react-native';
import { Asset } from 'expo-asset';

type Slider1Props = {
    testText: string;
    frontSource: string;
    backSource: string;
};

const App = (props: Slider1Props) => {
    //set up image width and height
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    //get window width
    const windowWidth = Dimensions.get('window').width;

    //get image Asset from source
    const frontAsset = Asset.fromURI(props.frontSource);
    const backAsset = Asset.fromURI(props.backSource);
    
    //get image width and height
    useEffect(() => {
        // const frontAsset = Asset.fromModule(require('../images/purple.png'));
        // const backAsset = Asset.fromModule(require('../images/back.png'));

        //check front image availability then, if they have width and height, set them
        frontAsset.downloadAsync().then(() => {
            if (frontAsset.width !== null && frontAsset.height !== null) {
                setImageWidth(frontAsset.width);
                setImageHeight(frontAsset.height);
            }
            console.log('Width:', frontAsset.width);
            console.log('Height:', frontAsset.height);
        });

        //check back image availability then, if they have width and height, check same
        backAsset.downloadAsync().then(() => {
            if (backAsset.width !== null && backAsset.height !== null) {
                console.log('Back Width:', backAsset.width, '\nEqual to Front Width:', backAsset.width === frontAsset.width);
                console.log('Back Height:', backAsset.height, '\nEqual to Front Height:', backAsset.height === frontAsset.height);
            }
        });


    }, []);

    //get image uri
    const frontURI = frontAsset.uri;
    const backURI = backAsset.uri;

    //set offset for slider
    var offset = (windowWidth - imageWidth) / 2;

    //set slider position
    const [sliderPosition, setSliderPosition] = useState((imageWidth + offset) / 2);

    //create panResponder for slider
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            let newPos = gestureState.moveX;
            if (newPos < offset) newPos = offset;
            if (newPos > imageWidth + offset) newPos = imageWidth + offset;
            setSliderPosition(newPos - offset);
            // console.log(newPos);
        },
    });

    return (
        <View style={styles.container}>
            <View style={[styles.sliderContainer, { width: imageWidth, height: imageHeight }]}>
                <Image source={{ uri: backURI }} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
                <View style={[styles.overlay, { width: sliderPosition, height: imageHeight }]}>
                    <Image source={{ uri: frontURI }} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
                </View>
                <View {...panResponder.panHandlers} style={[styles.slider, { left: sliderPosition - 10, height: imageHeight }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#000',
    },
    sliderContainer: {
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
    },
    slider: {
        position: 'absolute',
        top: 0,
        width: 20,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderColor: '#000',
        borderWidth: 1,
        zIndex: 2,
    },
});

export default App;
