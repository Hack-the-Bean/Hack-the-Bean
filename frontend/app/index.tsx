import { Text, View } from "react-native";
import { Image } from "react-native";
import MapChangeButton from "@/components/MainPage/MapChangeButton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: 200, height: 200 }}
      />
      <MapChangeButton
        onPress={() => console.log("Button pressed")}
        imageSource={require("@/assets/images/icon.png")}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
