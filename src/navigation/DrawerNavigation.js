import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';


const Drawer = createDrawerNavigator();


function DrawerNavigation() {
    console.log("reached on drawer")
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;