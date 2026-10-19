# DCS Control 简体中文界面

这是 [NIGos/dcs-control](https://github.com/NIGos/dcs-control) 的个人汉化 Fork，中文代码位于 [`zh-CN` 分支](https://github.com/tianshubenshu/dcs-control/tree/zh-CN)。`main` 保留给上游同步。当前基于 0.5.10-preview 的界面。

## 已完成的内容

- 默认显示简体中文；左下角的“语言 / Language”可切换 English，选择会保存在本机。
- 主导航、功能指南、设置向导的主要界面、按钮、工具提示和全部 119 项设置名称与说明。
- 支持中文和英文搜索设置，包括“瞳距”“帧生成”“引擎优化”等。
- 常用动态提示、数值范围提示及更新覆盖汉化的说明。

本次改动仅处理 WebView 界面的显示文字，不修改配置值、枚举、路径、快捷键编码、与本地服务通信的数据或渲染功能。保留英文原文，方便切回排查问题。原生头显 OSD、原始日志、上游发布说明、原生文件选择框，以及部分后端生成的诊断/错误消息尚未汉化。上游新增或改写的句子会回退到英文，后续需补译，不能保证今后自动全部变为中文。

## 如何使用

可以按上游 [构建说明](README.md#build-and-test) 从此分支构建。当前机器未安装 .NET SDK，本次已通过 JavaScript 语法、DOM 行为测试和浏览器静态界面预览，未编译新的 EXE，也未连接真实 DCS/VR 验证。

如果已经下载官方 **0.5.10-preview 便携版**，无需重新编译程序：

1. 退出 DCS Control，先备份便携版的整个 `files/ui` 文件夹。
2. 从本分支的 `src/DcsVr.App/ui` 复制 `index.html`、`app.js`、`i18n.js`、`i18n.css` 和 `zh-CN.js` 到便携版的 `files/ui`，替换同名文件。保留其他文件。
3. 重新打开便携版顶层的 `DcsControl.exe`。左下角可选择语言。
4. 恢复英文原版时，退出程序并还原备份的 `files/ui` 即可。

这些文件的英文基线与上游 `v0.5.10-preview` 标签一致。请勿将本版的 `app.js`、`index.html` 直接覆盖到未来不同版本，届时应先同步上游，再使用合并后的文件。

**软件内置的“更新”仍指向作者的英文版本，安装后会覆盖汉化。** 本 Fork 没有更改上游的签名检查或更新信任机制。保留汉化的更新方式是：先同步代码、处理冲突和新文字、测试，再重新构建或复制对应版本的界面文件。

## 以后怎样同步上游

在 GitHub 上，可以先切到 `main`，点击 **Sync fork → Update branch**。这只同步 `main`；还需要把更新后的 `main` 合并到 `zh-CN`，中文分支才会得到更新。创建合并 PR 时，目标和来源都要选择你自己的 `tianshubenshu/dcs-control`，不要误发到作者仓库。

命令行方式（在此 Fork 的本地克隆目录中执行）：

```powershell
# 仅首次执行：将作者仓库添加为 upstream
git remote add upstream https://github.com/NIGos/dcs-control.git

# 每次更新前，先提交或保存自己的修改，确保工作区干净
git fetch upstream
git switch zh-CN
git merge upstream/main

# 如出现冲突，处理后 git add 对应文件并 git commit
# 测试通过后推送到你自己的 Fork
git push origin zh-CN
```

普通合并不会主动丢弃汉化提交。如果双方改到同一处代码，需要人工解决冲突；未发生冲突也应检查新增界面文字和上游接口变化。不要对中文分支执行 `reset --hard upstream/main` 或强制覆盖同步。

## 翻译维护与测试

- `src/DcsVr.App/ui/zh-CN.js`：以英文原句为键的中文词典，翻译由本地资源提供，不调用外部翻译服务。
- `src/DcsVr.App/ui/i18n.js`：只更新文本节点与 `title`、`aria-label`、`placeholder` 属性；不翻译表单值、data 属性、日志、代码或上游发布说明。
- `src/DcsVr.App/ui/i18n.css`：中文字体和语言选择控件。
- 对上游原文件的改动集中在 `index.html` 的资源加载、`app.js` 的中文搜索，以及 `.gitignore` 和本说明入口。

使用支持 jsdom 30 的 Node.js（例如 Node 24）运行：

```powershell
npm ci --prefix tests/localization
npm test --prefix tests/localization
```

测试覆盖全部设置名称/说明、中文与英文搜索、动态重绘、往返切换、语言记忆、可访问属性、路径和枚举保持不变，以及日志/发布说明不被翻译。上游新增设置时，应补充词典并更新测试中的设置数量。

项目和第三方组件的许可证保持上游原样，详情见 [LICENSE](LICENSE) 和 [第三方组件说明](docs/THIRD_PARTY.md)。本 Fork 不代表作者官方中文版本。
