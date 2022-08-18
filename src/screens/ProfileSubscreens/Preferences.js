import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Preferences = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    GetUserAddress();
  }, []);

  const GetUserAddress = async () => {
    const Val = await AsyncStorage.getItem('UserAddress');

    if (Val !== null) {
      setAddress(Val);
    }
  };

  return (
    <View>
      <PressBackWithTitle title="Preferences" />

      <View
        style={{
          marginHorizontal: 20,
          padding: 20,
          backgroundColor: '#F79320',
          borderRadius: 10,
          marginTop: 50,
        }}>
        <Text style={{fontSize: 17, color: 'black'}}>{address}</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={{fontSize: 15, color: 'black', flex: 1}}>
            +91 6393344720
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Preferences;
