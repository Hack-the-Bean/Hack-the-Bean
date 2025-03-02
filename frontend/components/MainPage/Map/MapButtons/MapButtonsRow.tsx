import { 
    StyleSheet,
    Text,
    View
} from "react-native";
import MapChangeButton from "./MapChangeButton";
import icon from "@/assets/images/icon.png";
import original_satellite from "@/assets/images/original_satellite.png";
import small from "@/assets/images/small_after.png";
import lidar from "@/assets/images/lidar_after.png";
import logged from "@/assets/images/logged_after.png";
import BIGlogged from "@/assets/images/BIGlogged_after.png";

const imageMap: { [key: string]: any } = {
    "icon": icon,
    "original_satellite": original_satellite,
    "small": small,
    "lidar": lidar,
    "logged": logged,
    "BIGlogged": BIGlogged,
};

type MapButtonsColumnProps = {
    rowTitle: string;
    nameTuple: string[];
    imageTuple: string[];
    onImagePress: (image: string) => void;
};

export default function MapButtonsColumn( props: MapButtonsColumnProps ) {
    return (
        <View style={styles.column}>
            <Text style={styles.text}>{props.rowTitle}</Text>
            <p style={styles.gap}></p>
            <View style={styles.row}>
                {props.nameTuple.map((name, index) => (
                    <MapChangeButton
                        key={index}
                        imageSource={imageMap[props.imageTuple[index]] || icon}
                        onPress={() => {
                            console.log(`${name} pressed`);
                            props.onImagePress(props.imageTuple[index] + '_after' + '.png');

                        }}
                        label={props.nameTuple[index]}
                    />
                ))}
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