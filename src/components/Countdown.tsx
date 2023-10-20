import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useCountdown } from '../hooks/useCountdown';

import { RootState } from '../store/rootReducer';
import { setTimeExpired } from '../store/slices';

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

export const Countdown = () => {
  const dispatch = useDispatch();
  const [ status, setStatus ] = useState(STATUS.STARTED);
  const { hours, minutes, seconds } = useSelector((state: RootState) => state.timer);
  const [ secondsRemaining, setSecondsRemaining ] = useState<number>((hours * 3600) + (minutes * 60) + seconds);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useCountdown(() => {
    if (secondsRemaining > 0) {
      setSecondsRemaining(secondsRemaining - 1);
    } else {
      // Timer expired
      setStatus(STATUS.STOPPED);
      dispatch( setTimeExpired(true) );
    }
  }, status === STATUS.STARTED ? 1000 : null);

  if (hoursToDisplay + minutesToDisplay + secondsToDisplay <= 0) {
    return (
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
        <span className="font-medium text-base">Time expired!</span> Look how you did it.
      </div>
    );
  }

  return (
    <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">{ hoursToDisplay }</span>
        <span>hours</span>
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">{ minutesToDisplay }</span>
        <span>minutes</span>
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className={ `font-mono text-5xl ${ (secondsRemaining <= 30) ? 'text-red-600' : '' }` }>
          { secondsToDisplay }
        </span>
        <span className={ `${ (secondsRemaining <= 30) ? 'text-red-600' : '' }` }>seconds</span>
      </div>
    </div>
  );
}
