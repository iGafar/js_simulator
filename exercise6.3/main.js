function reverseAndNegate(arr) {
  console.log(arr.reverse().map(x => -x));
}

reverseAndNegate([1, 2, 3, -4])