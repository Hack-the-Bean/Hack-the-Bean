import { 
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';
import { useState } from 'react';
import MapButtonsRow from './MapButtons/MapButtonsRow';
import Slider1 from '@/components/MainPage/Slider/Slider1';

export default function Map() {
    const [frontSourcer] = useState('original_satellite.png');
    const [backSourcer, setBackSourcer] = useState('small_after.png');

    const [textUse, setTextUse] = useState(['EMPTY']);

    const handleBackChange = (newImage: string) => {
        setBackSourcer(newImage);
    };


    const [currentIndex, setCurrentIndex] = useState(0);
    const textArray = [
        "The first step in this process was deciding which model to use to upscale. We knew that we wanted to use OpenCV, however we had multiple models to choose from. After doing some research, the choices were between LapSRN and EDSR. These are relatively small and simple models, which can be somewhat easily implemented and can be used with both .tif and .jpg files. We initially thought that LapSRN would be the best, as it had the highest level of upscaling, x8, while the other had x4, however it turned out that EDSR was better in dealing with satellite data.",
         "After selecting our model, we had to design methods to upscale the jpg. The first method was to simply upscale the jpg. This involved reading the jpg converting it to RGB and using OpenCV’s DNN feature to upscale the image. The result was noticeable, but not as good as we would have hoped for.",
         "The next plan was to incorporate the lidar data to assist the upscaling. We used rasterio to read the lidar.tif, resizing it to match the image, and converting to floats to do element wise multiplication to fuse it with the satellite data. The result from this was a large jump in quality, however it had some issues. There were some artifacting, and the brightness was much too high. To deal with this, we decided to transform the lidar data into the log scale before resizing and additionally doing some processing to remove 0 values and the artifacting. This ended up much better. ",
         "With no artifacting, and a more reasonable colouring. The next step was to experiment with a second layer of upscaling. For this, the original satellite image was upscaled by 4x, and then the lidar data was logged, and resized to match the upscaled satellite data. after they were fused, it was upscaled another 4x. This in total took over 20 minutes and gained results that were not noticeably better than the 4x upscaling with logged lidar data."];

    const handleIndexChange = (step: number) => {
    const newIndex = currentIndex + step;
    if (newIndex >= 0 && newIndex < textArray.length) {
        setCurrentIndex(newIndex);
    }
};



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
                        frontSource={'../assets/assets/images/scaling/' + frontSourcer} 
                        backSource={'../assets/assets/images/scaling/' + backSourcer} 
                    />
                </div>
                <MapButtonsRow 
                    rowTitle='4x upscale' 
                    nameTuple={['4x upscale','4x upscale with lidar','4x upscale with logged lidar','16x upscale with logged lidar']} 
                    imageTuple={['small','lidar','logged','BIGlogged']} 
                    onImagePress={handleBackChange}/>
            </View>
            <Text style={styles.bigText}>
                Our upscaling journey...
            </Text>
            <View style={styles.carouselContainer}>
            <Text>
                <TouchableOpacity onPress={() => handleIndexChange(-1)}><Text style={styles.arrowLeft}>←</Text></TouchableOpacity>
                </Text>   
                <Text style={styles.carouselText}>
                {"("+(currentIndex+1)+"/"+textArray.length+")\n" + textArray[currentIndex]}
                </Text>
                <Text>
                <TouchableOpacity onPress={() => handleIndexChange(1)}><Text style={styles.arrowRight}>→</Text></TouchableOpacity>
                </Text>    
            </View>
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
    carouselContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      carouselText: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center",
        paddingBottom: 40,
      },
      arrowRight: {
        color: "#fff",
        fontSize: 50,
        textAlign: "center",
        paddingBottom: 40,
        paddingRight: 100,
        paddingLeft: 50,
      },
      arrowLeft: {
        color: "#fff",
        fontSize: 50,
        textAlign: "center",
        paddingBottom: 40,
        paddingRight: 50,
        paddingLeft: 100,
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
    },
    bigText: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20,
        marginTop: 200,
      }
})