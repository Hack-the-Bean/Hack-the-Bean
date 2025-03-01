import React, { useState, useEffect } from 'react';
import { View, Image, PanResponder, StyleSheet, ScrollView, Dimensions } from 'react-native';
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
    const windowHeight = Dimensions.get('window').height;

    // console.log('App called - Window Width:', windowWidth);

    //get image Asset from source
    const frontAsset = Asset.fromURI(props.frontSource);
    const backAsset = Asset.fromURI(props.backSource);
    
    //get image width and height
    useEffect(() => {

        // console.log('useEffect called');

        //check front image availability then, if they have width and height, set them
        frontAsset.downloadAsync().then(() => {
            if (frontAsset.width !== null && frontAsset.height !== null) {
                setImageWidth(frontAsset.width);
                setImageHeight(frontAsset.height);
            }
            console.log('Front Width:', frontAsset.width);
            console.log('Front Height:', frontAsset.height);
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

    var heightMod = 0.5;

    var imgWidth = (windowHeight*heightMod)*(imageWidth/imageHeight);
    var offset = (windowWidth/2) - (imgWidth/2);

    var sliderWidth = (imgWidth) / 40;

    
    //set slider position
    const [sliderPosition, setSliderPosition] = useState(imgWidth/2);

    useEffect(() => {
        if (imgWidth > 0) {
            setSliderPosition(imgWidth / 2);
        }
    }, [imgWidth]);
    

    //create panResponder for slider
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,        
        onPanResponderMove: (_, gestureState) => {
            // console.log('WindowWidth:', windowWidth, 'ImageWidth:', imgWidth, 'min', (windowWidth/2) - (imgWidth/2), 'max', (windowWidth/2) + (imgWidth/2));
            let newPos = gestureState.moveX;
            if (newPos < (offset + (sliderWidth/2))) newPos = (offset + (sliderWidth/2));
            if (newPos > ((windowWidth/2) + (imgWidth/2) - (sliderWidth/2))) newPos = ((windowWidth/2) + (imgWidth/2) - (sliderWidth/2));
            setSliderPosition(newPos-offset);
        },
    });

    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            <View style={[styles.sliderContainer, { height: windowHeight*heightMod, width: (windowHeight*heightMod)*(imageWidth/imageHeight) }]}>
                <Image source={{ uri: backURI }} style={[styles.image, { height: windowHeight*heightMod, width: (windowHeight*heightMod)*(imageWidth/imageHeight) }]} />
                <View style={[styles.overlay, { width: sliderPosition, height: (windowWidth*heightMod) }]}>
                    <Image source={{ uri: frontURI }} style={[styles.image, { height: windowHeight*heightMod, width: (windowHeight*heightMod)*(imageWidth/imageHeight) }]} />
                </View>
                <View {...panResponder.panHandlers} style={[styles.slider, { width: sliderWidth, left: sliderPosition - (sliderWidth/2), height: (windowWidth*0.5) }]} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sliderContainer: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        alignSelf: 'center',
    },
    image: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        alignSelf: 'center',
    },
    overlay: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    slider: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(255,0,255,0.7)',
        borderColor: '#000',
        borderWidth: 1,
        zIndex: 2,
        // alignSelf: 'center',
    },
});

export default App;
