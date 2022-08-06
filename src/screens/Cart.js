import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBack from '../components/Reusable/PressBack';
import styles from '../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {AuthKey} from '../helper/baseUrl';
import {AuthPassword} from '../helper/baseUrl';
import {BACKEND_URL} from '../helper/baseUrl';
import {SIMPLE_URL} from '../helper/baseUrl';
const Cart = () => {
  const [item, setItem] = useState(0);
  const navigation = useNavigation();
  const [datas, setDatas] = useState('');
  const [goToRefresh, setGoToRefresh] = useState(false);
  const [finalPrice, setFinalPrice] = useState('');

  useEffect(() => {
    getCartData();
    console.log('refreshed');
  }, []);

  const getCartData = async () => {
    console.log('this is called');
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
          // console.log(acc.data);
          setDatas(acc.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  let latPrice = 0;
  let finalPric = 0;

  const increaseValue = id => {
    console.log(id);
    try {
      axios
        .post(
          BACKEND_URL + 'increment',
          {
            cartid: id,
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
          // setDatas(acc.data);
          getCartData();
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const decreaseValue = id => {
    console.log(id);
    try {
      axios
        .post(
          BACKEND_URL + 'decrement',
          {
            cartid: id,
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
          // setDatas(acc.data);
          getCartData();
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const letsTry = e => {
    console.log(e.target);
  };

  const handleDeleteCartItem = id => {
    console.log(id);
    try {
      axios
        .post(
          BACKEND_URL + 'delcart',
          {
            cartid: id,
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          getCartData();
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PressBack />

      {datas.length === 0 ? (
        <View style={{alignSelf: 'center', marginTop: 100}}>
          <Image
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png',
            }}
            style={{width: 300, height: 250}}
          />

          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Your Cart Is Empty
          </Text>
        </View>
      ) : (
        <ScrollView>
          <View style={{marginLeft: 10, marginTop: 30, flexDirection: 'row'}}>
            <Text style={styles.MainPageHead}>Your Cart</Text>
            <Feather
              name="shopping-bag"
              size={20}
              color="black"
              style={{marginLeft: 20, marginTop: 3}}
            />
            <Text style={{color: 'black', marginLeft: 5, marginTop: 3}}>
              {datas ? datas.length : '0'}
            </Text>
          </View>

          <View>
            {datas ? (
              datas.map(hit => {
                latPrice =
                  Number(hit.meal_price) * Number(hit.Quatity) + latPrice;

                let curPrice = Number(hit.Quatity);

                return (
                  <View key={hit.mealid} style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        marginLeft: 15,
                        marginTop: 20,
                        flexDirection: 'row',
                        flex: 1,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('SingleMealScreen', {
                            MealId: hit.product_id,
                          })
                        }>
                        <Image
                          style={styles.cartProductImage}
                          source={{
                            uri: SIMPLE_URL + hit.meal_image,
                          }}
                        />
                      </TouchableOpacity>

                      <View style={{flex: 1, marginLeft: 5}}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: '#0A191E',
                            fontSize: 18,
                          }}>
                          {hit.meal_name}
                        </Text>
                        <Text style={{color: 'black'}}>
                          {hit.meal_description.slice(0, 40)}...
                        </Text>
                      </View>

                      <View style={{flex: 1.5}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                            borderColor: '#F8774A',
                            borderWidth: 1.5,
                            borderStyle: 'solid',
                            borderRadius: 20,
                            paddingHorizontal: 20,
                          }}>
                          {curPrice === 1 ? (
                            <TouchableOpacity
                              onPress={() => handleDeleteCartItem(hit.cartid)}>
                              <MaterialIcons
                                style={{marginTop: 10}}
                                name="delete"
                                size={18}
                                color="#F8774A"
                              />
                            </TouchableOpacity>
                          ) : (
                            <Text
                              onPress={() => decreaseValue(hit.cartid)}
                              style={{
                                margin: 5,
                                fontSize: 20,
                                color: '#F8774A',
                                fontWeight: 'bold',
                              }}>
                              -
                            </Text>
                          )}

                          <Text
                            style={{
                              margin: 5,
                              fontSize: 20,
                              color: '#F8774A',
                              fontWeight: 'bold',
                            }}>
                            {curPrice}
                          </Text>
                          <Text
                            onPress={() => increaseValue(hit.cartid)}
                            style={{
                              margin: 5,
                              fontSize: 20,
                              color: '#F8774A',
                              fontWeight: 'bold',
                            }}>
                            +
                          </Text>
                        </View>
                      </View>
                      <View style={{flex: 0.5, marginRight: 15}}>
                        <Text
                          style={{
                            alignSelf: 'flex-end',
                            fontSize: 15,
                            color: 'black',
                          }}>
                          ₹{hit.meal_price} X {curPrice}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })
            ) : (
              <></>
            )}
          </View>

          <TouchableOpacity
            style={{marginVertical: 20}}
            onPress={() => navigation.replace('BillingAndPayment',{totalPayment:latPrice})}>
            <Text
              style={{
                backgroundColor: '#F8774A',
                padding: 10,
                color: 'white',
                fontWeight: 'bold',
                borderRadius: 20,
                textAlign: 'center',
                marginHorizontal: 120,
                marginTop: 10,
                fontSize: 20,
              }}>
              Pay ₹{latPrice}
              <AntDesign name="arrowright" size={20} color="white" />
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </>
  );
};

export default Cart;
