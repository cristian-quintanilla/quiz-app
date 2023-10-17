const NUM_OF_QUESTIONS: any[] = [];

for (let i = 1; i <= 25; i++) {
  NUM_OF_QUESTIONS.push({ key: i, text: i, value: i });
}

export { NUM_OF_QUESTIONS };
