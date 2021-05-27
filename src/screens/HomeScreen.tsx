import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import {VideoCard} from '../components/VideoCard';
import {dataVideos} from '../data/dataVideos';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Video Cards</Text>
        <View style={styles.containerVideoCards}>
          {dataVideos.map(video => (
            <TouchableOpacity
              key={video.id}
              onPress={() => navigation.navigate('VideoPlayerScreen', video)}>
              <VideoCard {...video} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerVideoCards: {
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: '100',
    marginTop: 20,
    marginLeft: 20,
  },
});
