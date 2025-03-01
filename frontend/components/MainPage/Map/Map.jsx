import { Text, StyleSheet, View } from 'react-native';
import MapButtonsColumn from './MapButtons/MapButtonsColumn';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
  return (
    <View
        style={[styles.root]}
    >
        <Text style={styles.title}>Map</Text>
        <MapButtonsColumn />
        <Slider1 testText = {"this is a test"} frontSource={'../assets/assets/images/mapFront.png'} backSource={'../assets/assets/images/mapBack.png'}/>
        <MapButtonsColumn />
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    }
})