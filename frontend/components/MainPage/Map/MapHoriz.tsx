import { 
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';
import { useState } from 'react';
import MapButtonsRow from './MapButtons/MapButtonsRow';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
    const [frontSourcer] = useState('original_satellite.png');
    const [backSourcer, setBackSourcer] = useState('small_after.png');

    const [textUse, setTextUse] = useState(['Information about Upscaling\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'])

    const handleBackChange = (newImage: string) => {
        setBackSourcer(newImage);
        // setTextUse(getTextFromFrontSource(newImage));
    };

    // const getTextFromFrontSource = (frontImage : string) => {
    //     console.log(frontImage);
    //     switch (frontImage) {
    //         case 'small_after.png':
    //             return ['Information about 4x upscale\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
    //         case 'lidar_after.png':
    //             return ['Information about 4x upscale with lidar\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
    //         case 'logged_after.png':
    //             return ['Information about 4x upscale with logged lidar\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
    //         case 'BIGlogged_after.png':
    //             return ['Information about 16x upscale with logged lidar\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
    //         default:
    //             return ['Information about 4x upscale\n\nNullam inceptos ligula neque per porta nibh. Dapibus enim potenti tellus curae ex? Odio tortor etiam sollicitudin sed parturient duis lacus. Cubilia primis porta tellus facilisis lacinia ornare. Commodo dictum enim consectetur elementum; ligula et pretium etiam efficitur. Sodales consectetur magnis morbi cubilia in nisl ante donec. Molestie luctus ipsum duis suscipit penatibus dui sociosqu. Rhoncus ante pretium gravida platea vehicula ex class penatibus natoque. Molestie blandit auctor quam dis nisi laoreet venenatis? Taciti penatibus blandit porttitor bibendum ipsum vulputate. Per sollicitudin porttitor accumsan metus himenaeos lectus faucibus laoreet. Pulvinar leo neque hac bibendum phasellus tortor eros mi. Curae adipiscing massa porta dictumst ligula turpis scelerisque. Venenatis proin potenti blandit inceptos sem. Est praesent mi primis molestie; ut ullamcorper pulvinar augue mollis. Consequat porta mauris vulputate facilisi etiam sit. Leo platea ante nam platea urna consectetur nulla elementum. Adipiscing ac varius urna lobortis potenti quisque semper malesuada? Adipiscing ipsum sociosqu ridiculus elit consequat mauris cursus. Venenatis natoque nulla sagittis ligula vel etiam hendrerit primis venenatis. Donec mattis suscipit pretium finibus nec nostra lectus proin leo. Turpis ex tristique semper erat imperdiet mi vel. Suscipit mollis mauris commodo sodales tristique accumsan.'];
    //     }
        
    // };




    return (
        <ScrollView>
            <Text style={styles.title}>
                Upscaling the original satellite image using...
            </Text>
            <View
                style={[styles.root]}
            >
                <div style={styles.slider}>
                    <Slider1 
                        testText = {"this is a test"} 
                        frontSource={'../assets/assets/images/' + frontSourcer} 
                        backSource={'../assets/assets/images/' + backSourcer} 
                    />
                </div>
                <MapButtonsRow 
                    rowTitle='4x upscale' 
                    nameTuple={['4x upscale','4x upscale with lidar','4x upscale with logged lidar','16x upscale with logged lidar']} 
                    imageTuple={['small','lidar','logged','BIGlogged']} 
                    onImagePress={handleBackChange}/>
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
        flexDirection: 'column',
        height: '65vh',
        top: '1vh',
    },
    slider: {
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        color: "#fff",
        fontSize: 40,
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
      },
    text: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      marginBottom: 20,
      marginTop: 200,
    }
})