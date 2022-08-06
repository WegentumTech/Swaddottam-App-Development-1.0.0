import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBack from '../../components/Reusable/PressBack';
import styles from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecommendedProducts from '../../components/Home/RecommendedProducts';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
import {BACKEND_URL} from '../../helper/baseUrl';
import {SIMPLE_URL} from '../../helper/baseUrl';
const CategotyItems = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [datas, setDatas] = useState('');

  // console.log(route.params.categoryId);

  useEffect(() => {
    try {
      axios
        .post(
          BACKEND_URL + 'get_category_product',
          {
            meal_category: route.params.categoryId,
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
  }, []);

  return (
    <ScrollView>
      <View>
        <View>
          <Image
            style={styles.categoryItemImage}
            source={{
              uri: 'https://ychef.files.bbci.co.uk/976x549/p06skw9l.jpg',
            }}
          />
          <View style={{marginLeft: 10, position: 'absolute'}}>
            <AntDesign
              onPress={() => navigation.goBack()}
              style={styles.PressBack}
              name="arrowleft"
              size={20}
              color="white"
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              // left: 120,
              top: -80,
              fontSize: 25,
              elevation: 10,
              // position: 'absolute',
            }}>
            {datas.category}
          </Text>
        </View>

        {/* <RecommendedProducts /> */}

        {datas ? (
          datas[0].length === 0 ? (
            <View style={{alignSelf: 'center', marginVertical: '30%'}}>
              <Image
                style={{width: 210, height: 200}}
                source={require('../../assets/nothing_found.webp')}
              />
            </View>
          ) : (
            datas[0].map(hit => {
              return (
                <TouchableOpacity
                  key={hit.id}
                  onPress={() =>
                    navigation.navigate('SingleMealScreen', {MealId: hit.id})
                  }>
                  <View style={{marginTop: 10, marginBottom: 10}}>
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
                            4.5 <Ionicons name="star" size={18} color="white" />
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
                            145 cal
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          marginHorizontal: 10,
                        }}>
                        <Text
                          style={{
                            color: '#333333',
                            marginTop: 8,
                            textDecorationLine: 'line-through',
                          }}>
                          ₹200
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
      </View>
    </ScrollView>
  );
};

export default CategotyItems;
