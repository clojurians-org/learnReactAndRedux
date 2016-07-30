# 学习 react 和 redux 最简例子
我非常重视这个项目，它是最简洁的最佳实践的实例，每当我找到规范化的写法或者更加好的用法时，我会抽空补充到这个项目中去

### 主要使用的技术
- [x] bootstrap
- [x] react
- [x] router
- [x] redux
- [x] redux-saga
- [x] fetch
- [x] webpack
- [x] css-module
- [x] ES2015
- [x] ava

### 用于学习以下知识
> * 权限判断(如登录状态)
> * 自制中间件
> * 路由
> * redux
> * ajax
> * 单元测试

### 使用方法
```
npm i
npm start
```

### 运行单元测试
```
npm test
```

### 你也可以使用这个webpack进行项目开发，生产环境使用方法，生成的dist目录就是你要给后端的目录
```
npm run build
```

### 下一步计划
- [x] 对比 redux-thunk 、 redux-promise 、 redux-saga
1. redux-thunk `入门版` 在 flux 上的进步
2. redux-promise `专业版` 优势async/await
3. redux-sage `旗舰版` 使 action 变的更纯粹;增加了 task 概念
- [x] 决定将 redux-thunk 迁移到 redux-saga(https://github.com/yelouafi/redux-saga)
- [x] 迁移完成
- [x] 制作自用 yeoman generator


备选方案 dva(https://github.com/sorrycc/dva) 暂时不进行迁移，感觉封装以后失去了组件思想的优势，个人感觉不该往rails这条路上走，尽管rails很优秀

------
非常欢迎大家提 issues ，特别是功能上面的要求，或者增加一些示例