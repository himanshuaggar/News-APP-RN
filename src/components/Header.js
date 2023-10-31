import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import { Entypo,FontAwesome } from '@expo/vector-icons';

const Header = ({navigation}) => {
  return (
    <View className="flex-row px-4 py-3 justify-between items-center bg-blue-200 shadow-lg pt-8 ">
      <Text className="font-Bold text-blue-500 text-2xl px-2 py-2">
        Live NEWS
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});