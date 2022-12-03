// ======================== Bubble Sort ============================

function bubbleSort(myArr) {
  for (let j = 1; j < myArr.length; j++) {
    for (let i = 1; i < myArr.length; i++) {
      if (myArr[i] < myArr[i - 1]) {
        [myArr[i - 1], myArr[i]] = [myArr[i], myArr[i - 1]];
      }
    }
  }
  console.log("=== Bubble Sort ===");
  return myArr;
}

// ======================== Selection Sort ============================

function selectionSort(myArr) {
  for (let i = 0; i < myArr.length; i++) {
    let minValue = myArr[i];
    let minValueIndex = i;

    for (let j = i; j < myArr.length; j++) {
      if (myArr[j] < minValue) {
        minValue = myArr[j];
        minValueIndex = j;
      }
    }
    [myArr[i], myArr[minValueIndex]] = [minValue, myArr[i]];
  }
  console.log("=== Selection Sort ===");
  return myArr;
}

// ======================== Insertion Sort ============================

function insertionSort(myArr) {
  for (let i = 1; i < myArr.length; i++) {
    let j = i - 1;
    let key = myArr[j];
    let compared = false;

    if (myArr[i] < myArr[j]) {
      key = myArr[i];
      compared = true;
      while (key < myArr[j] && j >= 0) {
        j--;
      }
      [myArr[i], myArr[j + 1]] = [myArr[j + 1], key];
    }
    if (compared) {
      i--;
    }
  }
  console.log("=== Insertion Sort ===");

  // ======== Another way ===========

  // let j = i - 1;
  // let key = myArr[i];

  // while (key < myArr[j] && j >= 0) {
  //   [myArr[j], myArr[i]] = [key, myArr[j]];
  //   j--;
  //   i--;
  // }
  return myArr;
}

// ======================== Merge Sort ============================

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let divide = Math.ceil(arr.length / 2);
  let left = arr.slice(0, divide);
  let right = arr.slice(divide);

  function merging(left, right) {
    let sortedArray = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArray.push(left.shift());
      } else {
        sortedArray.push(right.shift());
      }
    }
    return sortedArray.concat(left).concat(right);
  }

  return merging(mergeSort(left), mergeSort(right));
}

// ====================== Testing ======================

let arr = [59, 58, 42, 41, 37, 31, 26];

console.log(bubbleSort([].concat(arr)));

console.log(selectionSort([].concat(arr)));

console.log(insertionSort([].concat(arr)));

console.log("=== Merge Sort ===");
console.log(mergeSort([].concat(arr)));
