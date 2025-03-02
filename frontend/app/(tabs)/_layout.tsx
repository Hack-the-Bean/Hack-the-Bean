import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '../../components/HapticTab';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            height: 0, // Adjust the height as needed
          },
          default: {
            height: 0, // Adjust the height as needed
          },
        }),
        tabBarItemStyle: {
          height: 0, // Adjust the height as needed
        },
      }}>
    </Tabs>
  );
}
