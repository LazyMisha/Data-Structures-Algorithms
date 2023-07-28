// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//  O(n^2)
const twoSum1 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; i++) {
            if (target === nums[i] + nums[j]) {
                return [i, j];
            }
        }
    }

    return false;
}

// O(n)
const twoSum2 = (nums, target) => {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] === undefined) {
            map[nums[i]] = i;
        } else {
            return [i, map[target - nums[i]]];
        }
    }

    return [];
}
