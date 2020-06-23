/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) return nums.length; 

    let left = 0;

    let right = 1;
        while (right < nums.length) {
      if (nums[left] === nums[right]) {
        right++
      } else {
        nums[left + 1] = nums[right];
        right++;
        left++;
      }
    }
    return left + 1;
  };
  
// @lc code=end

