import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import React, { useRef } from "react";
import Map from "@/components/MainPage/Map/Map";
import HeroCarousel from "@/components/MainPage/HeroCarousel/Carousel";

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={[styles.root]}
    >
      <HeroCarousel />
      <Map />
      <Text style={styles.text}>
        We were able to create a 3D pointcloud of the area from the LIDAR depth as a third dimension.
      </Text>
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
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});