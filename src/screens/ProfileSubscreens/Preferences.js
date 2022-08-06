import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';

const Preferences = () => {
  return (
    <View>
      <PressBackWithTitle title="Preferences" />

      <View
        style={{
          marginHorizontal: 20,
          padding: 20,
          backgroundColor: '#F79320',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 17, color: 'black'}}>
          Satsang Nagar Colony Aktha, Paharia, Varanasi 221007
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={{fontSize: 15, color: 'black', flex: 1}}>
            +91 6393344720
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 5,
              color: 'black',
              borderRadius: 10,
              flex: 1,
              textAlign: 'center',
              marginLeft: 50,
            }}>
            <Text style={{textAlign: 'center', color: 'black', fontSize: 15}}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Preferences;
