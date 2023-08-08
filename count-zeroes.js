function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midVal = Math.floor((left + right)/2);

    if (arr[midVal] === 1) {
        left = midVal + 1;
    } else {
        if (midVal === 0 || arr[midVal - 1] === 1) {
            return arr.length - midVal;
        } else {
            right = midVal - 1;
        }
    }
  }
  return 0;
}

module.exports = countZeroes