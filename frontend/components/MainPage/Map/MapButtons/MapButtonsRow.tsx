import { 
    StyleSheet,
    Text,
    View
} from "react-native";
import { useState } from 'react';

import MapChangeButton from "./MapChangeButton";
import icon from "@/assets/images/empty.png";
import original_satellite from "@/assets/images/scaling/original_satellite.png";
import small from "@/assets/images/scaling/small_after.png";
import lidar from "@/assets/images/scaling/lidar_after.png";
import logged from "@/assets/images/scaling/logged_after.png";
import BIGlogged from "@/assets/images/scaling/BIGlogged_after.png";

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

    const [nameToUse, setNameToUse] = useState(props.rowTitle);
    
    return (
        <View style={styles.column}>
            <Text style={styles.text}>{nameToUse}</Text>
            <View style={styles.row}>
                {props.nameTuple.map((name, index) => (
                    <MapChangeButton
                        key={index}
                        imageSource={imageMap[props.imageTuple[index]] || icon}
                        onPress={() => {
                            setNameToUse(props.nameTuple[index]);
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
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 20,
    },
    gap: {
        marginBottom: 5,
    },
});