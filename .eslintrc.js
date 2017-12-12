// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'generator-star-spacing': 0, // 生成器函数*的前后空格
    'no-debugger': process.env.NODE_ENV === 'production'|| process.env.NODE_ENV === 'test'? 2 : 0, // 生产测试环境禁止使用debugger
    // 'semi': [2, "always"], // 语句强制分号结尾
    'eqeqeq': 1, // 比较的时候使用严格等于
    "no-nested-ternary": 0, // 不允许使用嵌套的三目运算符
    "eol-last": 0,
    'space-before-function-paren':0, // 函数前是否有空格,
    'no-console': 1, // 禁用no-console,
    'no-alert':1, // 禁用alert
    'quotes': 0, // 单括号
    'no-empty': 'warn', // 禁止出现空语句块
    'default-case': 'warn', // 要求 switch 语句中有 default 分支
    'dot-notation': ['warn', { 'allowKeywords': false }], // 对象属性访问，要求使用点号，而不是方括号
    'no-case-declarations': 'warn', // 禁止在 case 或 default 子句中出现词法声明
    'no-magic-numbers': ['warn', { 'ignoreArrayIndexes': true }], // 禁止使用魔术数字
    'consistent-this': ['warn', '_this'], // 指定'_this'作为 this 的别名
    'max-depth': ['warn', 5], // 强制块语句的最大可嵌套深度不超过5层
    'max-statements': ['warn', 30], // 限制函数块中的语句的最大数量不超过20句
    'max-nested-callbacks': ['warn', 3], // 强制回调函数最大嵌套深度不超过三层
    'no-lonely-if': 'warn',  // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-var': 'warn', // 要求使用 let 或 const 而不是 var
    'object-shorthand': ['warn', 'consistent-as-needed'], // 保证对象字面量的简写或非简写一致性，但尽可能的全部使用简写
    'prefer-const': 'warn' // 如果一个变量不会被重新赋值，最好使用const进行声明
  }
}
