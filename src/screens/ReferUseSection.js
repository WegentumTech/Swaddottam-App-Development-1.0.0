import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../helper/baseUrl';
const ReferUseSection = () => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const navigation = useNavigation();

  const handleReferEarn = () => {
    try {
      axios
        .post(
          BACKEND_URL + 'refferal',
          {
            ref_code: enteredNumber.enteredNumber,
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          console.log(acc.data);
          navigation.replace('Home')
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.backScreen}>
      <View style={{alignSelf: 'center'}}>
        <Image
          style={{width: 300, height: 300}}
          source={require('../assets/coinsp.png')}
        />
      </View>

      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 23, fontWeight: 'bold', color: '#000000'}}>
          Has Any Of Your Friend
        </Text>
        <Text style={{fontSize: 18, alignSelf: 'center', color: '#000000'}}>
          Refered You This App ?
        </Text>
        <Text style={{alignSelf: 'center', marginTop: 20, color: '#7D7D7D'}}>
          Use His/Her Referal Code Here
        </Text>

        <TextInput
          onChangeText={text => {
            setEnteredNumber({enteredNumber: text});
          }}
          maxLength={15}
          placeholder="000000000000000"
          placeholderTextColor="#7D7D7D"
          style={{
            borderColor: '#7D7D7D',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 25,
            backgroundColor: 'white',
            elevation: 5,
            textAlign: 'center',
            fontSize: 20,
          }}
        />

        <View style={{marginTop: 30, marginHorizontal: 30}}>
          <TouchableOpacity onPress={handleReferEarn}>
            <Text style={styles.button1}>Proceed</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Text style={{textAlign: 'center', marginTop: 20, color: '#000000'}}>
            Skip {'>'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReferUseSection;
