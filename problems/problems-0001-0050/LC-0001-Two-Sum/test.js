const twoSum = require("./index")

test("twoSum([2, 7, 11, 15], 9) returns [0,1]", () => {
  expect(twoSum([2, 7, 11, 15], 9).sort((a, b) => (a < b ? -1 : 1))).toEqual([0, 1])
})

test("twoSum([3, 2, 4], 6) returns [1,2]", () => {
  expect(twoSum([3, 2, 4], 6).sort((a, b) => (a < b ? -1 : 1))).toEqual([1, 2])
})

test("twoSum([3, 3], 6) returns [0,1]", () => {
  expect(twoSum([3, 3], 6).sort((a, b) => (a < b ? -1 : 1))).toEqual([0, 1])
})

// Sum is 0
test("twoSum([0, 4, 3, 0], 0) returns [0,3]", () => {
  expect(twoSum([0, 4, 3, 0], 0).sort((a, b) => (a < b ? -1 : 1))).toEqual([0, 3])
})

// Negative numbers only
test("twoSum([-1,-2,-3,-4,-5], -8) returns [2,4]", () => {
  expect(twoSum([-1,-2,-3,-4,-5], -8).sort((a, b) => (a < b ? -1 : 1))).toEqual([2, 4])
})

// Mix of positive and negative numbers
test("twoSum([-18, 12, 3, 0], -6) returns [2,4]", () => {
  expect(twoSum([-18, 12, 3, 0], -6).sort((a, b) => (a < b ? -1 : 1))).toEqual([0, 1])
})