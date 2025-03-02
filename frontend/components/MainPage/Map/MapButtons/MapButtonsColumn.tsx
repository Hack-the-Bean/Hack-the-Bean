import { 
    StyleSheet,
    Text,
    View
} from "react-native";
import MapChangeButton from "./MapChangeButton";
import icon from "@/assets/images/icon.png";
import black from "@/assets/images/black.png";
import purple from "@/assets/images/purple.png";
import orange from "@/assets/images/orange.png";
import map_after from "@/assets/images/map_after.png";

const imageMap: { [key: string]: any } = {
    "icon": icon,
    "black": black,
    "purple": purple,
    "orange": orange,
    'map_after': map_after,
};

type MapButtonsColumnProps = {
    columnTitle: string;
    nameTuple: string[];
    imageTuple: string[];
    onImagePress: (image: string) => void;
};

export default function MapButtonsColumn( props: MapButtonsColumnProps ) {
    return (
        <View style={styles.column}>
            <Text style={styles.text}>{props.columnTitle}</Text>
            {props.nameTuple.map((name, index) => (
                <MapChangeButton
                    key={index}
                    imageSource={imageMap[props.imageTuple[index]] || icon}
                    onPress={() => {
                        console.log(`${name} pressed`);
                        props.onImagePress(props.imageTuple[index] + '.png');
                    }}
                    label={props.nameTuple[index]}
                />
            ))}
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
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
});