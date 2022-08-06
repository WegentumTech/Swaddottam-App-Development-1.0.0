import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/globalStyles';
import axios from 'axios';
import {AuthKey} from '../helper/baseUrl';
import {AuthPassword} from '../helper/baseUrl';
import {BACKEND_URL} from '../helper/baseUrl';
import {SIMPLE_URL} from '../helper/baseUrl';
const Starter = () => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState('');


  useEffect(() => {
    try {
      axios
        .post(
          BACKEND_URL + 'get_category_product',
          {
            meal_category: '8',
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
  }, []);

  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
      <ScrollView>
        <PressBackWithTitle title="Starter" />

        {
          datas ?
          datas[0].map((hit)=>{
            return <TouchableOpacity key={hit.id} onPress={() => navigation.navigate('SingleMealScreen',{MealId:hit.id})}>
             <View
            
            style={{
              flexDirection: 'row',
              borderStyle: 'solid',
              borderColor: '#C8C8C8',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              margin: 5,
            }}>
            <Image
              style={{width: 100, height: 100, flex: 1, marginTop: 5}}
              source={{uri:SIMPLE_URL+hit.meal_image}}
            />
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#333333',
                  marginTop: 10,
                }}>
              {hit.meal_name}
              </Text>
              <Text style={{color: '#C8C8C8'}}>
                {hit.meal_description.slice(0,50)}...
              </Text>
            </View>
            <Text style={{color: '#079D49', fontSize: 20, flex: 1}}>₹{hit.meal_price}</Text>
          </View>

            </TouchableOpacity>
          })

       


          :


          <></>
        }
       
      </ScrollView>
    </View>
  );
};

export default Starter;
