import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './src/navigation/stackNavigation';
import { NativeBaseProvider, Box } from "native-base";

const App = () => {
  return (
    <NavigationContainer>
    
      <StackNavigation />
   
    </NavigationContainer>
  );
};

export default App;
