import { 
    StyleSheet,
    Text,
    View
} from "react-native";
import MapChangeButton from "./MapChangeButton";

type MapButtonsColumnProps = {
    rowTitle: string;
};

export default function MapButtonsColumn( props: MapButtonsColumnProps ) {
    return (
        <View style={styles.column}>
            <Text style={styles.text}>{props.rowTitle}</Text>
            <p style={styles.gap}></p>
            <View style={styles.row}>
                
                <MapChangeButton
                    imageSource={require("@/assets/images/icon.png")}
                    onPress={() => console.log("zoom in")}
                />
                <MapChangeButton
                    imageSource={require("@/assets/images/icon.png")}
                    onPress={() => console.log("zoom out")}
                />
            </View>
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
        top: 30,
        right: 0,
        margin: 10,
        flex: 1,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: 30,
        bottom: 30,
        right: 0,
        margin: 10,
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    gap: {
        marginBottom: 5,
    },
});