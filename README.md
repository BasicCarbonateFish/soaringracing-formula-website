# 翱翔方程式电动赛车队官网 — 第一版

这是**无需构建步骤**的静态网页，适合 GitHub + 腾讯云 EdgeOne Makers/Pages 部署。

## 文件结构
- `index.html` 网页结构和文本
- `styles.css` 颜色、布局、响应式设计
- `script.js` 手机菜单、滚动动画
- `assets/favicon.svg` 临时原创图形 favicon，**非车队官方 Logo**

## 怎么打开
直接双击 `index.html` 或用 VS Code 的 Live Server 扩展预览。

## GitHub 更新
1. 打开当前链接的 GitHub 仓库。
2. 选择 `Add file > Upload files`，上传 `index.html`、`styles.css`、`script.js` 以及 `assets/favicon.svg`（保持目录结构）。
3. 如果无法通过网页版一次上传目录，可逐个在 GitHub 创建/上传，或使用 VS Code + GitHub Desktop。
4. 点击 `Commit changes`，提交到 `main`。
5. 到 EdgeOne Makers 构建部署页查看新部署结果，再点击预览。

## EdgeOne 静态项目设置
- 生产分支：`main`
- 构建命令：无（不要使用 npm build）
- 根目录：仓库根目录
- 输出目录：`./` 或控制台所要求的根目录写法

## 上线前必改
- 车队官方名称、介绍文字是否已获授权且准确。
- `hero-art` 是**原创概念插画**，不是实际赛车，请替换成车队实拍照片。
- 赛车年份、技术参数、赛事成绩暂未填写，避免虚构。
- 合作品牌请核对合作许可、正式名称和展示权限。
- 合作联系方式是占位文字，需填入经授权公开的邮箱/账号。
- `assets/favicon.svg` 不是车队官方标识。
- 顶部及各区块内容可以直接在 HTML 中改；主色在 CSS `:root` 中改。
- 海外节点默认预览地址不代表中国大陆可正常访问；正式发布前需绑定域名并测试三大运营商网络。

## 安全
本项目无后端、无表单，不收集访客信息。不要往 GitHub 仓库上传私人手机号、API Key、内部 CAN 报文、赞助合同和其他非公开资料。
