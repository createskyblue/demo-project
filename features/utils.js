// 工具函数集合

/**
 * 计算两个数的和
 * @param {number} a - 第一个数
 * @param {number} b - 第二个数
 * @returns {number} 两数之和
 */
function sum(a, b) {
  return a + b;
}

/**
 * 判断一个数是否为偶数
 * @param {number} num - 要判断的数
 * @returns {boolean} 是否为偶数
 */
function isEven(num) {
  return num % 2 === 0;
}

module.exports = { sum, isEven };