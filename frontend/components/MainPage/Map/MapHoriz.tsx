import { 
    StyleSheet,
    View
} from 'react-native';
import MapButtonsRow from './MapButtons/MapButtonsRow';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
  return (
    <View
        style={[styles.root]}
    >
        <div style={styles.slider}>
            <Slider1 
                testText = {"this is a test"} 
                frontSource={'../assets/assets/images/map_after.png'} 
                backSource={'../assets/assets/images/map_before.png'} 
            />
        </div>
        <MapButtonsRow rowTitle='Below image' />
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
        overflowY: 'scroll',
        scrollbarWidth: 'none', /* only works on Firefox */
    }
})