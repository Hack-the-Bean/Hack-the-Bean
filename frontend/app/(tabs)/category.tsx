import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import Map from "@/components/MainPage/Map/Map";
import HeroCarousel from "@/components/MainPage/HeroCarousel/Carousel";

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={[styles.root]}
    >
      <HeroCarousel />
      <Map />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: "1%",
    color: 'white',
  },
  gap: {
    marginBottom: "100%"
  }
});