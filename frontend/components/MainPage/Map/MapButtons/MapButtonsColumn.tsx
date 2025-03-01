import { 
    StyleSheet,
    Text,
    View
} from "react-native";
import MapChangeButton from "./MapChangeButton";

type MapButtonsColumnProps = {
    columnTitle: string;
};

export default function MapButtonsColumn( props: MapButtonsColumnProps ) {
    return (
        <View style={styles.column}>
            <Text style={styles.text}>{props.columnTitle}</Text>
            <MapChangeButton
                imageSource={require("@/assets/images/icon.png")}
                onPress={() => console.log("zoom in")}
            />
            <MapChangeButton
                imageSource={require("@/assets/images/icon.png")}
                onPress={() => console.log("zoom out")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: 0,
        right: 0,
        margin: 10,
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
});