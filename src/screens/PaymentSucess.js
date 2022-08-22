import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../helper/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PaymentSucess = () => {
  const navigation = useNavigation();

  useEffect(() => {
    eraseCart();
  }, []);

  const eraseCart = async () => {
    const userId = await AsyncStorage.getItem('ActiveUserId');

    try {
      axios
        .post(
          BACKEND_URL + 'emptycart',
          {
            userid: userId,
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
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View style={{alignSelf: 'center', marginTop: 200}}>
        <Image
          style={{width: 150, height: 120}}
          source={require('../assets/payment_success.png')}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 15,
          fontSize: 25,
          fontWeight: 'bold',
          color: '#7AC043',
        }}>
        Your Order Is Placed
      </Text>

      <Text style={{textAlign: 'center', color: '#7AC043'}}>
        You Can Track Your Order By Clicking Below
      </Text>

      <TouchableOpacity onPress={() => navigation.replace('YourOrders')}>
        <Text
          style={{
            backgroundColor: '#7AC043',
            marginHorizontal: 80,
            textAlign: 'center',
            color: 'white',
            padding: 10,
            fontSize: 18,
            borderRadius: 10,
            marginTop: 30,
          }}>
          Go To Your Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSucess;
