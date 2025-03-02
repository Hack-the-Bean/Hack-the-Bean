import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MapButtonsColumn from './MapButtons/MapButtonsColumn';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
    const [frontSource, setFrontSource] = useState('original_satellite.png');
    const [backSource, setBackSource] = useState('lake_original.png');

    const [backList, setBackList] = useState(['lake_original','lidar_buildingmap','building_map_original','lidar_log']);
    const [nameList, setNameList] = useState(['lake_original','lidar_buildingmap','building_map_original','lidar_log']);

    const [textUse, setTextUse] = useState(['By filtering out the lowest scoring pixels (in this case 12%) we can remove large craters and lake bottoms. We can generally assume that this will not take out any buildings, as by and large they stand above their surroundings. Notably this would not work if the large lake on the left were on a hill. The lake mask can be used to eliminate noise in other examples.'])
    
    const [topText, setTopText] = useState('original satellite image');
    const [bottomText, setBottomText] = useState('lake masking');

    const getTupleFromFrontSource = (frontImage : string) => {
        switch (frontImage) {
            case 'original_satellite.png':
                return ['lake_original','lidar_buildingmap','building_map_original','lidar_log'];
            case 'front_lidar.png':
                return ['lidar_buildingmap','lidar_ground','lidar_convolution','lidar_log'];
            case 'front_nrg.png':
                return ['original_satellite','nrg_diff'];
            default:
                return ['lake_original','lidar_buildingmap','building_map_original','lidar_log'];
        }
    };

    const getFrontFromBackSource = (backImage : string) => {
        switch (backImage) {
            case 'lake_original.png':
                return 'original_satellite.png';
            case 'lidar_buildingmap.png':
                return 'front_lidar.png';
            case 'building_map_original.png':
                return 'front_lidar.png';
            case 'lidar_log.png':
                return 'front_lidar.png';
            case 'lidar_basic_threshold.png':
                return 'front_lidar.png';
            case 'lidar_ground.png':
                return 'front_lidar.png';
            case 'lidar_greenery.png':
                return 'front_lidar.png';
            case 'lidar_convolution.png':
                return 'front_lidar.png';
            case 'nrg_diff.png':
                return 'front_nrg.png';
            case 'original_satellite.png':
                return 'front_nrg.png';
            default:
                return 'original_satellite.png';
        }
    }

    const getNamesFromFrontSource = (frontImage : string) => {
        switch (frontImage) {
            case 'original_satellite.png':
                return ['lake_original','building_original','building_map_original','lidar_log'];
            case 'front_lidar.png':
                return ['lidar_buildingmap','lidar_ground','lidar_convolution','lidar_log'];
            case 'front_nrg.png':
                return ['original_satellite','nrg_diff'];
            default:
                return ['lake_original','building_original','building_map_original','lidar_log'];
        }
    };

    const getTextFromFrontSource = (backImage : string, frontImage : string) => {
        console.log(backImage);
        switch (backImage) {
            case 'lidar_log.png':
                if (frontImage === 'original_satellite.png') {
                    return ['The LIDAR sensor data contains depth information which we can use to determine the shape of the terrain. We use a logarithmically scaled version of the logarithm to better distinguish buildings from the ground they stand on. Note that it becomes easy to distinguish individual buildings and other elevated structures from the local ground compared to just looking at the map.'];
                } else {
                    return ['The LIDAR sensor data contains depth information which we can use to determine the shape of the terrain. By default the lidar values of the land are largely overpowered, so a logarithmic scale is used to remove any negative values and allow more distinction between the land values.']
                }
            case 'building_original.png':
                return ['A simple approach to try to detect houses from the LIDAR depth data is to only show lidar points above some threshold, and removing any large (over 1500 connected pixels) connected components like the shallow portions of the lake. This approach performs adequately on the upper left corner, accurately marking many houses, but as it uses a fixed elevation threshold it misses most of the buildings on the lower elevations. It also massively overestimates the number of houses at 31337, as each connected group of points is counted as a house and there are lots of artifacts.']
            case 'building_map_original.png':
                return ['By using the floodfill data we can remove all non building-like objects to get only those objects which seem to be higher relative to their local terrain. This does a good job at isolating individual buildings, but also includes large portions of the motorway. We can remove these large connected components to get the image. \n\n By using this data we can remove large connected components to get only those building-like connected components which are below some size threshold, in this case a total 1000 pixels. This gives a good estimate for the number of buildings: 6326.'];
            case 'lidar_convolution.png':
                return ['We use the NRG data to remove the grassy areas from the map and then use a convolution to compare the LIDAR depth of each point relative to its neighbours. Each point is then given a colour depending on how different it is to its left neighbours, where orange is significantly different, red is fairly different, and black is not at all different. This gives a simple kind of edge detection showing structures relative to their environments. This approach struggles with large buildings, where a uniform roof will be coloured black. Ultimately this approach did not give any concrete number for the quantity of predicted houses.'];
            case 'lake_original.png':
                return ['By filtering out the lowest scoring pixels (in this case 12%) we can remove large craters and lake bottoms. We can generally assume that this will not take out any buildings, as by and large they stand above their surroundings. Notably this would not work if the large lake on the left were on a hill. The lake mask can be used to eliminate noise in other examples.'];
            case 'lidar_buildingmap.png':
                return ['By using the floodfill data we can remove all non building-like objects to get only those objects which seem to be higher relative to their local terrain. This does a good job at isolating individual buildings, but also includes large portions of the motorway. We can remove these large connected components to get the image. \n\n By using this data we can remove large connected components to get only those building-like connected components which are below some size threshold, in this case a total 1000 pixels. This gives a good estimate for the number of buildings: 6326.'];
            case 'lidar_ground.png':
                return ['By investigating where large areas consist of the same approximate depth relative to the rest of the LIDAR data we can create a mask which removes all non building-like objects. This is called floodfilling, and is quite similar to using a fill tool in an image editor.'];
            case 'original_satellite.png':
                return ['An NRG image is one constructed of Near infra-red, Red, and Green. On this image the red sections represent Infrared, and contain all grassy and organic areas. You can observe here how roads, areas of water, and buildings maintain their dark blue-ish and gray colours, where fields and gardens are very brightly coloured.']
            case 'nrg_diff.png':
                return['An NRG image is one constructed of Near infra-red, Red, and Green. On this image the red sections represent Infrared, and contain all grassy and organic areas. From the colour data we can construct a new map contrasting the infra-red and the red colour bands to create a heat map where the darkest spots are those which are grassy. When trying to detect buildings we can automatically rule out these sections as they are grassy.'];
            default:
                return ['EMPTY'];
        }
    };

    const getTopTextFromFrontSource = (frontImage : string) => {
        switch (frontImage) {
            case 'original_satellite.png':
                return 'original satellite image';
            case 'front_lidar.png':
                return 'lidar image';
            case 'front_nrg.png':
                return 'nrg image';
            default:
                return 'original satellite image';
        }
    };

    const getBottomTextFromBackSource = (backImage : string) => {
        switch (backImage) {
            case 'lake_original.png':
                return 'lake masking';
            case 'lidar_buildingmap.png':
                return 'lidar building map';
            case 'building_map_original.png':
                return 'building map';
            case 'lidar_log.png':
                return 'lidar log';
            case 'lidar_basic_threshold.png':
                return 'lidar basic threshold';
            case 'lidar_ground.png':
                return 'lidar ground';
            case 'lidar_greenery.png':
                return 'lidar greenery';
            case 'lidar_convolution.png':
                return 'lidar convolution';
            case 'nrg_diff.png':
                return 'nrg difference';
            case 'original_satellite.png':
                return 'original satellite image';
            default:
                return 'lake masking';
        }
    };

    const handleFrontChange = (newImage: string, back: string) => {
        setFrontSource(newImage);
        setBackList(getTupleFromFrontSource(newImage));
        setNameList(getNamesFromFrontSource(newImage));
        setTopText(getTopTextFromFrontSource(newImage));
        setBackSource(getNamesFromFrontSource(newImage)[0] + '.png');
        setBottomText(getBottomTextFromBackSource(getNamesFromFrontSource(newImage)[0] + '.png'));
        setTextUse(getTextFromFrontSource(getNamesFromFrontSource(newImage)[0] + '.png', newImage));

    };

    const handleBackChange = (newImage: string) => {
        setBackSource(newImage);
        setBottomText(getBottomTextFromBackSource(newImage));
        setTextUse(getTextFromFrontSource(newImage, getFrontFromBackSource(newImage)));

    };

    return (
        <ScrollView>
            <Text style={styles.title}>
                            Comparing the {topText} with...
            </Text>
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
                <Text style={styles.title}>
                    {bottomText}
                </Text>
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
      marginTop: 20,
    },
    title: {
        color: "#fff",
        fontSize: 40,
        textAlign: "center",
        marginBottom: 0,
        marginTop: 20,
      },
})