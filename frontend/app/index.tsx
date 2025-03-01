import { Text, View } from "react-native";
import { Image } from "react-native";
import MapChangeButton from "@/components/MainPage/MapChangeButton";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Edit app/index.tsx to edit this screen.
      </Text>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          width: 200,
          height: 200,
          margin: 20,
        }}
      />
      <MapChangeButton
        onPress={() => console.log("Button pressed")}
        imageSource={require("@/assets/images/icon.png")}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
