import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

export const Countdown = () => {
  const { hours, minutes, seconds } = useSelector((state: RootState) => state.timer);

  return (
    <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">{ hours }</span>
        <span>hours</span>
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">{ minutes }</span>
        <span>minutes</span>
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className={ `font-mono text-5xl ${ (minutes < 1 && seconds < 30) ? 'text-red-600' : '' }` }>
          { seconds }
        </span>
        <span className={ `${ (minutes < 1 && seconds < 30) ? 'text-red-600' : '' }` }>seconds</span>
      </div>
    </div>
  );
}
