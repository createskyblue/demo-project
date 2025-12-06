// 测试工具函数

const { sum, isEven } = require('../features/utils');
const assert = require('assert');

// 测试 sum 函数
try {
  assert.strictEqual(sum(2, 3), 5);
  console.log('sum 函数测试通过');
} catch (error) {
  console.error('sum 函数测试失败:', error.message);
}

// 测试 isEven 函数
try {
  assert.strictEqual(isEven(4), true);
  assert.strictEqual(isEven(5), false);
  console.log('isEven 函数测试通过');
} catch (error) {
  console.error('isEven 函数测试失败:', error.message);
}