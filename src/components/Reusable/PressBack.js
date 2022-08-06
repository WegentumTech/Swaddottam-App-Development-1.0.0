import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

const PressBack = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginLeft: 10,marginVertical:5}}>
      <AntDesign
        onPress={() => navigation.goBack()}
        style={styles.PressBack}
        name="arrowleft"
        size={20}
        color="white"
      />
    </View>
  );
};

export default PressBack;
