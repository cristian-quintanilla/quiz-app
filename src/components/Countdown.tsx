export const Countdown = () => {
  return (
    <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">12</span>
        <span>hours</span>
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">24</span>
        <span>minutes</span>
      </div>

      <div className="flex flex-col p-2 bg-neutral-300/70 rounded-2xl text-neutral-800">
        <span className="font-mono text-5xl">60</span>
        <span>seconds</span>
      </div>
    </div>
  );
}
