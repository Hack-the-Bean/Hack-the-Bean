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
      <p style={styles.gap}></p>
      <Text style={styles.title}>Map</Text>
      <Map />
      <p style={styles.gap}></p>

      <Text style={styles.text}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet mi donec fringilla facilisis odio conubia pulvinar. Nisl egestas varius himenaeos suspendisse erat odio finibus fringilla. Fringilla vulputate cursus nisl ipsum tortor scelerisque congue curabitur tempus! Magnis primis interdum hac class ridiculus aliquam sodales. Diam nibh tempus quam suscipit, luctus malesuada vulputate. Dui mollis nullam per nostra potenti. Dictumst fermentum senectus, libero lacus malesuada sit. Accumsan dapibus sem ridiculus arcu habitant quisque porttitor suscipit.        Nullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan. Efficitur justo adipiscing porttitor consectetur efficitur feugiat lobortis. Non proin efficitur tortor lobortis etiam mus. Suspendisse diam nam; potenti sodales porttitor vivamus. Volutpat donec nam dapibus inceptos, ac justo malesuada? Varius proin habitant sagittis adipiscing facilisi tristique. Curabitur dignissim turpis facilisis mattis facilisis eget. Sit vivamus sodales leo magna aptent vestibulum gravida. Asit placerat aliquam cursus neque. Felis nascetur nisl nascetur lorem auctor malesuada adipiscing. Lectus luctus nunc netus sagittis class volutpat enim vivamus. Justo habitasse mollis dui; ut fermentum arcu. Taciti bibendum mus, mus tempor nec lacus dapibus. Primis quisque lorem lacinia suscipit curabitur. Odio interdum montes blandit senectus mattis vel. Porttitor ipsum tempus pretium efficitur lectus. Netus dolor accumsan aliquet duis tortor. Conubia eu pellentesque habitasse diam maecenas. Netus class auctor nibh orci, felis parturient. Sodales rhoncus efficitur per sapien iaculis phasellus. Pellentesque posuere placerat tempor laoreet aliquam. Rutrum nisi integer tincidunt lacus urna natoque. Nascetur sociosqu auctor sociosqu; cubilia parturient blandit purus. Eleifend cursus at tempor taciti consectetur. Sollicitudin nec morbi maecenas libero nullam velit sem.
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
    marginBottom: "1%"
  }
});
