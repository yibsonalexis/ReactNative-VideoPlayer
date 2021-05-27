import {useEffect, useState} from 'react';

interface Props {
  timeInSeconds: number;
  callbackOnTime: () => void;
}

export const useTimer = ({timeInSeconds, callbackOnTime}: Props) => {
  const [counter, setCounter] = useState(timeInSeconds);

  useEffect(() => {
    let isMounted = true;

    let time = timeInSeconds;
    if (time === 0) {
      return;
    }
    let interval = setInterval(() => {
      if (!isMounted) {
        return false;
      }
      time -= 1;
      setCounter(time);
      if (time === 0) {
        callbackOnTime();
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    counter,
  };
};
