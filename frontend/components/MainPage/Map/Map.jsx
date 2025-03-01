import { 
    StyleSheet,
    View
} from 'react-native';
import MapButtonsColumn from './MapButtons/MapButtonsColumn';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
  return (
    <View
        style={[styles.root]}
    >
        <MapButtonsColumn columnTitle='Left Image' />
        <div style={styles.slider}>
            <Slider1 
                testText = {"this is a test"} 
                frontSource={'../assets/assets/images/satellite.png'} 
                backSource={'../assets/assets/images/betterSat.png'} 
            />
        </div>
        <MapButtonsColumn columnTitle='Right Image' />
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '50vh',
    },
    slider: {
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'scroll',
        scrollbarWidth: 'none', /* only works on Firefox */
    }
})