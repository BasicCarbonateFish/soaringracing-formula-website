# SOARING RACING 官网 V2.0

## 快速部署（现有腾讯云 EdgeOne Makers + GitHub）
1. 解压 ZIP，进入 `soaring-racing-v2` 文件夹。
2. 将文件夹**内部的全部文件和 assets 子文件夹**上传至现有 GitHub 仓库根目录（不要嵌套整层文件夹）。
3. 覆盖原 `index.html`、`styles.css`、`script.js`，提交到 `main` 分支。
4. EdgeOne Makers 会自动部署。若未更新，查看构建日志并强制刷新浏览器 Ctrl+F5。

## 如何更新内容
- 文案、分区、图片引用：`index.html`
- 调色：`styles.css` 最底部的 `:root` 自定义颜色变量
- 照片文件：`assets/*.webp`；修改时保持文件名不变即可自动替换
- 新闻、活动和文创尚未接入后台，需要通过修改 HTML + Git 提交更新；无支付/下单功能。

## 本版素材
由车队提供的原始现场照片、Logo 和招新海报制作；图片压缩成 WebP 加速加载。
- `hero-racing.webp` 首屏赛道动态
- `group-2025.webp` 2025 郑州团队合影
- `group-graduation.webp` 校园合照
- `race-*` 赛事和工程影像
- `recruit-poster.webp` 车队招新海报
- `recruit-banner.webp` 车队招新宣传设计
- `soaring-logo.png` 从提供的队徽文件转换，深色背景去除处理

## 正式上线前核查
- 赛事图片如有赛方水印或摄影版权，取得使用授权，保留署名且勿移除水印
- 队员肖像公开发布应按车队与当事人的授权要求处理
- 当前合作伙伴展示需核对合作关系及品牌展示许可
- 联系方式、报名链接、文创价格和售卖规则需要在核实后补充
- 绑定自定义域名后在中国大陆移动、电信、联通实际测试。EdgeOne 默认预览链接不保证大陆可访问
