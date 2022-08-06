import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from '../../styles/globalStyles';

const ExclusiveOffers = () => {
  return (
    <View style={{marginTop:30}}>
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.mainHeader}>Exclusively on Swaadottam</Text>
        <Text style={styles.mainPara}>These are the latest offers</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{marginTop: 40, margin: 5}}>
          <View
            style={{
              backgroundColor: '#C80019',
              padding: 15,
              width: 130,
              borderRadius: 20,
              height: 70,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', marginTop: 10}}>
              UP TO 33% OFF
            </Text>
          </View>
          <View>
            <Image
              style={styles.ExclusiveOffersUpper}
              source={require('../../assets/offerPic.png')}
            />
          </View>
        </View>
        <View style={{marginTop: 40, margin: 5}}>
          <View
            style={{
              backgroundColor: '#EE6100',
              padding: 15,
              width: 130,
              borderRadius: 20,
              height: 70,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                marginTop: 10,
                textAlign: 'center',
              }}>
              60% OFF
            </Text>
          </View>
          <Image
            style={styles.ExclusiveOffersUpper}
            source={require('../../assets/offerPic.png')}
          />
        </View>
        <View style={{marginTop: 40, margin: 5}}>
          <View
            style={{
              backgroundColor: '#F1A100',
              padding: 15,
              width: 130,
              borderRadius: 20,
              height: 70,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                marginTop: 10,
                textAlign: 'center',
              }}>
              40% OFF
            </Text>
          </View>
          <Image
            style={styles.ExclusiveOffersUpper}
            source={require('../../assets/offerPic.png')}
          />
        </View>
        <View style={{marginTop: 40, margin: 5}}>
          <View
            style={{
              backgroundColor: '#C80019',
              padding: 15,
              width: 130,
              borderRadius: 20,
              height: 70,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                marginTop: 10,
                textAlign: 'center',
              }}>
              20% OFF
            </Text>
          </View>
          <Image
            style={styles.ExclusiveOffersUpper}
            source={require('../../assets/offerPic.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExclusiveOffers;
