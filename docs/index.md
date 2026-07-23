---
layout: home

hero:
  name: "我的技术博客"
  text: "记录学习、思考与成长"
  tagline: "一个计算机专业学生的技术探索空间——Agent 开发、CS 基础、项目实战，写下即是思考"
  actions:
    - theme: brand
      text: 开始阅读
      link: /posts/agent/what-is-agent
    - theme: alt
      text: 关于我
      link: /about

features:
  - icon: 🤖
    title: Agent 开发
    details: AI Agent 的设计思路、提示词工程、RAG 实践、多智能体协作等前沿探索。
    link: /posts/agent/what-is-agent
    linkText: 阅读文章
  - icon: 📡
    title: CS 基础
    details: 操作系统、计算机网络、数据结构与算法——系统学习计算机底层原理的笔记。
    link: /posts/cs/tcp-handshake
    linkText: 阅读文章
  - icon: 🔧
    title: 项目实战
    details: 课设、竞赛、个人项目的完整开发记录，从需求分析到上线部署。
    link: /posts/projects/vitepress-blog
    linkText: 阅读文章
  - icon: ✍️
    title: 留言板
    details: 欢迎交流讨论，留下你的想法和建议。
    link: /guestbook
    linkText: 去留言
---

<style>
/* 最近文章区域 */
.recent-posts {
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 24px 72px;
}

.recent-posts h2 {
  font-family: var(--vp-font-family-heading);
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 28px;
  letter-spacing: -0.005em;
  color: var(--vp-c-text-1);
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.post-card {
  border: 1px solid var(--vp-c-border);
  border-left: 3px solid transparent;
  border-radius: 6px;
  padding: 22px 24px;
  transition: border-left-color 0.2s, background 0.2s;
  text-decoration: none;
  color: inherit;
  display: block;
  background: var(--vp-c-bg);
}

.post-card:hover {
  border-left-color: var(--vp-c-brand-2);
  background: var(--vp-c-bg-soft);
}

.post-card .tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 2px 10px;
  border-radius: 3px;
  margin-bottom: 12px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.post-card h3 {
  font-family: var(--vp-font-family-heading);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.post-card p {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.post-card .date {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin-top: 14px;
}
</style>

<div class="recent-posts">
  <h2>最近文章</h2>
  <div class="post-grid">
    <a class="post-card" href="/posts/agent/what-is-agent">
      <span class="tag">Agent</span>
      <h3>什么是 AI Agent？从概念到实践</h3>
      <p>Agent 不是简单的"聊天机器人"，它是能感知环境、自主决策、执行行动的完整系统。</p>
      <div class="date">2026-07-19</div>
    </a>
    <a class="post-card" href="/posts/agent/prompt-engineering">
      <span class="tag">Agent</span>
      <h3>提示词工程：让 AI 真正听懂你的话</h3>
      <p>从角色设定到思维链，系统梳理 Prompt Engineering 的核心技巧。</p>
      <div class="date">2026-07-19</div>
    </a>
    <a class="post-card" href="/posts/cs/tcp-handshake">
      <span class="tag">CS</span>
      <h3>TCP 三次握手与四次挥手</h3>
      <p>用生活化的比喻理解 TCP 连接建立和释放的完整过程。</p>
      <div class="date">2026-07-19</div>
    </a>
    <a class="post-card" href="/posts/cs/process-vs-thread">
      <span class="tag">CS</span>
      <h3>进程与线程：到底有什么区别</h3>
      <p>从内存模型、调度方式、通信机制三个维度彻底搞懂。</p>
      <div class="date">2026-07-19</div>
    </a>
    <a class="post-card" href="/posts/projects/vitepress-blog">
      <span class="tag">项目</span>
      <h3>VitePress 个人博客从零搭建</h3>
      <p>从选型到部署上线，一个现代前端项目的完整开发记录——Markdown、Vue 组件、Vercel 自动发布。</p>
      <div class="date">2026-07-20</div>
    </a>
  </div>
</div>
