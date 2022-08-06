import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/globalStyles';

const Help = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <PressBackWithTitle title="Need Help ?" />
      <View style={{alignSelf: 'center', marginTop: 15}}>
        <Image
          style={{height: 200, width: 200}}
          source={{
            uri: 'https://icon-library.com/images/tech-support-icon-png/tech-support-icon-png-24.jpg',
          }}
        />
      </View>

      <Text
        style={{
          textAlign: 'center',
          marginTop: 50,
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 50,
        }}>
        How Can We help You ?
      </Text>

      <TouchableOpacity style={styles.profileModules}>
        <View style={{marginTop: 1, flex: 0.5}}>
          <Fontisto name="hipchat" size={18} color="black" />
        </View>
        <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
          Message Us
        </Text>
        <View style={{marginTop: 1, flex: 1}}>
          <AntDesign
            name="right"
            size={18}
            color="black"
            style={{alignSelf: 'flex-end'}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileModules}>
        <View style={{marginTop: 1, flex: 0.5}}>
          <MaterialIcons name="support-agent" size={18} color="black" />
        </View>
        <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
          Call Us Now
        </Text>
        <View style={{marginTop: 1, flex: 1}}>
          <AntDesign
            name="right"
            size={18}
            color="black"
            style={{alignSelf: 'flex-end'}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Help;
