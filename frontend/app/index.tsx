import { Text, View, Image } from "react-native";
import ImageTest from "@/components/ImageTest";
import ImageSlider from "@/components/ImageSlider";
import { CompareSlider } from 'react-native-compare-slider';

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
      <ImageTest />
      <CompareSlider
            before={<Image source={require("@/assets/images/back.png")} resizeMode="cover" />}
            after={<Image source={require("@/assets/images/purple.png")} resizeMode="cover" />}
            containerStyle={{ width: 300, height: 300 }}
            />
    </View>
  );
}
