import { Text, View } from "react-native";
import ImageTest from "@/components/ImageTest";
import ImageSlider from "@/components/ImageSlider";

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
      <ImageSlider 
        leftImageSrc="@/assets/images/purple.png"
        rightImageSrc="@/assets/images/back.png"
      />
    </View>
  );
}
