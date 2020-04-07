function split(array) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const halfIndex = Math.round(array.length / 2) - 1;
  const firstHalf = [];
  const secondHalf = [];
  for (let i = 0; i < array.length; ++i) {
    if (i <= halfIndex) {
      firstHalf.push(array[i]);
    } else {
      secondHalf.push(array[i]);
    }
  }
  return [firstHalf, secondHalf];
}

// [1, 3, 7], [2, 4, 6]
// [1], [2]
// resultArray = [1]
function merge(array1, array2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let resultArray = [];

  while (resultArray.length < array1.length + array2.length) {
    if (!array1[pointer1] && array2[pointer2]) {
      console.log("first if");
      resultArray.push(array2[pointer2]);
      pointer2++;
      continue;
    }
    if (!array2[pointer2] && array1[pointer1]) {
      console.log("second if");
      resultArray.push(array1[pointer1]);
      pointer1++;
      continue;
    }
    if (array1[pointer1] <= array2[pointer2] && pointer1 < array1.length) {
      resultArray.push(array1[pointer1]);
      pointer1++;
      continue;
    }
    if (array2[pointer2] <= array1[pointer1] && pointer2 < array2.length) {
      resultArray.push(array2[pointer2]);
      if (pointer2 < array2.length - 1) {
        pointer2++;
        continue;
      }
    }
  }
  return resultArray;
}

function mergeSort(array) {
  /* your code here */
}
