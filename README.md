# react-tem
react 模板

## 公共组件
### IfWrap - src/components/if-wrap
类似于 v-if ,用来包括是否要展示的 dom 结构；

### react-lines-ell
react 的多行省略号: https://www.npmjs.com/package/react-lines-ellipsis
```jsx
import LinesEllipsis from 'react-lines-ellipsis'
 
<LinesEllipsis
  text='long long text'
  maxLine='3'
  ellipsis='...'
  trimRight
  basedOn='letters'
/>
```

## 命名方式
### 文件夹命名
使用小写字母，多个字母使用 `-` 连接，如： home-page;

### 组件命名
字母均大写开头，如： HomePage.jsx

### 其他文件命名
使用小写字母，多个字母使用 `-` 连接，如： home-page.scss;

### 变量命名
驼峰命名法

### css类名命名
使用 BEM 规范：https://segmentfault.com/a/1190000000391762
```html
<div class="box">
  <div class="box__header">header</div>
  <div class="box__body box__body-radius">
    body
    <div class="box__body--left">left</div>
    <div class="box__body--right">right</div>
  </div>
</div>
```

## commit message
### 格式 `<type>: <subject>`
### type
用于说明 commit 的类别，只允许使用下面7个标识。

1. feat：新功能（feature）
2. add: 对过去功能的简单修改
2. fix：修补bug

3. docs：文档（documentation）
4. style： 格式（不影响代码运行的变动）
5. refactor：重构（即不是新增功能，也不是修改bug的代码变动）
6. test：增加测试
7. chore：构建过程或辅助工具的变动
如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。

### subject
subject是 commit 目的的简短描述，不超过50个字符，且结尾不加句号（.）。


## 全局配置
### 项目样式的全局配置
根路径下的 variable.scss 中配置项目的主题色，样式等，这里不要动，开发中，请使用这里的样式。

### antd 样式覆写等
antd 可以支持的样式覆写，在 webpack.config.js 中，修改前，必须要是全局要统一的才可以在这里修改
```js
lessOptions: {
  javascriptEnabled: true,
  modifyVars: {
    // 主题色
    'primary-color': '#1DA57A',
  }
},
```
