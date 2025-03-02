import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import HeroCarousel from "@/components/MainPage/HeroCarousel/empty";
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Move carousel before the scroll area */}
      <HeroCarousel />
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <View style={styles.column}>
        <Text style={styles.title}>Hack the Bean:</Text>
            <Text style={styles.title}>No Clear Landing</Text>
            <Text style={styles.text}>
              We have implemented multiple varieties of <TouchableOpacity onPress={() => navigation.navigate('upscale')}><Text style={styles.under}>upscaling</Text></TouchableOpacity>, finding that utilising the LIDAR data allows for a substantial improvement over the original image and other more basic methods of upscaling.{'\n'}
            </Text><Text style={styles.text}>
              {'\n'}We applied <TouchableOpacity onPress={() => navigation.navigate('category')}><Text style={styles.under}>various computer vision techniques</Text></TouchableOpacity> to determine that there are approximately 6300 houses in the area that would need demolished for the development of the Heathrow expansion. Other visualisations are presented to elaborate upon steps taken towards this goal, even if they were not always in the right direction.{'\n'}
            </Text><Text style={styles.text}>
            {'\n'}We also created a number of visualisations which while not particularly illuminating, could make for striking album covers.
            </Text>
            <Text style={styles.title}>Results:</Text>
            <Text style={styles.text}>
              It was fine
            </Text><Text style={styles.text}>
              {'\n'}We applied <TouchableOpacity onPress={() => navigation.navigate('category')}><Text style={styles.under}>various computer vision techniques</Text></TouchableOpacity> to determine that there are approximately 6300 houses in the area that would need demolished for the development of the Heathrow expansion. Other visualisations are presented to elaborate upon steps taken towards this goal, even if they were not always in the right direction.{'\n'}
            </Text><Text style={styles.text}>
            {'\n'}We also created a number of visualisations which while not particularly illuminating, could make for striking album covers.
            </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollArea: {
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  column: {
    flexDirection: "column",
  },
  title: {
    fontFamily: "Courier New",
    textAlign: "center",
    fontSize: 70,
    color: "#fff",
    marginVertical: 20,
  },
  text: {
    fontFamily: "Courier New",
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    marginVertical: 10,
  },
  under: {
    fontFamily: "Courier New",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
    fontSize: 40,
    color: "#fff",
  },
});