import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

const PressBackWithTitle = props => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            backgroundColor: '#F79320',
            marginRight: 345,
            padding: 10,
            borderRadius: 10,
            marginLeft: 10,
            marginTop: 15,
          }}>
          <AntDesign name="arrowleft" size={18} color="white" />
        </View>
      </TouchableOpacity>
      <Text
        style={{textAlign: 'center', top: -33, fontSize: 20, color: 'black'}}>
        {props.title}
      </Text>
    </View>
  );
};

export default PressBackWithTitle;
