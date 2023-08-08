function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let midVal = Math.floor((left + right) / 2);
  
      if (arr[midVal] === num) {
        return midVal;
      }
  
      if (arr[left] <= arr[midVal]) {
        // Left half is sorted
        if (num >= arr[left] && num < arr[midVal]) {
          right = midVal - 1;
        } else {
          left = midVal + 1;
        }
      } else {
        // Right half is sorted
        if (num > arr[midVal] && num <= arr[right]) {
          left = midVal + 1;
        } else {
          right = midVal - 1;
        }
      }
    }
  
    return -1;
}

module.exports = findRotatedIndex

