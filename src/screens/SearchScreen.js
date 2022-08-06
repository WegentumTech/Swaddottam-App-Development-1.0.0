import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import styles from '../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Tags from '../components/Home/Tags';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AuthKey} from '../helper/baseUrl';
import {AuthPassword} from '../helper/baseUrl';
import {BACKEND_URL} from '../helper/baseUrl';
import {SIMPLE_URL} from '../helper/baseUrl';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Dimensions} from 'react-native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const [datas, setDatas] = useState('');

  if (inputText.inputText === '') {
    // console.log('this is empty');
    setInputText({inputText: 'none'});
  }

  const searchItNow = () => {
    try {
      axios
        .post(
          BACKEND_URL + 'search',
          {
            search: inputText.inputText,
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

  return (
    <View style={{paddingTop: 20, backgroundColor: '#F26227', height: '100%'}}>
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <Text style={{flex: 1}}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="leftcircle"
            style={{borderRadius: 10}}
            size={35}
            color="white"
          />
        </Text>
        <Text style={styles.searchHeading}>Search Your Food</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <TextInput
          onChangeText={text => {
            setInputText({inputText: text});
          }}
          autoFocus
          style={styles.inputBox}
          placeholder="   Search foods which you like"
          placeholderTextColor="#4F4F4F"
          onTextInput={searchItNow}
        />
      </View>

      <Tags />

      <ScrollView
        style={{
          backgroundColor: 'white',
          height: '100%',
          marginTop: 20,
          borderTopLeftRadius: 10, // change this if radius needed
          borderTopRightRadius: 10, // change this if radius needed
        }}>
        {datas ? (
          datas.length === 0 ? (
            <View style={{alignSelf: 'center', marginTop: 150}}>
              <Image
                style={{width: 240, height: 200}}
                source={require('../assets/nothing_found.webp')}

              />
              <Text style={{color:"black",textAlign:"center",fontSize:20}}>Nothing Found</Text>
            </View>
          ) : (
            datas.map(hit => {
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
                          <Text style={{color: '#707070'}}>
                            {hit.category_name}
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
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
