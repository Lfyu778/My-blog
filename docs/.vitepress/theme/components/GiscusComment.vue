<script setup lang="ts">
import { onMounted, ref } from 'vue'

const giscusRef = ref<HTMLDivElement>()

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'lfyu778/my-blog')
  script.setAttribute('data-repo-id', 'REPO_ID_HERE')
  script.setAttribute('data-category', '留言板')
  script.setAttribute('data-category-id', 'CATEGORY_ID_HERE')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  giscusRef.value?.appendChild(script)
})
</script>

<template>
  <div ref="giscusRef" class="giscus-container"></div>
</template>

<style scoped>
.giscus-container {
  margin-top: 32px;
  min-height: 200px;
}
</style>
