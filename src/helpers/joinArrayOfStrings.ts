export const joinArrayofStringsRandom = (arrayOfStrings: string[]): string[] => {
  const newArray = [];

  while (arrayOfStrings.length) {
    const randomIndex = Math.floor(Math.random() * arrayOfStrings.length);
    newArray.push(arrayOfStrings.splice(randomIndex, 1)[0]);
  }

  return newArray;
}
