import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTimer} from '../hooks/useTimer';

const {width} = Dimensions.get('window');
const seconds = 5;

export const ContentVideoEnd = () => {
  const {goBack} = useNavigation();

  const {counter} = useTimer({
    timeInSeconds: seconds,
    callbackOnTime: () => goBack(),
  });

  return (
    <LinearGradient colors={['#00000000', '#00000099', '#00000000']}>
      <View style={styles.container}>
        <Text style={styles.topText}>We'll redirect you to</Text>
        <Text style={styles.centerText}>Video Cards</Text>
        <Text style={styles.bottonText}>In {counter} seconds</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 600,
    width,
  },
  topText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  centerText: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottonText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
