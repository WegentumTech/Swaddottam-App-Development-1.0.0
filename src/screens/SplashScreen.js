import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getVal()
  }, []);

  const getVal = async () => {
    const getPositon = await AsyncStorage.getItem('Reached');
    console.log(getPositon)

    if (getPositon === null) {
      const timer = setTimeout(() => {
        navigation.replace('Login');
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      
      const timer = setTimeout(() => {
        navigation.replace('Home');
      }, 3000);

      return () => clearTimeout(timer);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/SplashLogo.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
