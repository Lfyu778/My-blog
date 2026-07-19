import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import GiscusComment from './components/GiscusComment.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件，Markdown 中可直接使用 <GiscusComment />
    app.component('GiscusComment', GiscusComment)
  },
} satisfies Theme
