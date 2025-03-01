import { Text, View } from "react-native";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ImageTest from "@/components/ImageTest";
import TestParam from "@/components/TestParam";
import Slider1 from "@/components/Slider1";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <TestParam /> */}
      <Slider1 />
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      {/* <ImageTest source="@/assets/images/back.png"/> */}
      {/* <ReactCompareSlider
        style={{ width: '80%', height: 400 }}
        itemOne={<ReactCompareSliderImage src={backImage} srcSet="..." />}
        itemTwo={<ReactCompareSliderImage src={purpleImage} srcSet="..." />}
      /> */}
    </View>
  );
}
