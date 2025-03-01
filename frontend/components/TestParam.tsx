import React from 'react';
import {Image, ScrollView, Text} from 'react-native';
import {Asset} from 'expo-asset';

const purpleURI = Asset.fromModule(require('../assets/images/purple.png')).uri;
const backURI = Asset.fromModule(require('../assets/images/back.png')).uri;

const purple = {
  uri: purpleURI,
  width: 967,
  height: 349,
};

const back = {
    uri: backURI,
    width: 967,
    height: 349,
  };


const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Header</Text>
    <Image source={purple} />
    <Image source={back} />
  </ScrollView>
);

export default App;