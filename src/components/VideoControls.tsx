import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import PlayIcon from '../assets/icons/play-circle-solid.svg';
import BackWardIcon from '../assets/icons/backward-solid.svg';
import ForWardIcon from '../assets/icons/forward-solid.svg';
import PauseIcon from '../assets/icons/pause-circle-solid.svg';
import RePlayIcon from '../assets/icons/redo-alt-solid.svg';

const ICON_SIZE = 50;

interface Props {
  isVideoOnEnd: boolean;
  paused: boolean;
  skip?: number;
  backwardOrForward: (time: number) => void;
  handlePaused: () => void;
}

export const VideoControls = ({
  isVideoOnEnd,
  paused,
  backwardOrForward,
  handlePaused,
  skip = 5,
}: Props) => {
  const playPauseOrReplyButton = () => {
    if (isVideoOnEnd) {
      return <RePlayIcon width={ICON_SIZE} height={ICON_SIZE} />;
    } else if (paused) {
      return <PlayIcon width={ICON_SIZE} height={ICON_SIZE} />;
    } else {
      return <PauseIcon width={ICON_SIZE} height={ICON_SIZE} />;
    }
  };
  return (
    <View style={styles.controls}>
      <TouchableOpacity
        style={styles.iconLeft}
        onPress={() => backwardOrForward(-skip)}>
        <BackWardIcon width={ICON_SIZE} height={ICON_SIZE} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePaused} style={styles.iconCenter}>
        {playPauseOrReplyButton()}
      </TouchableOpacity>
      {!isVideoOnEnd && (
        <TouchableOpacity
          onPress={() => backwardOrForward(skip)}
          style={styles.iconRight}>
          <ForWardIcon width={ICON_SIZE} height={ICON_SIZE} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 300,
    height: 50,
  },
  iconLeft: {
    position: 'absolute',
    left: 0,
  },
  iconCenter: {
    position: 'absolute',
  },
  iconRight: {
    position: 'absolute',
    right: 0,
  },
});
