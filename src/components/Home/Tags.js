import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../styles/globalStyles';

const Tags = () => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Text style={styles.tagStyle}>Rescued</Text>
        <Text style={styles.tagStyle}>Vegan</Text>
        <Text style={styles.tagStyle}>Delivery</Text>
        <Text style={styles.tagStyle}>100 cal</Text>
        <Text style={styles.tagStyle}>Popular</Text>
        <Text style={styles.tagStyle}>Rescued</Text>
        <Text style={styles.tagStyle}>Vegan</Text>
        <Text style={styles.tagStyle}>Delivery</Text>
        <Text style={styles.tagStyle}>100 cal</Text>
        <Text style={styles.tagStyle}>Popular</Text>
      </ScrollView>
    </View>
  );
};

export default Tags;
