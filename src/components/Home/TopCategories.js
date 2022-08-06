import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/globalStyles';
import axios from 'axios';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
import {BACKEND_URL} from '../../helper/baseUrl';
import {SIMPLE_URL} from '../../helper/baseUrl';
import {useNavigation} from '@react-navigation/native';

const TopCategories = () => {
  const [datas, setDatas] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    try {
      axios
        .get(
          BACKEND_URL + 'category',

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
    <View>
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.mainHeader}>Top Categories</Text>
        <Text style={styles.mainPara}>these are the latest offers</Text>
      </View>

      <ScrollView
        style={{marginTop: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {datas ? (
          datas.map(hit => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('CategotyItems',{categoryId:hit.id})}
                key={hit.id}>
                <View>
                  <Image
                    style={styles.roundFoodScrollable}
                    source={{uri: SIMPLE_URL + hit.category_image}}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {hit.category.slice(0, 15)}...
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
};

export default TopCategories;
