import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBackWithTitle from '../../components/Reusable/PressBackWithTitle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../../helper/baseUrl';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const YourOrders = () => {
  const navigation = useNavigation();

  const [datas, setDatas] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userId = await AsyncStorage.getItem('ActiveUserId');

    try {
      axios
        .post(
          BACKEND_URL + 'orders',
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

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <PressBackWithTitle title="Your Orders" />
      <View style={{marginTop: 40}}></View>

      {datas ? (
        datas.map(hit => {
          return (
            <TouchableOpacity
              key={hit.id}
              onPress={() =>
                navigation.navigate('OrderStatus', {orderId: hit.id})
              }>
              <View
                style={{
                  borderColor: '#D9D9D9',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  padding: 15,
                  marginHorizontal: 20,
                  borderRadius: 20,
                  marginTop: 35,
                  marginBottom: 15,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Image
                      style={{height: 100, width: 110, borderRadius: 20}}
                      source={{
                        uri: SIMPLE_URL + hit.items[0].meal_image,
                      }}
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        textAlign: 'center',
                      }}>
                      {hit.order_for_name}
                    </Text>
                    <Text style={{marginLeft: 10}}>{hit.address}</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        color: 'green',
                        textAlign: 'right',
                        fontSize: 20,
                      }}>
                      ₹ {hit.payment}
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
                  <Text style={{color: '#625F5F', fontSize: 15}}>ITEMS</Text>

                  {hit.items.map(hitu => {
                    return (
                      <Text key={hitu.id} style={{color: 'black'}}>
                        {hitu.quantity} X {hitu.meal_name}
                      </Text>
                    );
                  })}

                  <Text style={{color: '#625F5F', fontSize: 15, marginTop: 10}}>
                    ORDERED ON
                  </Text>
                  <Text style={{color: 'black'}}>{hit.updated_at}</Text>
                </View>

                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    padding: 1,
                    marginHorizontal: 5,
                    marginTop: 15,
                  }}></View>

                <View style={{marginHorizontal: 5, marginTop: 10}}>
                  <Text
                    style={{
                      color: '#4AABE7',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Delivered
                    <Ionicons name="checkmark-done" size={18} color="#4AABE7" />
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <SkeletonPlaceholder>
          <View
            style={{
              borderColor: '#D9D9D9',
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 15,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 35,
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <View style={{height: 100, width: 110, borderRadius: 20}} />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 15,
                  }}
                />
                <View style={{marginLeft: 10, width: 100, height: 10}} />
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 10,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View style={{width: 50, height: 10, marginTop: 10}} />

              <View
                style={{
                  color: '#625F5F',
                  fontSize: 15,
                  marginTop: 10,
                  width: 100,
                  height: 10,
                }}
              />
              <View style={{color: 'black', width: 100, height: 10}} />
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View
                style={{
                  color: '#4AABE7',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderColor: '#D9D9D9',
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 15,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 35,
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <View style={{height: 100, width: 110, borderRadius: 20}} />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 15,
                  }}
                />
                <View style={{marginLeft: 10, width: 100, height: 10}} />
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 10,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View style={{width: 50, height: 10, marginTop: 10}} />

              <View
                style={{
                  color: '#625F5F',
                  fontSize: 15,
                  marginTop: 10,
                  width: 100,
                  height: 10,
                }}
              />
              <View style={{color: 'black', width: 100, height: 10}} />
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View
                style={{
                  color: '#4AABE7',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderColor: '#D9D9D9',
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 15,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 35,
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <View style={{height: 100, width: 110, borderRadius: 20}} />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 15,
                  }}
                />
                <View style={{marginLeft: 10, width: 100, height: 10}} />
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 10,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View style={{width: 50, height: 10, marginTop: 10}} />

              <View
                style={{
                  color: '#625F5F',
                  fontSize: 15,
                  marginTop: 10,
                  width: 100,
                  height: 10,
                }}
              />
              <View style={{color: 'black', width: 100, height: 10}} />
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View
                style={{
                  color: '#4AABE7',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderColor: '#D9D9D9',
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 15,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 35,
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <View style={{height: 100, width: 110, borderRadius: 20}} />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 15,
                  }}
                />
                <View style={{marginLeft: 10, width: 100, height: 10}} />
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 10,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View style={{width: 50, height: 10, marginTop: 10}} />

              <View
                style={{
                  color: '#625F5F',
                  fontSize: 15,
                  marginTop: 10,
                  width: 100,
                  height: 10,
                }}
              />
              <View style={{color: 'black', width: 100, height: 10}} />
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View
                style={{
                  color: '#4AABE7',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderColor: '#D9D9D9',
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 15,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 35,
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <View style={{height: 100, width: 110, borderRadius: 20}} />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 15,
                  }}
                />
                <View style={{marginLeft: 10, width: 100, height: 10}} />
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: 100,
                    height: 10,
                    marginTop: 10,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View style={{width: 50, height: 10, marginTop: 10}} />

              <View
                style={{
                  color: '#625F5F',
                  fontSize: 15,
                  marginTop: 10,
                  width: 100,
                  height: 10,
                }}
              />
              <View style={{color: 'black', width: 100, height: 10}} />
            </View>

            <View
              style={{
                backgroundColor: '#D9D9D9',
                padding: 1,
                marginHorizontal: 5,
                marginTop: 15,
              }}
            />

            <View style={{marginHorizontal: 5, marginTop: 10}}>
              <View
                style={{
                  color: '#4AABE7',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      )}
    </ScrollView>
  );
};

export default YourOrders;
