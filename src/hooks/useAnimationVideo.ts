import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimationVideo = () => {
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const fadeInAnimation = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutAnimation = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 1000,
      delay: 3000,
      useNativeDriver: true,
    }).start();
  };

  return {fadeAnimation, fadeInAnimation, fadeOutAnimation};
};
