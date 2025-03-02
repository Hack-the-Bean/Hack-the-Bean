import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MapButtonsColumn from './MapButtons/MapButtonsColumn';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
    const [frontSource, setFrontSource] = useState('original_satellite.png');
    const [backSource, setBackSource] = useState('lake_original.png');

    const [backList, setBackList] = useState(['lake_original','lidar_buildingmap','building_map_original','lidar_log']);
    const [nameList, setNameList] = useState(['lake_original','lidar_buildingmap','building_map_original','lidar_log']);

    const [textUse, setTextUse] = useState(['Information about Satellite Image\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'])
    
    const getTupleFromFrontSource = (frontImage : string) => {
        switch (frontImage) {
            case 'original_satellite.png':
                return ['lake_original','lidar_buildingmap','building_map_original','lidar_log'];
            case 'front_lidar.png':
                return ['lidar_basic_threshold','lidar_ground','lidar_greenery','lidar_convolution'];
            case 'front_nrg.png':
                return ['nrg_diff','original_satellite','front_lidar'];
            default:
                return ['lake_original','lidar_buildingmap','building_map_original','lidar_log'];
        }
    };

    const getNamesFromFrontSource = (frontImage : string) => {
        switch (frontImage) {
            case 'original_satellite.png':
                return ['lake_original','lidar_buildingmap','building_map_original','lidar_log'];
            case 'front_lidar.png':
                return ['lidar_basic_threshold','lidar_ground','lidar_greenery','lidar_convolution'];
            case 'front_nrg.png':
                return ['original_satellite','nrg_diff'];
            default:
                return ['lake_original','lidar_buildingmap','building_map_original','lidar_log'];
        }
    };

    const getTextFromFrontSource = (frontImage : string) => {
        switch (frontImage) {
            case 'original_satellite.png':
                return ['Information about Satellite Image\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
            case 'front_lidar.png':
                return ['Information about Lidar Data\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
            case 'front_nrg.png':
                return ['Information about NRG Data\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
            default:
                return ['Information about Satellite Image\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
        }
    };

    const handleFrontChange = (newImage: string) => {
        setFrontSource(newImage);
        setBackList(getTupleFromFrontSource(newImage));
        setNameList(getNamesFromFrontSource(newImage));
        setTextUse(getTextFromFrontSource(newImage));
    };

    const handleBackChange = (newImage: string) => {
        setBackSource(newImage);
    };

    return (
        <ScrollView>
        <View style={[styles.root]}>
            <MapButtonsColumn 
                columnTitle='Left Image' 
                nameTuple={['original','lidar','nrg']} 
                imageTuple={['original_satellite','front_lidar','front_nrg']} 
                onImagePress={handleFrontChange}
            />
            <div style={styles.slider}>
                <Slider1 
                    testText={"this is a test"} 
                    frontSource={'../assets/assets/images/' + frontSource} 
                    backSource={'../assets/assets/images/' + backSource} 
                />
            </div>
            <MapButtonsColumn 
                columnTitle='Right Image' 
                nameTuple={nameList} 
                imageTuple={backList} 
                onImagePress={handleBackChange}
            />
        </View>
        <Text style={styles.text}>
            {textUse}
        </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '65vh',
        top: '1vh',
    },
    slider: {
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'scroll',
        scrollbarWidth: 'none', /* only works on Firefox */
    },
    text: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      marginBottom: 20,
      marginTop: 50,
    }
})