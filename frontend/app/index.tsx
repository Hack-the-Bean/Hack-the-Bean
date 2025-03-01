import { Text, View } from "react-native";
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
      <Slider1 testText = {"this is a test"} frontSource={'../assets/assets/images/front.png'} backSource={'../assets/assets/images/back.png'}/>
    </View>
  );
}
