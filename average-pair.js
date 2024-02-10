"use strict"
// add whatever parameters you deem necessary & write docstring

/**averagePair: takes a sorted array of numbers and a target average number and
 * returns a boolean stating if a pair exists within that array where the
 *  average is equivalent to the starting average
  */

function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while(left < right){                  //length of nums = n | O(n)
    const avg = (nums[left] + nums[right]) / 2;

    if(avg === targetAvg) return true;

    if(avg < targetAvg) left++;

    if(avg > targetAvg) right--;
  }

  return false;
}


/*

inputs: array (nums), number (targetAvg)
output: boolean

1. set pointer at each end of the array
2. loop through array while left < right
3. check if average of the two variables === targetAvg
4. if avg > targetAvg move right pointer to the left
5. if avg < targetAvg move left pointer to the right
6. if avg === target return true
7. return false if loop ends

// This should take a sorted array of numbers, nums, and a numeric targetAvg.
//Determine if there is a pair of numbers in nums where the average of the pair
// equals the target average. There may be more than one pair that matches the
// average target.

// Constraints: Time complexity: O(n)

// averagePair([1, 2, 3], 2.5);         // true
// averagePair([3, 3, 6, 12, 19], 8);   // false
// averagePair([1, 2, 3], 2);           // true
// averagePair([], 4);                  // false

*/