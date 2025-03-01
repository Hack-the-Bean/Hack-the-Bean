import React from 'react';
import {Image, ScrollView, Text} from 'react-native';
import {Asset} from 'expo-asset';

// const purpleURI = Asset.fromModule(require('../assets/images/purple.png')).uri;
// const backURI = Asset.fromModule(require('../assets/images/back.png')).uri;

const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Header</Text>
  </ScrollView>
);

export default App;