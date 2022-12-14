import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Choose a zip code" component={ZipCodeScreen} />
            <Stack.Screen name="Weather" component={WeatherScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
