function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1; // Initialize with a default value

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) {
      // Found an exact match, which is the floor itself
      return arr[mid];
    }

    if (arr[mid] < x) {
      // Update the floor and search in the right half
      floor = arr[mid];
      left = mid + 1;
    } else {
      // Search in the left half
      right = mid - 1;
    }
  }

  return floor; // Return the floor found or -1 if not found
}

module.exports = findFloor