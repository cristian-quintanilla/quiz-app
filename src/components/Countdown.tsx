export const Countdown = () => {
  return (
    <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">
          <span>12</span>
        </span>
        hours
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">
          <span>24</span>
        </span>
        minutes
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">
          <span>60</span>
        </span>
        seconds
      </div>
    </div>
  );
}
