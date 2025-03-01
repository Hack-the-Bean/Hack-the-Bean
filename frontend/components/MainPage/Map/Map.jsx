import { Text, StyleSheet, View } from 'react-native';
import MapButtonsColumn from './MapButtons/MapButtonsColumn';

export default function Map() {
  return (
    <View
        style={[styles.root]}
    >
        <Text style={styles.title}>Map</Text>
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