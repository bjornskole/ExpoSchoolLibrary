import * as React from 'react';
import { Text, View, FlatList, TabBarIOS } from 'react-native';
/** Navigators */
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ImagePickerScreen from './src/CameraScreens/ImagePickerScreen';
/*Screens*/
import HomeScreen from './src/HomeScreen'
import DatePickerExpo from './src/DatePickers/DatePickerExpo';
import CameraExpo from './src/CameraScreens/CameraExpo';
import ImagePickerExample from './src/CameraScreens/ImagePickerExample';
import CameraMod from './src/CameraScreens/CameraMod';
/** Fonts */
import AppLoading from 'expo-app-loading';
import { useFonts, BalsamiqSans_400Regular } from '@expo-google-fonts/balsamiq-sans';
import {
  SourceSansPro_400Regular_Italic,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    SourceSansPro_400Regular_Italic,
  SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
    <NavigationContainer>
      <Tab.Navigator >
      <Tab.Screen  name="Home" component={HomeScreen} />
      <Tab.Screen  name="DatePicker" component={DatePickerExpo} />
      <Tab.Screen  name="CameraExpo" component={CameraExpo} />
      <Tab.Screen  name="ImagePickerScreen" component={ImagePickerScreen} />
      <Tab.Screen  name="ImagePickerExample" component={ImagePickerExample} />
      <Tab.Screen  name="CameraMod" component={CameraMod} />
      </Tab.Navigator>
    </NavigationContainer>
 );
}
};

