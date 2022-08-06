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

const Home = () => {
  useEffect(() => {
    AsyncStorage.setItem('Reached', 'true');
    
  }, []);

  return (
    <ScrollView style={styles.backScreen}>
      <TopHeader />
      <SearchBar />
      <OffersShow />
      <View style={{marginVertical: 10}}></View>
      {/* <ExclusiveOffers /> */}
      <View style={styles.divider}></View>
      <TopCategories />
      <View style={styles.divider}></View>
      {/* <View style={{marginVertical:5}}></View> */}
      <ScrollableProducts />
      <View style={{marginVertical: 10}}></View>
      <Starters />
      <View style={{marginVertical: 10}}></View>
      <RecommendedProducts />
    </ScrollView>
  );
};

export default Home;
