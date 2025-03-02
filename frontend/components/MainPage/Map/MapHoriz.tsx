import { 
    StyleSheet,
    View
} from 'react-native';
import { useState } from 'react';
import MapButtonsRow from './MapButtons/MapButtonsRow';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
    const [frontSourcer] = useState('map_after.png');
    const [backSourcer, setBackSourcer] = useState('map_after.png');

    const handleBackChange = (newImage: string) => {
        setBackSourcer(newImage);
    };


    return (
        <View
            style={[styles.root]}
        >
            <div style={styles.slider}>
                <Slider1 
                    testText = {"this is a test"} 
                    frontSource={'../assets/assets/images/' + frontSourcer} 
                    backSource={'../assets/assets/images/' + backSourcer} 
                />
            </div>
            <MapButtonsRow 
                rowTitle='Below image' 
                nameTuple={['4x upscale','4x upscale with lidar','4x upscale with logged lidar','16x upscale with logged lidar']} 
                imageTuple={['orange','purple']} 
                onImagePress={handleBackChange}/>
        </View>
  );
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '65vh',
        top: '1vh',
    },
    slider: {
        display: 'flex',
        justifyContent: 'center',
    }
})