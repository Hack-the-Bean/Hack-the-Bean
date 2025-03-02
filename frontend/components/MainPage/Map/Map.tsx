import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapButtonsColumn from './MapButtons/MapButtonsColumn';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
    const [frontSource, setFrontSource] = useState('map_after.png');
    const [backSource, setBackSource] = useState('map_after.png');

    const handleFrontChange = (newImage: string) => {
        setFrontSource(newImage);
    };

    const handleBackChange = (newImage: string) => {
        setBackSource(newImage);
    };

    return (
        <View style={[styles.root]}>
            <MapButtonsColumn 
                columnTitle='Left Image' 
                nameTuple={['orange','purple','black']} 
                imageTuple={['orange','purple','black']} 
                onImagePress={handleFrontChange}
            />
            <div style={styles.slider}>
                <Slider1 
                    testText={"this is a test"} 
                    frontSource={'../assets/assets/images/' + frontSource} 
                    backSource={'../assets/assets/images/' + backSource} 
                />
            </div>
            <MapButtonsColumn 
                columnTitle='Right Image' 
                nameTuple={['TEST1','TEST1','TEST1','TEST1']} 
                imageTuple={['orange','purple','black', 'map_after']} 
                onImagePress={handleBackChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '65vh',
        top: '1vh',
    },
    slider: {
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'scroll',
        scrollbarWidth: 'none', /* only works on Firefox */
    }
})