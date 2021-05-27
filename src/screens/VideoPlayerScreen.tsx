import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Video, {OnLoadData} from 'react-native-video';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import LinearGradient from 'react-native-linear-gradient';

import {useAnimationVideo} from '../hooks/useAnimationVideo';
import {ProgressBar} from '../components/ProgressBar';
import {VideoControls} from '../components/VideoControls';

import CloseIcon from '../assets/icons/times-circle-solid.svg';
import {ContentVideoEnd} from '../components/ContentVideoEnd';

interface Props
  extends StackScreenProps<RootStackParams, 'VideoPlayerScreen'> {}

export const VideoPlayerScreen = ({
  route: {
    params: {name, uriVideo},
  },
  navigation,
}: Props) => {
  const videoRef = React.createRef<Video>();
  const {fadeAnimation, fadeInAnimation, fadeOutAnimation} =
    useAnimationVideo();
  const [currentTime, setCurrentTime] = useState(0.0);
  const [isVideoOnEnd, setIsVideoOnEnd] = useState(false);
  const [paused, setPaused] = useState(false);
  const duration = useRef(0.0);

  const handleSetVideoOnEnd = () => {
    if (isVideoOnEnd) {
      setIsVideoOnEnd(false);
    }
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  const onLoad = (meta: OnLoadData) => {
    duration.current = meta.duration;
  };

  const onEnd = () => {
    videoRef.current?.seek(0);
    handlePaused();
    setIsVideoOnEnd(true);
  };

  const onSeek = (time: number) => {
    const newTime = Math.ceil(time);
    videoRef.current?.seek(newTime);
    setCurrentTime(newTime);
    handleSetVideoOnEnd();
  };

  const handlePaused = () => {
    handleSetVideoOnEnd();
    if (paused) {
      fadeOutAnimation();
    } else {
      fadeInAnimation();
    }
    setPaused(!paused);
  };

  const backwardOrForward = (time: number) => {
    fadeInAnimation();
    if (!paused) {
      fadeOutAnimation();
    }
    onSeek(currentTime + time);
  };

  const showControls = () => {
    fadeInAnimation();
    if (!paused) {
      setTimeout(() => {
        fadeOutAnimation();
      }, 1000);
    }
  };

  useEffect(() => {
    fadeOutAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={showControls}>
        <View style={styles.container}>
          <Video
            source={uriVideo}
            style={styles.backgroundVideo}
            ref={videoRef}
            paused={paused}
            onProgress={onProgress}
            resizeMode="cover"
            onLoad={onLoad}
            onEnd={onEnd}
          />

          <Animated.View
            style={[styles.animatedView, {opacity: fadeAnimation}]}>
            <LinearGradient
              colors={['#00000000', '#000000bf']}
              style={styles.videoInfo}>
              <Text style={styles.videoTitle}>{name}</Text>

              <VideoControls
                paused={paused}
                isVideoOnEnd={isVideoOnEnd}
                backwardOrForward={backwardOrForward}
                handlePaused={handlePaused}
              />

              <ProgressBar
                currentTime={currentTime}
                duration={duration.current}
                onSeekCallback={onSeek}
              />
            </LinearGradient>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.closeIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
      {isVideoOnEnd && (
        <View style={styles.contentVideoEnd}>
          <ContentVideoEnd />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  animatedView: {
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  contentVideoEnd: {
    position: 'absolute',
    alignSelf: 'center',
  },
  backgroundVideo: {
    backgroundColor: 'black',
    bottom: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  videoInfo: {
    alignSelf: 'center',
    bottom: 0,
    paddingTop: 50,
    position: 'absolute',
    paddingBottom: 50,
    width: '100%',
  },
  videoTitle: {
    color: 'white',
    fontSize: 35,
    fontWeight: '200',
    marginLeft: 20,
    marginBottom: 10,
  },
});
