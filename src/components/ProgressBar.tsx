import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';

interface Props {
  currentTime: number;
  duration: number;
  onSeekCallback: (data: number) => void;
}

const {width} = Dimensions.get('window');

export const ProgressBar = ({duration, currentTime, onSeekCallback}: Props) => {
  const progress = Math.ceil((currentTime / duration) * 100);
  const handleProgressPress = ({
    nativeEvent: {locationX},
  }: GestureResponderEvent) => {
    const newTime = (locationX / width) * duration;
    onSeekCallback(newTime);
  };
  return (
    <TouchableWithoutFeedback onPress={handleProgressPress}>
      <View style={styles.progressBar}>
        <View
          style={[
            StyleSheet.absoluteFill,
            styles.progressBarFill,
            {width: `${progress}%`},
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 50,
    height: 8,
    width: '100%',
    backgroundColor: 'white',
  },
  progressBarFill: {
    backgroundColor: '#00AEF3',
  },
});
