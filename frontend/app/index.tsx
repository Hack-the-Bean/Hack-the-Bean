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
      <Slider1 testText = {"this is a test"} frontSource={'../assets/images/purple.png'} backSource={'../assets/images/back.png'}/>
    </View>
  );
}
