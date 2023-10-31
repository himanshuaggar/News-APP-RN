import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Card = ({item, navigation}) => {
  return (
    <View className="px-4 py-2 mb-4 bg-blue-100 rounded-2xl shadow-xl">
      <Image
        source={{
          uri: item.attributes.newsIcon
            ? item.attributes.newsIcon
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULSPiQKGEcCtCxrkr4t9Ub8U-Jwzv3kXu2RMOzQoihg&s',
        }}
        className="h-52 w-full rounded-md"
        resizeMethod="resize"
      />
      <View className="px-2 my-2 bg-white p-4 rounded-lg">
        <Text className="text-lg text-gray-700 font-SemiBold font-bold">
        {item.attributes.headline}
        </Text>
        <Text className="text-sm my-2 text-black">{item.attributes.hashtags}</Text>
        <View className="flex-row justify-between items-center  my-2">
          <Text className="text-xs  text-gray-700 ">{item.attributes.newsSource}</Text>
          <Text className="text-xs text-gray-700 ">
          {item.attributes.publishedAt}
          </Text>
        </View>
        <TouchableOpacity
          className="bg-blue-300 px-4 py-1.5 mt-2 w-32 justify-center items-center rounded-md flex-row space-x-2"
          onPress={() =>
            navigation.navigate('NewsViewer', {
              url: item.url,
            })
          }>
          <Text className="text-black text-xs font-Medium">Read More</Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="absolute top-4 right-4 bg-blue-300 px-4 rounded-md">
        <Text className="text-xs text-black py-1">{item.attributes.newsSource}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});