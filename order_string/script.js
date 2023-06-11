function order(words) {
  if (words == "") {
    return words;
  }
  let sorted = words
    .match(/\w+/g)
    .map((word) => {
      return { word: word, number: word.match(/\d+/g)[0] };
    })
    .sort((a, b) => {
      return a.number - b.number;
    })
    .map((item) => {
      return item.word;
    })
    .join(" ");
  return sorted;
}
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
