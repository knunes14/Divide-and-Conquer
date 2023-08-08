function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      if (arr[left] <= arr[right]) {
        // The array is sorted, no rotation has occurred
        return left;
      }
  
      let midVal = Math.floor((left + right) / 2);
      let prev = (midVal + arr.length - 1) % arr.length; // Previous element
      let next = (midVal + 1) % arr.length; // Next element
  
      if (arr[midVal] <= arr[prev] && arr[midVal] <= arr[next]) {
        // 'mid' is the smallest element, indicating the rotation point
        return mid;
      }
  
      if (arr[midVal] <= arr[right]) {
        // The smallest element is in the left half
        right = midVal - 1;
      } else if (arr[midVal] >= arr[left]) {
        // The smallest element is in the right half
        left = midVal + 1;
      }
    }
  
    return -1; // No rotation found
}

module.exports = findRotationCount