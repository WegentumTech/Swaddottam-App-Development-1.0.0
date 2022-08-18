import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import Toast from 'react-native-toast-message';

import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../helper/baseUrl';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrderSummary = () => {
  const route = useRoute();
  const [datas, setDatas] = useState('');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    const userId = await AsyncStorage.getItem('ActiveUserId');

    try {
      axios
        .post(
          BACKEND_URL + 'getcart',
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
          setDatas(acc.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayOnline = async () => {
    setIsLoading(true);
    console.log('clicked');
    const userId = await AsyncStorage.getItem('ActiveUserId');

    try {
      axios
        .post(
          BACKEND_URL + 'cartorderplace',
          {
            userid: userId,
            payment: route.params.totPayment,
            payment_status: 'pending',
            payment_method: 'Cash On Delivery',
            payment_ref: 'none',
            description: route.params.remark,
            order_status: '0',
            order_for_name: route.params.billingName,
            order_for_mobile: route.params.contactNumber,
            address: route.params.address,
            zip: route.params.areaCode,
            order_time: '2022/08/17 13:44:59',
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          // console.log(acc.data);
          navigation.replace('PaymentSucess');
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayOffline = () => {
    const totpay = Number(route.params.totPayment) * 100;
    // console.log(totpay);

    var options = {
      currency: 'INR',
      key: 'rzp_test_XR0hacFiTzwI6O', // Your api key
      amount: totpay,
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        // alert(`Success: ${data.razorpay_payment_id}`);
        const punchOrder = async () => {
          const userId = await AsyncStorage.getItem('ActiveUserId');
          console.log(userId);
          console.log(route.params.totPayment);

          try {
            axios
              .post(
                BACKEND_URL + 'cartorderplace',
                {
                  userid: userId,
                  payment: route.params.totPayment,
                  payment_status: 'Paid',
                  payment_method: 'Online Payment',
                  payment_ref: data.razorpay_payment_id,
                  description: route.params.remark,
                  order_status: '0',
                  order_for_name: route.params.billingName,
                  order_for_mobile: route.params.contactNumber,
                  address: route.params.address,
                  zip: route.params.areaCode,
                  order_time: '2022/08/17 13:44:59',
                },
                {
                  headers: {
                    authkey: AuthKey,
                    secretkey: AuthPassword,
                  },
                },
              )
              .then(acc => {
                // console.log(acc.data);
                navigation.replace('PaymentSucess');
              })
              .catch(err => {
                console.log(err);
              });
          } catch (error) {
            console.log(error);
          }
        };
        punchOrder();
      })
      .catch(error => {
        // handle failure
        // alert(`Error: ${error.code} | ${error.description}`);
        Toast.show({
          type: 'error',
          text1: 'Payment Canceled From You',
          text2: 'this payment was canceled by you. Please try to do it again',
        });
      });
  };

  return (
    <View>
      <PressBackWithTitle title="Order Summary" />

      <View>
        <View
          style={{
            borderColor: '#D9D9D9',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            marginTop: 55,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{height: 100, width: 110, borderRadius: 20}}
                source={{
                  uri: datas
                    ? SIMPLE_URL + datas[0].meal_image
                    : 'https://media.istockphoto.com/photos/homemade-turkey-thanksgiving-dinner-picture-id450705255?k=20&m=450705255&s=612x612&w=0&h=ZAi9vqhzYMCS4rbJRwy41MkVQdGC9AFUHVUE2qBuiY4=',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{marginLeft: 10, color: 'black'}}>
                {route.params.address}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'green', textAlign: 'right', fontSize: 20}}>
                ₹ {route.params.totPayment}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={{color: '#625F5F', fontSize: 15}}>ITEMS</Text>

                {datas ? (
                  datas.map(hit => {
                    return (
                      <Text key={hit.mealid} style={{color: 'black'}}>
                        {hit.meal_name} ({hit.Quatity} X {hit.meal_price} )
                      </Text>
                    );
                  })
                ) : (
                  <></>
                )}
              </View>

              <View style={{flex: 1}}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{color: '#625F5F', fontSize: 15}}>
                    Billing Name
                  </Text>
                  <Text style={{color: 'black'}}>
                    {route.params.billingName}
                  </Text>
                  <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
                    Contact Number
                  </Text>
                  <Text style={{color: 'black'}}>
                    {route.params.contactNumber}
                  </Text>
                </View>
              </View>
            </View>

            <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
              Area Code
            </Text>
            <Text style={{color: 'black'}}>{route.params.areaCode}</Text>
            <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
              Remark
            </Text>
            <Text style={{color: 'black'}}>{route.params.remark}</Text>
          </View>

          <View style={{marginHorizontal: 5, marginTop: 10}}>
            <Text style={{color: '#4AABE7', fontSize: 15, fontWeight: 'bold'}}>
              {route.params.paymentMethod}
              <Ionicons name="checkmark-done" size={18} color="#4AABE7" />
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#D9D9D9',
              padding: 1,
              marginHorizontal: 5,
              marginTop: 15,
            }}></View>

          {route.params.paymentMethod === 'Pay Online' ? (
            <>
              <View style={{alignSelf: 'center', marginTop: 20}}>
                <TouchableOpacity onPress={() => handlePayOffline()}>
                  <Text style={styles.button2}>Pay Online</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              {isLoading ? (
                <View style={{alignSelf: 'center', marginTop: 20}}>
                  <Text style={styles.button2}>
                    <ActivityIndicator color="white" size="small" />
                  </Text>
                </View>
              ) : (
                <>
                  <View style={{alignSelf: 'center', marginTop: 20}}>
                    <TouchableOpacity onPress={handlePayOnline}>
                      <Text style={styles.button2}>Pay Offline</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </>
          )}
        </View>
      </View>
      <View style={{marginTop: 120}}>
        <Toast bottomOffset={5} position="bottom" />
      </View>
    </View>
  );
};

export default OrderSummary;
