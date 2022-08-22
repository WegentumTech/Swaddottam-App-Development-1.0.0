import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import TopHeader from '../components/Home/TopHeader';
import SearchBar from '../components/Home/SearchBar';
import OffersShow from '../components/Home/OffersShow';
import ExclusiveOffers from '../components/Home/ExclusiveOffers';
import TopCategories from '../components/Home/TopCategories';
import ScrollableProducts from '../components/Home/ScrollableProducts';
import Starters from '../components/Home/Starters';
import RecommendedProducts from '../components/Home/RecommendedProducts';
import styles from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetworkChecker from 'react-native-network-checker';

const Home = () => {
  useEffect(() => {
    AsyncStorage.setItem('Reached', 'true');
  }, []);

  return (
    <View style={styles.backScreen}>
      <ScrollView>
        <TopHeader />
        <SearchBar />
        <OffersShow />
        <View style={{marginVertical: 10}}></View>
        <View style={styles.divider}></View>
        <TopCategories />
        <View style={styles.divider}></View>
        <ScrollableProducts />
        <View style={{marginVertical: 10}}></View>
        <Starters />
        <View style={{marginVertical: 10}}></View>
        <RecommendedProducts />
        <NetworkChecker
      position="bottom"
      duration={2000} // In milliseconds
      notConnectedMessage="Not connected to Internet!"
      notConnectedTextColor="white"
      notConnectedBackgroundColor="grey"
      connectedMessage="Connected to Internet!"
      connectedTextColor="white"
      connectedBackgroundColor="green"
    >
      <View style={styles.screen}>
        <Text>React Native Network Checker</Text>
      </View>
    </NetworkChecker>
      </ScrollView>
      
    </View>
  );
};

export default Home;
