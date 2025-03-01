import { StyleSheet } from "react-native";
import MapChangeButton from "./MapChangeButton";

export default function MapButtonsColumn() {
    return (
        <div style={styles.column}>
        <MapChangeButton
            imageSource={require("@/assets/images/icon.png")}
            onPress={() => console.log("zoom in")}
        />
        <MapChangeButton
            imageSource={require("@/assets/images/icon.png")}
            onPress={() => console.log("zoom out")}
        />
        </div>
    );
};

const styles = StyleSheet.create({
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
        margin: 10,
    },
});