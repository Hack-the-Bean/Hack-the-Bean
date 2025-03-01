import { Text, View } from "react-native";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


export default function Index() {
  const backImage = '../assets/images/back.png';
  const purpleImage = '../assets/images/purple.png';
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <ReactCompareSlider
        style={{ width: '80%', height: 400 }}
        itemOne={<ReactCompareSliderImage src={backImage} srcSet="..." />}
        itemTwo={<ReactCompareSliderImage src={purpleImage} srcSet="..." />}
      />
    </View>
  );
}
