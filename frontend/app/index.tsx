import {
  Text,
  View,
  Image,
  StyleSheet
} from "react-native";
import Map from "@/components/MainPage/Map/Map";

export default function Index() {
  return (
    <View
      style={[styles.root]}
    >
      <Text style={styles.title}>Map</Text>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
}
});
