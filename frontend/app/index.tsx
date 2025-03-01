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
});
