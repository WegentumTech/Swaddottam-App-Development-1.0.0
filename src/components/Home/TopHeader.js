import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import GetLocation from 'react-native-get-location';
import axios from 'axios';
const TopHeader = () => {
  const navigation = useNavigation();
  const [Address, setAddress] = useState('Searching Your Address...');
  const [Locality, setLocality] = useState('Your State');

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        console.log(location.latitude);
        console.log(location.longitude);

        axios
          .get(
            `http://api.positionstack.com/v1/reverse?access_key=ef9edc8ea9804f2f6fee92a75c5f815f&query=${location.latitude},${location.longitude}&limit=1`,
          )
          .then(acc => {
            console.log(acc.data);

            console.log(acc.data.data[0].name);
            console.log(acc.data.data[0].locality);

            setAddress(acc.data.data[0].name);
            setLocality(acc.data.data[0].locality);

            console.log('value updated');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(ex => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert(
            'Authorization denied',
            'Your device is not authorized yet.',
          );
        }
      });
  }, []);

  return (
    <View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 10}}>
      <View style={{flex: 1}}>
        <Ionicons name="location" size={35} color="#FCA785" />
      </View>
      <View style={{flex: 8}}>
        <Text style={styles.liveAddressFirst}>
          {Address === undefined ? 'Unable To Find Your Location...' : Address}
        </Text>
        <Text style={styles.liveAddressSecond}>
          {Locality === undefined ? 'unable to find your state...' : Locality}
        </Text>
      </View>
      <View style={{flex: 1.3}}>
        {/* <Text style={{alignSelf: 'flex-end'}}>menu</Text> */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.countryFlagicon}
            source={require('../../assets/menu.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopHeader;
