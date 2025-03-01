import { Text, View } from "react-native";
import {
  Image,
  StyleSheet
} from "react-native";
import MapChangeButton from "@/components/MainPage/MapChangeButton";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function Index() {
  return (
    <View
      style={[styles.root]}
    >
      <Text
        style={[styles.text]}
      >
        Edit app/index.tsx to edit this screen.
      </Text>
      <Image
        source={require("@/assets/images/icon.png")}
        style={[styles.image]}
      />
      <MapChangeButton
        onPress={() => console.log("Button pressed")}
        imageSource={require("@/assets/images/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000",
    flex: 1,
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
