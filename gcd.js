/**
 * 欧几里得算法求最大共约数
 * 问题描述：计算两个非负整数p和q的最大公约数,若q是0，则最大公约数为p。否则，将p除以q得到余数r,p和q的最大公约数即为q和r的最大公约数
 */
// 01:56 Mar 19, 2022
function gcd(p, q) {
  if (q === 0) return p
  return gcd(q, p % q)
}
