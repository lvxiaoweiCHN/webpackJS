# webpackJS
学习webpack特性
## 调整文本编辑器
### 使用自动编译代码时，可能会在保存文件时遇到一些问题。某些编辑器具有“安全写入”功能，可能会影响重新编译。
要在一些常见的编辑器中禁用此功能，请查看以下列表：
1. Sublime Text 3 - 在用户首选项(user preferences)中添加 atomic_save: "false"。
2. IntelliJ - 在首选项(preferences)中使用搜索，查找到 "safe write" 并且禁用它。
3. Vim - 在设置(settings)中增加 :set backupcopy=yes。
4. WebStorm - 在 Preferences > Appearance & Behavior > System Settings 中取消选中 Use "safe write"。

## 热更新的其他包
社区还有许多其他 loader 和示例，可以使 HMR 与各种框架和库(library)平滑地进行交互……

1. React Hot Loader：实时调整 react 组件。
2. Vue Loader：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。
3. Elm Hot Loader：支持用于 Elm 程序语言的 HMR。
4. Redux HMR：无需 loader 或插件！只需对 main store 文件进行简单的修改。
5. Angular HMR：No loader necessary! A simple change to your main NgModule file is all that's required to have full control over the HMR APIs.没有必要使用 loader！只需对主要的 NgModule 文件进行简单的修改，由 HMR API 完全控制。

##n为了学会使用 tree shaking，你必须……
1. 使用 ES2015 模块语法（即 import 和 export）。
2. 在项目 package.json 文件中，添加一个 "sideEffects" 入口。
3. 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。
