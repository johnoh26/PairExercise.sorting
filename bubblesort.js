// // const sorting = {};

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      let first = array[j];
      let second = array[j + 1];
      if (first > second) {
        // console.log(
        //   "BEFORE SWAP: array[j] >>>",
        //   array[j],
        //   "array[j+1] >>>",
        //   array[j + 1]
        // );
        array[j] = second;
        array[j + 1] = first;
        // console.log(
        //   "AFTER SWAP: array[j] >>>",
        //   array[j],
        //   "array[j+1] >>>",
        //   array[j + 1]
        // );
      }
    }
  }
  return array;
}
