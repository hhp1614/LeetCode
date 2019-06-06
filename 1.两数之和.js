/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (46.09%)
 * Likes:    5330
 * Dislikes: 0
 * Total Accepted:    392.4K
 * Total Submissions: 851.6K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // 暴力解决
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) return [i, j]
  //   }
  // }
  // return []

  // 数组反查
  // for (let i = 0; i < nums.length; i++) {
  //   const j = nums.indexOf(target - nums[i])
  //   if (j > -1 && j !== i) {
  //     return [i, j]
  //   }
  // }
  // return []

  // 两遍哈希表
  // const map = {}
  // for (let i = 0; i < nums.length; ++i) {
  //   map[nums[i]] = i
  // }
  // for (let i = 0; i < nums.length; ++i) {
  //   let val = target - nums[i]
  //   if (map[val] !== undefined && map[val] !== i) {
  //     return [i, map[val]]
  //   }
  // }
  // return []

  // 一遍哈希表
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (target - n in map) {
      return [map[target - n], i]
    } else {
      map[n] = i
    }
  }
  return []
}
