import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { useCountdown } from '../hooks/useCountdown';
import { setTimeExpired } from '../store/slices';
import { useEffect } from 'react';

const NOW_IN_MS = new Date().getTime();

export const Countdown = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds } = useSelector((state: RootState) => state.timer);
  const [ h, m, s ] = useCountdown(NOW_IN_MS + ((hours * 3600) + (minutes * 60) + seconds) * 1000);

  useEffect(() => {
    if (h + m + s <= 0) {
      dispatch( setTimeExpired(true) );
    }
  }, [h, m, s]);

  if (h + m + s <= 0) {
    return (
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
        <span className="font-medium text-base">Time expired!</span> Look how you did it.
      </div>
    );
  }

  return (
    <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">{ h }</span>
        <span>hours</span>
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">{ m }</span>
        <span>minutes</span>
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className={ `font-mono text-5xl ${ (m < 1 && s <= 30) ? 'text-red-600' : '' }` }>{ s }</span>
        <span className={ `${ (m < 1 && s <= 30) ? 'text-red-600' : '' }` }>seconds</span>
      </div>
    </div>
  );
}
