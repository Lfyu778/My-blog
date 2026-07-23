import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点标题和描述（SEO 核心）
  title: '我的技术博客',
  description: 'AI Agent 开发、CS 基础、项目实战——一个计算机专业学生的技术探索空间',
  lang: 'zh-CN',

  // 主题配置
  themeConfig: {
    // 导航栏
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
      { text: '留言板', link: '/guestbook' },
      { text: '关于', link: '/about' },
    ],

    // 侧边栏（按分类组织）
    sidebar: {
      '/posts/agent/': [
        {
          text: '🤖 Agent 开发',
          items: [
            { text: '什么是 AI Agent？从概念到实践', link: '/posts/agent/what-is-agent' },
            { text: '提示词工程：让 AI 听懂你的话', link: '/posts/agent/prompt-engineering' },
          ]
        }
      ],
      '/posts/cs/': [
        {
          text: '💻 CS 基础',
          items: [
            { text: 'TCP 三次握手与四次挥手', link: '/posts/cs/tcp-handshake' },
            { text: '进程与线程：到底有什么区别', link: '/posts/cs/process-vs-thread' },
          ]
        }
      ],
      '/posts/projects/': [
        {
          text: '🔧 项目实战',
          items: [
            { text: 'VitePress 个人博客从零搭建', link: '/posts/projects/vitepress-blog' },
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lfyu778' }
    ],

    // 页脚
    footer: {
      message: '写下即是思考，思考即是成长',
      copyright: 'Copyright © 2026'
    },

    // 本地搜索
    search: {
      provider: 'local'
    },

    // 文章目录（右侧 TOC）
    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    // 上一篇/下一篇
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }

    // 注意：已移除 editLink，个人博客不需要"在 GitHub 上编辑"
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true
  },

  // 字体预加载
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap' }
    ]
  ]
})
