// Demo Project - Main Entry Point

console.log('欢迎使用 Demo Project!');
console.log('这是一个展示 GitHub 工具使用的示例项目。');

// 简单的功能函数
function greet(name) {
  return `你好, ${name}! 感谢你查看这个演示项目。`;
}

// 导出函数供其他模块使用
module.exports = { greet };

// 如果直接运行此文件，则执行以下代码
if (require.main === module) {
  console.log(greet('开发者'));
}