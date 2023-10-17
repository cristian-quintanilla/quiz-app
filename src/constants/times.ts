interface Times {
  hours: { key: number; text: number; value: number; }[];
  minutes: { key: number; text: number; value: number; }[];
  seconds: { key: number; text: number; value: number; }[];
}

const COUNTDOWN_TIME: Times = {
  hours: [],
  minutes: [],
  seconds: [],
};

for (let i = 0; i < 12; i++) {
  COUNTDOWN_TIME.hours.push({ key: i, text: i, value: i }); // i * 60 * 60
}

for (let i = 0; i < 60; i++) {
  COUNTDOWN_TIME.minutes.push({ key: i, text: i, value: i }); // i * 60
}

for (let i = 0; i < 60; i++) {
  COUNTDOWN_TIME.seconds.push({ key: i, text: i, value: i });
}

export { COUNTDOWN_TIME };
