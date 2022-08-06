import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';
import styles from '../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
import {BACKEND_URL} from '../../helper/baseUrl';
import {SIMPLE_URL} from '../../helper/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Wishlist = () => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState('');

  useEffect(() => {
    const UserDetails = async () => {
      const userIds = await AsyncStorage.getItem('ActiveUserId');

      try {
        axios
          .post(
            BACKEND_URL + 'getwhishlist',
            {
              userid: userIds,
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

    UserDetails();
  }, []);

  return (
    <ScrollView>
      <PressBackWithTitle title="Wishlist" />

      {datas ? (
        datas.length === 0 ? (
          <>
            <View style={{alignSelf: 'center', marginTop: 150}}>
              <Image
                style={{width: 240, height: 200}}
                source={require('../../assets/nothing_found.webp')}
              />
            </View>
          </>
        ) : (
          datas.map(hit => {
            return (
              <TouchableOpacity
                key={hit.id}
                onPress={() =>
                  navigation.navigate('SingleMealScreen', {MealId: hit.meal_id})
                }>
                <View style={{marginTop: 20}}>
                  <View
                    style={{
                      marginHorizontal: 10,
                      borderColor: '#C8C8C8',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      borderRadius: 20,
                      paddingBottom: 30,
                    }}>
                    <Image
                      source={{uri: SIMPLE_URL + hit.meal_image}}
                      style={styles.RecommendProducts}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginHorizontal: 10,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={{color: '#333333', fontSize: 20}}>
                          {hit.meal_name}
                        </Text>
                        <Text style={{color: '#707070'}}>{hit.category}</Text>
                      </View>

                      <View style={{flex: 1}}>
                        <Text
                          style={{
                            color: 'white',
                            backgroundColor: '#509807',
                            textAlign: 'right',
                            marginLeft: 120,
                            padding: 2,
                            borderRadius: 10,
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}>
                          {hit.rating}{' '}
                          <Ionicons name="star" size={18} color="white" />
                        </Text>
                        <Text
                          style={{
                            textAlign: 'right',
                            marginTop: 10,
                            color: '#9E9E9E',
                          }}>
                          {' '}
                          <Fontisto
                            name="fire"
                            size={20}
                            color="#D8553A"
                          />{' '}
                          {hit.calorie} cal
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: 10,
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          color: '#333333',
                          marginTop: 8,
                          textDecorationLine: 'line-through',
                        }}>
                        ₹{hit.old_price}
                      </Text>
                      <Text
                        style={{
                          color: '#F88922',
                          fontSize: 20,
                          marginLeft: 6,
                          fontWeight: 'bold',
                        }}>
                        ₹{hit.meal_price}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        )
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default Wishlist;
