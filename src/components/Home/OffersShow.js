import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../styles/globalStyles';

const OffersShow = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 15}}>
      <Text style={styles.mainHeader}>Happy Deals</Text>
      <Text style={styles.mainPara}>
        Relish a big binge with our biggest offers.
      </Text>

      <View>
        <Image
          style={styles.homeBannerOne}
          source={require('../../assets/banner1.png')}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image
            style={styles.homeBannerTwo}
            source={require('../../assets/banner2.png')}
          />
        </View>
        <View style={{flex: 1}}>
          <Image
            style={styles.homeBannerThree}
            source={require('../../assets/banner3.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default OffersShow;
