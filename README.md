# 赛客实验室 Saike Lab

> 想，全是问题；做，全是答案。

中北大学工程训练中心 A301 · 网络安全 · 软件开发 · 人工智能

---

## 技术栈

- **Hugo** 0.164+ (extended) — 静态站点生成
- **SCSS** (Hugo Pipes) — 样式编译
- **GitHub Pages** — 托管部署

---

## 本地开发

```bash
# 启动开发服务器
./hugo.exe server --noHTTPCache --bind 0.0.0.0 --port 1313

# 构建生产版本
./hugo.exe --minify --environment production
```

打开 http://localhost:1313/

---

## 项目结构

```
├── hugo.yaml                  # Hugo 配置
├── config/_default/params.yml # 站点参数
├── archetypes/                # Hugo 文章模板
├── assets/
│   ├── css/                   # SCSS 样式
│   └── js/                    # JavaScript
├── content/
│   └── posts/                 # 所有文章（Obsidian 管理）
│       ├── .obsidian/         # Obsidian 配置（插件 + 模板）
│       ├── saike_model/       # QuickAdd 新建文章模板
│       ├── 博文/              # 博文分类
│       └── 公告/              # 公告分类
├── layouts/                   # Hugo 模板
│   ├── _default/              # 基础模板
│   ├── partials/              # 组件
│   └── shortcodes/            # 短代码
├── static/                    # 静态资源（图片、音乐）
├── data/                      # 数据文件（友链等）
└── i18n/                      # 多语言
```

---

## 文章发布流程

### 使用 Obsidian（推荐）

1. 用 Obsidian 打开 `content/posts/` 作为 Vault
2. **Ctrl + X** → QuickAdd 新建文章
   - 选择分类：博文 / 公告
   - 输入标题
   - 输入作者名
   - 选择标签
3. 在 Obsidian 中编辑 Markdown
4. **Ctrl + Shift + A** → Obsidian Git 推送

### 推送到 GitHub 后

GitHub Actions 自动构建并部署到：
**https://saike-develop.github.io/landing/**

---

## 文章 Frontmatter

```yaml
---
title: "文章标题"
slug: "article-slug"
description: "文章描述"
date: 2026-07-25T12:00:00+08:00
lastmod: 2026-07-25T12:00:00+08:00
draft: false
author: "作者名"
categories:
  - 博文      # 或 公告
tags:
  - 标签1
  - 标签2
---
```

### 图片

在 Obsidian 中直接粘贴图片，会自动保存到文章目录的 `images/` 文件夹。
Hugo 构建时会自动将 `![[image.png]]` 转换为标准 HTML 图片。

---

## GitHub Pages 部署

### 一次性设置

1. 仓库 → **Settings** → **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存

### 自动部署

推送 `main` 分支即可，工作流文件：`.github/workflows/deploy.yml`

```
git push → Hugo build → GitHub Pages 部署
```

---

## 导航页面

| 页面 | URL | 说明 |
|------|-----|------|
| 首页 | `/` | Hero + 近期动态 + About + Join |
| 博文 | `/posts/` | 博文列表（标签筛选） |
| 公告 | `/announcements/` | 公告归档 |
| 赛友 | `/friend/` | 友情链接 |
| 全部动态 | `/updates/` | 隐藏汇总页 |

---
