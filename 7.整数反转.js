/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.49%)
 * Likes:    1073
 * Dislikes: 0
 * Total Accepted:    131.3K
 * Total Submissions: 404.2K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  // 方法 1
  // const isOverflow = n => {
  //   if (n < Math.pow(-1, 31) || n > Math.pow(2, 31) - 1) {
  //     return 0
  //   } else {
  //     return n
  //   }
  // }
  // if (isOverflow(x) === 0) return 0
  // let str = `${x}`
  // if (str[0] === '-') {
  //   let n = str
  //     .slice(1)
  //     .split('')
  //     .reverse()
  //     .join('')
  //   return isOverflow(+`-${n}`)
  // } else {
  //   let n = str
  //     .split('')
  //     .reverse()
  //     .join('')
  //   return isOverflow(+n)
  // }

  // 方法 2
  // const isOverflow = n => n < Math.pow(-2, 31) || n > Math.pow(2, 31) - 1
  // if (isOverflow(x)) return 0
  // // Math.sing() 取正负 值为 1 或 -1
  // const sign = Math.sign(x)
  // // Math.abs() 取绝对值
  // x = Math.abs(x)
  //   .toString()
  //   .split('')
  //   .reverse()
  // const ret = sign * +x.join('')
  // return isOverflow(ret) ? 0 : ret

  // 方法 3
  const isOverflow = n => n < Math.pow(-2, 31) || n > Math.pow(2, 31) - 1
  if (isOverflow(x)) return 0
  const sign = Math.sign(x)
  let y = Math.abs(x)
  let n = 0
  while (y != 0) {
    let pop = y % 10
    y = parseInt(y / 10)
    n = n * 10 + pop
  }
  const ret = sign * n
  return isOverflow(ret) ? 0 : ret
}
