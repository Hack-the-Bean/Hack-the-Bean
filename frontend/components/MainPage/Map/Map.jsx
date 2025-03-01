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
        <div>
        <Slider1 
            testText = {"this is a test"} 
            frontSource={'../assets/assets/images/mapFront.png'} 
            backSource={'../assets/assets/images/mapBack.png'}/>
        </div>
        <MapButtonsColumn columnTitle='Right Image' />
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        overflowY: 'scroll',
        height: '50vh',
        // backgroundColor: 'black'
    },
    
})