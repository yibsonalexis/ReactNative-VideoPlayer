import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IVideo} from '../interfaces/IVideo';

import PlayIcon from '../assets/icons/play-circle-solid.svg';
import LinearGradient from 'react-native-linear-gradient';

export const VideoCard = ({image, name}: IVideo) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <LinearGradient
        colors={['#00000000', '#000000bf']}
        style={styles.linearGradient}>
        <Text style={styles.title}>{name}</Text>
      </LinearGradient>
      <PlayIcon width={70} height={70} style={styles.playIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    // margin: 15,
    marginBottom: 30,
    borderRadius: 30,
    width: '100%',
    height: 280,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    borderRadius: 30,
    height: undefined,
    aspectRatio: 1,
  },
  playIcon: {
    position: 'absolute',
    alignSelf: 'center',
    opacity: 0.9,
  },
  linearGradient: {
    alignSelf: 'center',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: 90,
  },
  title: {
    alignSelf: 'center',
    bottom: 15,
    color: 'white',
    fontSize: 25,
    fontWeight: '200',
    position: 'absolute',
  },
});
