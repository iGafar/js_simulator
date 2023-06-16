function repeatWord(word, count) {
  let i = 0;
  do {
    i++
    console.log(`${word}${i}`);
  } while (i != count);
}

repeatWord('Hi', 10)