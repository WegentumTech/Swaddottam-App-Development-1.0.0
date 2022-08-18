import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

const PressBackWithTitle = props => {
  const navigation = useNavigation();

  return (
    <>
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#F79320',
            padding: 10,
            borderRadius: 10,
            top: 20,
            left: 16,
          }}>
          <View>
            <AntDesign name="arrowleft" size={18} color="black" />
          </View>
        </TouchableOpacity>
        
      
      <Text
        style={{alignSelf:"center",textAlign:"center", fontSize: 20, color: 'black',flex:1,top:20}}>
        {props.title}
      </Text>
      </View>
    </>
  );
};

export default PressBackWithTitle;
