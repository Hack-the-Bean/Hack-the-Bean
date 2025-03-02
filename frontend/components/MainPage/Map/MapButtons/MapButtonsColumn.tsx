import { 
    StyleSheet,
    Text,
    View
} from "react-native";
import MapChangeButton from "./MapChangeButton";
import icon from "@/assets/images/icon.png";
import original_satellite from "@/assets/images/original_satellite.png";
import front_lidar from "@/assets/images/front_lidar.png";
import front_nrg from "@/assets/images/front_nrg.png";
import lidar_basic_threshold from "@/assets/images/lidar_basic_threshold.png";
import lidar_ground from "@/assets/images/lidar_ground.png";
import lidar_greenery from "@/assets/images/lidar_greenery.png";
import lidar_convolution from "@/assets/images/lidar_convolution.png";
import nrg_diff from "@/assets/images/nrg_diff.png";
import lake_original from "@/assets/images/lake_original.png";
import building_map_original from "@/assets/images/building_map_original.png";
import lidar_log from "@/assets/images/lidar_log.png";
import lidar_buildingmap from "@/assets/images/lidar_buildingmap.png";


const imageMap: { [key: string]: any } = {
    "icon": icon,
    "original_satellite": original_satellite,
    "front_lidar": front_lidar,
    "front_nrg": front_nrg,
    "lidar_basic_threshold": lidar_basic_threshold,
    "lidar_ground": lidar_ground,
    "lidar_greenery": lidar_greenery,
    "lidar_convolution": lidar_convolution,
    "nrg_diff": nrg_diff,
    "lake_original": lake_original,
    "building_map_original": building_map_original,
    "lidar_log": lidar_log,
    "lidar_buildingmap": lidar_buildingmap,
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