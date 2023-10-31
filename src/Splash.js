import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import logo from '../assets/logo.png'
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-blue-300">
      <Animatable.Text
        className="text-4xl text-white font-SemiBold"
        animation="fadeInDownBig"
        duration={3000}>
         Live NEWS
      </Animatable.Text>
      <Animatable.Image source={logo}  animation="pulse"></Animatable.Image>
      </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});