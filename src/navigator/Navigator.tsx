import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {VideoPlayerScreen} from '../screens/VideoPlayerScreen';
import {IVideo} from '../interfaces/IVideo';

export type RootStackParams = {
  HomeScreen: undefined;
  VideoPlayerScreen: IVideo;
};
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
    </Stack.Navigator>
  );
};
