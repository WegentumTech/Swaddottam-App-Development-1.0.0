import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
      <View style={styles.searchBarHomeScreenBox}>
        <View style={{marginLeft: 5}}>
          <Fontisto name="search" size={20} color="#4F4F4F" />
        </View>
        <View>
          <Text style={styles.searchInputBox}>
            Search foods{' '}
            <Text style={{fontWeight: 'normal', color: '#999999'}}>
              which you like
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchBar;
