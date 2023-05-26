function linearSearch(arr, target) {

  // Can you solve this in one line?
   return arr.indexOf(target);

};

function binarySearch(arr, target) {


  // Set integers pointing to the high and low range of possible indices
    let lo = 0,
      hi = arr.length;

    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (arr[mid] === target) {
        return arr[mid];
      } else if (arr[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid;
      }

    } 
   
    return -1
    
 

}

  module.exports = [linearSearch, binarySearch];