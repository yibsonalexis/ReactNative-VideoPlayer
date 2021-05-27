import {IVideo} from '../interfaces/IVideo';

export const dataVideos: IVideo[] = [
  {
    id: '1ocean',
    name: 'Beautiful ocean',
    image: require('../assets/images/oceans.png'),
    uriVideo: require('../assets/videos/oceans.mp4'),
  },
  {
    id: '1',
    name: 'Buchado Town',
    image: require('../assets/images/image1.png'),
    uriVideo: require('../assets/videos/video1.mp4'),
  },
  {
    id: '2',
    name: 'Sunset',
    image: require('../assets/images/image2.png'),
    uriVideo: require('../assets/videos/video2.mp4'),
  },
  {
    id: '3',
    name: 'My video 3',
    image: require('../assets/images/image3.png'),
    uriVideo: require('../assets/videos/video3.mp4'),
  },
];
