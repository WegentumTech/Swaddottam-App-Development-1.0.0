import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BACKEND_URL} from '../../helper/baseUrl';
import {SIMPLE_URL} from '../../helper/baseUrl';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RecommendedProducts = () => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState('');

  useEffect(() => {
    try {
      axios
        .post(
          BACKEND_URL + 'products',
          {},
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
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
    <View style={{marginBottom: 50}}>
      <View style={{marginHorizontal: 13, flexDirection: 'row'}}>
        <View style={{flex: 10}}>
          <Text style={styles.mainHeader}>Recommended Meals</Text>
          <Text style={styles.mainPara}>meals recommended for you</Text>
        </View>
      </View>
      {datas ? (
        datas.map(hit => {
          return (
            <TouchableOpacity
              key={hit.id}
              onPress={() =>
                navigation.navigate('SingleMealScreen', {MealId: hit.id})
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
                        <Fontisto name="fire" size={20} color="#D8553A" />{' '}
                        {hit.calorie}
                        cal
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
      ) : (
        <SkeletonPlaceholder>
    
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
              <View style={styles.RecommendProducts} />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1}}>
                  <View style={{width:100,height:10}} />
                  <View style={{width: 100, height: 10,marginTop:10}} />
                </View>

                <View style={{flex: 1}}>
                  <View style={{width: 100, height: 10, marginTop: 10}} />
                  <View
                    style={{
                      textAlign: 'right',
                      marginTop: 10,
                      color: '#9E9E9E',
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    color: '#333333',
                    marginTop: 8,
                    textDecorationLine: 'line-through',
                  }}
                />
                <View
                  style={{
                    color: '#F88922',
                    fontSize: 20,
                    marginLeft: 6,
                    fontWeight: 'bold',
                  }}
                />
              </View>
            </View>
          </View>
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
              <View style={styles.RecommendProducts} />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1}}>
                  <View style={{width:100,height:10}} />
                  <View style={{width: 100, height: 10,marginTop:10}} />
                </View>

                <View style={{flex: 1}}>
                  <View style={{width: 100, height: 10, marginTop: 10}} />
                  <View
                    style={{
                      textAlign: 'right',
                      marginTop: 10,
                      color: '#9E9E9E',
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    color: '#333333',
                    marginTop: 8,
                    textDecorationLine: 'line-through',
                  }}
                />
                <View
                  style={{
                    color: '#F88922',
                    fontSize: 20,
                    marginLeft: 6,
                    fontWeight: 'bold',
                  }}
                />
              </View>
            </View>
          </View>
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
              <View style={styles.RecommendProducts} />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1}}>
                  <View style={{width:100,height:10}} />
                  <View style={{width: 100, height: 10,marginTop:10}} />
                </View>

                <View style={{flex: 1}}>
                  <View style={{width: 100, height: 10, marginTop: 10}} />
                  <View
                    style={{
                      textAlign: 'right',
                      marginTop: 10,
                      color: '#9E9E9E',
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    color: '#333333',
                    marginTop: 8,
                    textDecorationLine: 'line-through',
                  }}
                />
                <View
                  style={{
                    color: '#F88922',
                    fontSize: 20,
                    marginLeft: 6,
                    fontWeight: 'bold',
                  }}
                />
              </View>
            </View>
          </View>
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
              <View style={styles.RecommendProducts} />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1}}>
                  <View style={{width:100,height:10}} />
                  <View style={{width: 100, height: 10,marginTop:10}} />
                </View>

                <View style={{flex: 1}}>
                  <View style={{width: 100, height: 10, marginTop: 10}} />
                  <View
                    style={{
                      textAlign: 'right',
                      marginTop: 10,
                      color: '#9E9E9E',
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    color: '#333333',
                    marginTop: 8,
                    textDecorationLine: 'line-through',
                  }}
                />
                <View
                  style={{
                    color: '#F88922',
                    fontSize: 20,
                    marginLeft: 6,
                    fontWeight: 'bold',
                  }}
                />
              </View>
            </View>
          </View>
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
              <View style={styles.RecommendProducts} />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1}}>
                  <View style={{width:100,height:10}} />
                  <View style={{width: 100, height: 10,marginTop:10}} />
                </View>

                <View style={{flex: 1}}>
                  <View style={{width: 100, height: 10, marginTop: 10}} />
                  <View
                    style={{
                      textAlign: 'right',
                      marginTop: 10,
                      color: '#9E9E9E',
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    color: '#333333',
                    marginTop: 8,
                    textDecorationLine: 'line-through',
                  }}
                />
                <View
                  style={{
                    color: '#F88922',
                    fontSize: 20,
                    marginLeft: 6,
                    fontWeight: 'bold',
                  }}
                />
              </View>
            </View>
          </View>
         
        </SkeletonPlaceholder>
      )}
    </View>
  );
};

export default RecommendedProducts;
