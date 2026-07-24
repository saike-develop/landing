# 赛客实验室 Saike Lab 官网落地页

基于 Vite + Vue3 + Tailwind CSS 构建的单页应用，适配 GitHub Pages 部署。

## 技术栈

- **Vite** — 构建工具
- **Vue 3** — 前端框架（Composition API）
- **Tailwind CSS** — 原子化 CSS 框架
- **Font Awesome 6** — 图标库

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```
├── index.html              # 入口 HTML
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置（base: '/landing/'）
├── tailwind.config.js      # Tailwind CSS 配置
├── postcss.config.js       # PostCSS 配置
├── public/
│   └── favicon.svg         # 网站图标
└── src/
    ├── main.js             # 应用入口
    ├── App.vue             # 根组件
    ├── style.css           # 全局样式 + 磨砂玻璃组件
    ├── components/
    │   ├── NavBar.vue      # 顶部导航栏
    │   ├── HeroSection.vue # 首屏
    │   ├── DualCards.vue   # 双卡片（SEC / CODING）
    │   ├── AboutSection.vue# 关于我们
    │   ├── JoinSection.vue # 加入我们（含二维码占位）
    │   └── FooterSection.vue# 页脚
    └── composables/
        ├── useDarkMode.js      # 深色模式切换
        └── useScrollReveal.js  # 滚动渐入动画
```

## 部署到 GitHub Pages

项目已配置 GitHub Actions 自动部署，推送代码到 `main` 分支即可自动构建并部署。

### 一次性配置（仅需在 GitHub 仓库操作一次）

1. 打开仓库 → **Settings** → **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存即可

### 自动部署流程

每次 `git push` 到 `main` 分支时，GitHub Actions 会自动：

```
检出代码 → 安装 Node.js → npm ci → npm run build → 部署到 GitHub Pages
```

工作流文件：`.github/workflows/deploy.yml`

### 手动部署

```bash
npm run build
# dist/ 目录即为静态站点，可直接部署到任意静态服务器
```

## 自定义修改

### 替换二维码图片
1. 将招新群二维码图片命名为 `qr-code.png`
2. 放入 `public/` 目录
3. 修改 `src/components/JoinSection.vue` 第 18 行附近的注释切换为 `<img>`

### 修改文案
所有文案内容直接在各 Vue 组件中修改，关键位置均有注释标注。

### 调整主题色
在 `tailwind.config.js` 的 `theme.extend.colors.brand` 中修改蓝紫渐变色值。

## 视觉特性

- 🪟 磨砂玻璃拟态（backdrop-filter blur）
- 🌓 浅色 / 深色模式切换
- ✨ 滚动渐入动画
- 📱 响应式布局（移动端适配）
- 🔗 锚点平滑滚动导航