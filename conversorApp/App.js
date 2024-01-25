import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home'
import Dolar from './src/pages/dolar'
import Euro from './src/pages/euro'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Dolar'component={Dolar}/>
      <Stack.Screen name='Euro' component={Euro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
