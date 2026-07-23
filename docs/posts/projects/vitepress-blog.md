---
title: VitePress 个人博客从零搭建
date: 2026-07-20
tags: [项目, VitePress, Vue, Vercel, 前端]
category: projects
---

# VitePress 个人博客从零搭建

## 项目背景

作为一个计算机专业学生，我需要一个地方记录学习笔记。对比了 WordPress、Hexo、Hugo 和 VitePress，最终选了 VitePress——它基于 Vue 3 + Vite，用 Markdown 写作，构建速度快到几乎不可感知，而且默认主题的审美过关。

## 技术选型

| 需求 | 方案 | 为什么 |
|------|------|--------|
| 内容写作 | Markdown | 纯文本、可版本管理、不依赖数据库 |
| 网站生成 | VitePress | 快、默认主题完整、可嵌 Vue 组件 |
| 部署托管 | Vercel | 免费、自动部署、全球 CDN、零配置 |
| 评论系统 | Giscus | 基于 GitHub Discussions，免费且数据归自己 |
| 字体 | Lora + 系统字体 | 衬线标题有书本感，正文用系统字体保证加载速度 |

## 核心实现

### 1. 项目初始化

```bash
mkdir my-blog && cd my-blog
npm init -y
npm install -D vitepress vue
```

`package.json` 里配置三条命令：

```json
{
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  }
}
```

### 2. 站点配置

VitePress 的配置集中在 `docs/.vitepress/config.mts` 一个文件里：站点标题、导航栏、侧边栏、搜索、页脚——全在这里声明式配置，不需要写一行 HTML 模板。

例如导航栏的写法：

```ts
nav: [
  { text: '首页', link: '/' },
  {
    text: '文章',
    items: [
      { text: 'Agent 开发', link: '/posts/agent/what-is-agent' },
      { text: 'CS 基础', link: '/posts/cs/tcp-handshake' },
      { text: '项目实战', link: '/posts/projects/vitepress-blog' },
    ]
  },
]
```

每篇文章用 frontmatter 声明元数据（标题、日期、标签、分类），正文写 Markdown 即可。构建时 VitePress 自动套上导航、侧边栏、页脚。

### 3. 设计系统

没有直接用默认主题外观。定义了一套叫 "Botanist's Desk" 的 CSS 变量体系：松绿 accent、羊皮纸底色、Lora 衬线标题。所有颜色通过 `:root` 和 `.dark` 两套变量切换，暗色模式自动生效。

签名的交互是卡片 hover 时左边出现绿色竖线（像读书画标注），而不是常见的弹起+阴影扩散。

### 4. 留言板

用 Giscus 把 GitHub Discussions 嵌入页面，做成了 Vue 组件注册到全局：

```ts
// theme/index.ts
app.component('GiscusComment', GiscusComment)
```

然后在任意 Markdown 里直接写 `<GiscusComment />` 就能渲染评论区，零后端、零数据库、零成本。

### 5. 自动部署

推送代码到 GitHub 主分支，Vercel 自动触发 `npm run build`，把 `docs/.vitepress/dist` 部署到 CDN。从本地 commit 到线上生效大约 30 秒。

## 踩过的坑

**侧边栏不会自动生成**：每新建一篇文章，必须手动在 `config.mts` 的 `sidebar` 里加一条链接，否则侧边栏不显示。

**路径对应规则**：`docs/posts/agent/what-is-agent.md` 对应的链接是 `/posts/agent/what-is-agent`（去掉 `docs/` 前缀和 `.md` 后缀）。

**Giscus 暗色模式**：`data-theme` 设为 `preferred_color_scheme` 就能自动跟随 VitePress 的明暗切换，不需要额外配置。

## 项目总结

| 维度 | 数据 |
|------|------|
| 开发时间 | 约 2 天（含设计系统） |
| 代码量 | < 500 行（不含文章内容） |
| 月费 | ¥0（Vercel 免费额度完全够用） |
| Lighthouse 得分 | 100 / 100 / 100 / 100 |

这个博客本身就是一个完整的"前端入门到部署"项目——学了 Markdown、VitePress 配置、CSS 设计系统、Vue 组件基础、Git 工作流、Vercel 自动部署。搭建完不仅有了自己的内容平台，也走通了现代前端的完整链路。
