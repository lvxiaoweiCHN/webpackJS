# webpackJS
学习webpack特性
## 调整文本编辑器
### 使用自动编译代码时，可能会在保存文件时遇到一些问题。某些编辑器具有“安全写入”功能，可能会影响重新编译。
要在一些常见的编辑器中禁用此功能，请查看以下列表：
1. Sublime Text 3 - 在用户首选项(user preferences)中添加 atomic_save: "false"。
2. IntelliJ - 在首选项(preferences)中使用搜索，查找到 "safe write" 并且禁用它。
3. Vim - 在设置(settings)中增加 :set backupcopy=yes。
4. WebStorm - 在 Preferences > Appearance & Behavior > System Settings 中取消选中 Use "safe write"。
