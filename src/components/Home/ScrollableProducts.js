import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/globalStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import axios from 'axios';
import {BACKEND_URL} from '../../helper/baseUrl';
import {SIMPLE_URL} from '../../helper/baseUrl';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
import {useNavigation} from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ScrollableProducts = () => {
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
          console.log(acc.data);
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
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{marginTop: 5}}>
      {datas ? (
        datas.map(hit => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SingleMealScreen', {MealId: hit.id})
              }
              key={hit.id}>
              <View style={{margin: 5}}>
                <Image
                  // source={require('../../assets/mealScrollable.jpg')}
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
                    left: 70,
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
                    {hit.meal_name.lenght >= 17
                      ? hit.meal_name.slice(0, 17)
                      : hit.meal_name}
                    {hit.meal_name.lenght >= 17 ? '...' : <></>}
                  </Text>
                  <Text style={styles.randomScrollableProductPara}>
                    {hit.category_name}
                  </Text>

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
                      ??? {hit.old_price}
                    </Text>
                    <Text
                      style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                      ??? {hit.meal_price}
                    </Text>
                    <Text style={{marginLeft: 40, color: '#5d5f61'}}>
                      <Fontisto name="fire" size={20} color="#D8553A" />{' '}
                      {hit.calorie} cal
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <SkeletonPlaceholder>


          <View style={{flexDirection:"row"}}>

         





          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 5}}>
              <View style={styles.ScrollableProducts} />
           

              <View style={{marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <View style={{width: 100, height: 10}} />
                    <View style={{width: 130, marginTop: 10, height: 10}} />
                  </View>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </View>
          
       

          </View>
        </SkeletonPlaceholder>
      )}
    </ScrollView>
  );
};

export default ScrollableProducts;
