import { useEffect, useRef } from 'react';

export const useCountdown = (callback: any, delay: number | null) => {
  const savedCallback = useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let interval = setInterval(() => {
        savedCallback.current();
      }, delay);

      return () => clearInterval(interval);
    }
  }, [delay]);
}
