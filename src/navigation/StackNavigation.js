import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../login/LoginScreen';
import RegisterScreen from '../login/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import AjoutScreen from '../screens/AjoutScreen';
import DetailScreen from '../screens/DetailScreen';
import TestScreen from '../screens/testScreen';


const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor:'grey',},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions} >
      <Stack.Screen options={{headerShown: false}} name="Login" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
      <Stack.Screen name="AJOUT" component={AjoutScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  );
};
export default StackNavigation;
