import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/globalStyles';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {
  AuthKey,
  AuthPassword,
  BACKEND_URL,
  SIMPLE_URL,
} from '../../helper/baseUrl';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const OffersShow = () => {
  const [data, setData] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    try {
      axios
        .post(
          BACKEND_URL + 'get_offer',
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
    <>
      {data ? (
        <View style={{marginHorizontal: 10, marginTop: 15}}>
          <Text style={styles.mainHeader}>Happy Deals</Text>
          <Text style={styles.mainPara}>
            Relish a big binge with our biggest offers.
          </Text>

          <View>
            <TouchableOpacity
              onPress={
                data[0].offer_type == 1 ? (
                  () =>
                    navigation.navigate('SingleMealScreen', {
                      MealId: data[0].offer_refer,
                    })
                ) : data[0].offer_type == 2 ? (
                  () =>
                    navigation.navigate('CategotyItems', {
                      categoryId: data[0].offer_refer,
                    })
                ) : (
                  <></>
                )
              }>
              <Image
                style={styles.homeBannerOne}
                source={{uri: SIMPLE_URL + data[0].offer_banner}}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={
                  data[1].offer_type == 1 ? (
                    () =>
                      navigation.navigate('SingleMealScreen', {
                        MealId: data[1].offer_refer,
                      })
                  ) : data[1].offer_type == 2 ? (
                    () =>
                      navigation.navigate('CategotyItems', {
                        categoryId: data[1].offer_refer,
                      })
                  ) : (
                    <></>
                  )
                }>
                <Image
                  style={styles.homeBannerTwo}
                  source={{uri: SIMPLE_URL + data[1].offer_banner}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={
                  data[2].offer_type == 1 ? (
                    () =>
                      navigation.navigate('SingleMealScreen', {
                        MealId: data[2].offer_refer,
                      })
                  ) : data[2].offer_type == 2 ? (
                    () =>
                      navigation.navigate('CategotyItems', {
                        categoryId: data[2].offer_refer,
                      })
                  ) : (
                    <></>
                  )
                }>
                <Image
                  style={styles.homeBannerThree}
                  source={{uri: SIMPLE_URL + data[2].offer_banner}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <>
          <SkeletonPlaceholder>
            <View style={{marginHorizontal: 10, marginTop: 15}}>
              <View style={{width: 100, height: 20}} />
              <View style={{width: 250, height: 20, marginTop: 10}} />

              <View>
                <View style={styles.homeBannerOne} />
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <View style={styles.homeBannerTwo} />
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.homeBannerThree} />
                </View>
              </View>
            </View>
          </SkeletonPlaceholder>
        </>
      )}
    </>
  );
};

export default OffersShow;
