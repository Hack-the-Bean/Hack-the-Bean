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
        <Text style={styles.titleBigger}>--- Hack the Bean ---</Text>
            <Text style={styles.title}>No Clear Landing:</Text>
            <Text style={styles.text}>
              We have implemented multiple varieties of <TouchableOpacity onPress={() => navigation.navigate('upscale')}><Text style={styles.under}>upscaling</Text></TouchableOpacity>, finding that utilising the LIDAR data allows for a substantial improvement over the original image and other more basic methods of upscaling.{'\n'}
            </Text><Text style={styles.text}>
              {'\n'}We applied <TouchableOpacity onPress={() => navigation.navigate('category')}><Text style={styles.under}>various computer vision techniques</Text></TouchableOpacity> to determine that there are approximately 6300 houses in the area that would need demolished for the development of the Heathrow expansion. Other visualisations are presented to elaborate upon steps taken towards this goal, even if they were not always in the right direction.{'\n'}
            </Text><Text style={styles.text}>
            {'\n'}We also created a number of visualisations which while not particularly illuminating, could make for striking album covers.
            </Text>
            <Text style={styles.title}>Results:</Text>
            <Text style={styles.textSmaller}>
            London is a hub for world trade in no small part due to Heathrow airport. In spite of restrictions on when flights can take off, it still manages to be the fourth busiest airport in the world by traffic. The influx of people to London — even if they stop over only for a night — brings large amounts of people and money to the cities economy, and by extension the UK. Many people including the likes of Virgin CEO Richard Branson, have argued that the UK's status as a financial power in the modern age is dependant on Heathrow.{"\n"}

            {"\n"} Heathrow however has a fundamental issue. Where once its two large runways made it one of the largest airports in the world, airports across the world increasingly catch up to or exceed it. The likes of Branson argue therefore that should an extension to Heathrow not be built, we risk losing traffic and money funnelling into London — with traffic for international flights crossing Europe diverting to the likes of Charles de Gaulle in France. The efficacy of this argument can be questioned, in no small part because many of those who advocate for it serve to earn large portions of the money that it brings in.{"\n"}

            {"\n"}Those who oppose the expansion do so for a handful of reasons. The most widespread is that Heathrow as it stands is already one of the largest contributers to greenhouse gasses and therefore Climate Change in the UK. An expansion for another runway would increase this further. More to the point of our analysis, to build the new runway would require a substantial number of homes to be destroyed; by our estimates over 6300. The residents of the area are not best pleased with the notion that their houses would be demolished; the economy be damned — why should they be forced from our homes.{"\n"}

            {"\n"}There are evidently good reasons to support either decision, and moreover reasons that any decision is going to annoy a vast number of people. It is our opinion that the expansion to Heathrow, while it has merits, is not worth the additional negative contributions to the climate and the displacement of that many families. Any economic argument can be contrasted by an equally valid climate argument, and at the end of the day we feel that the climate is such a major concern in the modern day in no small part due to continual concessions to the economy. Ultimately then the smallest argument is the decider. The 6300 families living in the area have protested the expansion severely — perhaps then we should respect their wishes.
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
  titleBigger: {
    fontFamily: "Courier New",
    textAlign: "center",
    fontSize: 120,
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
  textSmaller: {
    fontFamily: "Courier New",
    textAlign: "center",
    fontSize: 25,
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