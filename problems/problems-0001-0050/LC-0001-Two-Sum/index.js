// Given an array of integers, return an array of indices of the two numbers that add up to the target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
  const len = nums.length
  for (i = 0; i < len; i++) {
    let summand1 = nums[i]
    let summand2Index = nums.indexOf(target - summand1, i + 1) // Use fromIndex parameter. Can always look forward since we are moving from left to right. Simply add 1.
    if (summand2Index != -1) {
      return [i, summand2Index]
    }
  }
}

module.exports = twoSum

// Notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// https://math.stackexchange.com/questions/161072/what-is-the-thing-inside-a-sum-called