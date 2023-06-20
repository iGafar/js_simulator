function calculate(arr) {
  arr = arr.map((x) => (x % 2 ? x - 2 : x + 4));
  arr = arr.filter((x) => x % 13);
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(sum);
}

calculate([15, 2, 3, 5, 6]);
