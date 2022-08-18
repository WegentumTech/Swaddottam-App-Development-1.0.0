import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../../helper/baseUrl';
import axios from 'axios';
const RecommendedProducts = ({tag, mealId}) => {
  const navigation = useNavigation();
  const [data, setData] = useState('');

  console.log(tag);

  useEffect(() => {
    try {
      axios
        .post(
          BACKEND_URL + 'get_tags_product',
          {
            tag_id: tag,
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          console.log('below is data');
          console.log(acc.data);
          setData(acc.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{marginTop: 5}}>
      {data ? (
        data[0].map(hit => {
          if (hit.id == mealId) {
            return;
          } else {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SingleMealScreen', {MealId: hit.id})
                }>
                <View style={{margin: 5}}>
                  <Image
                    source={{uri: SIMPLE_URL + hit.meal_image}}
                    style={styles.ScrollableProducts}
                  />
                  <Text
                    style={{
                      color: '#707070',
                      top: -15,
                      backgroundColor: '#FFFFFF',
                      width: 100,
                      textAlign: 'center',
                      left: 90,
                      borderRadius: 10,
                      padding: 2,
                      top: -12,
                      borderColor: '#707070',
                      borderWidth: 0.5,
                      borderStyle: 'solid',
                    }}>
                    Free Delivery
                  </Text>

                  <View style={{marginTop: 5}}>
                    <Text style={styles.randomScrollableProductHead}>
                      {hit.meal_name}
                    </Text>
                    {/* <Text style={styles.randomScrollableProductPara}>
                    Category Name
                  </Text> */}

                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: 30,
                      }}>
                      <Text
                        style={{
                          color: '#333333',
                          marginTop: 9,
                          textDecorationLine: 'line-through',
                        }}>
                        ₹ {hit.old_price}
                      </Text>
                      <Text
                        style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                        ₹ {hit.meal_price}
                      </Text>
                      <Text style={{marginLeft: 60}}>
                        <Ionicons name="heart" size={30} color="#C8C8C8" />
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
        })
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default RecommendedProducts;
