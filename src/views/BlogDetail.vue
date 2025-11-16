<template>
  <div class="blog-detail">
    <div class="container">
      <div v-if="loading" class="loading">
        <p>{{ t('blog.loading') }}</p>
      </div>

      <div v-else-if="error" class="error">
        <p>{{ t('blog.error') }} {{ error }}</p>
        <router-link to="/blog" class="btn">{{ t('blog.back') }}</router-link>
      </div>

      <article v-else-if="post" class="blog-detail-content">
        <button @click="goBack" class="back-button">← {{ t('blog.back') }}</button>
        
        <header class="blog-header">
          <h1 class="blog-title">{{ post.title }}</h1>
          <div class="blog-meta">
            <span class="blog-author">{{ t('blog.by') }} {{ post.author }}</span>
            <span class="blog-date">{{ formatDate(post.date) }}</span>
            <span class="blog-read-time">{{ post.readTime }}</span>
          </div>
          <div class="blog-tags">
            <span 
              v-for="tag in post.tags" 
              :key="tag" 
              class="blog-tag"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <div class="blog-body">
          <div class="blog-content" v-html="formatContent(post.content)"></div>
        </div>
      </article>

      <div v-else class="not-found">
        <p>Post not found</p>
        <router-link to="/blog" class="btn">{{ t('blog.back') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { injectLanguage } from '../composables/useLanguage'

const router = useRouter()
const route = useRoute()
const { currentLanguage, t } = injectLanguage()
const post = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchPost = async () => {
  try {
    loading.value = true
    error.value = null
    // 根据当前语言加载对应的 JSON 文件
    const lang = currentLanguage.value
    const filename = lang === 'zh' ? 'blog-zh.json' : 'blog-en.json'
    const response = await fetch(`/data/${filename}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    const posts = await response.json()
    const postId = parseInt(route.params.id)
    const foundPost = posts.find(p => p.id === postId)
    
    if (foundPost) {
      post.value = foundPost
    } else {
      error.value = 'Post not found'
    }
  } catch (err) {
    error.value = err.message
    console.error('Error fetching blog post:', err)
  } finally {
    loading.value = false
  }
}

// 监听语言变化，重新加载博客文章
watch(currentLanguage, () => {
  fetchPost()
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const formatContent = (content) => {
  // Convert markdown-style formatting to HTML
  let formatted = content
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/## (.*?)(<br>|$)/g, '<h2>$1</h2>')
    .replace(/### (.*?)(<br>|$)/g, '<h3>$1</h3>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
  
  return `<p>${formatted}</p>`
}

const goBack = () => {
  router.push('/blog')
}

onMounted(() => {
  fetchPost()
})
</script>

<style scoped>
.blog-detail {
  padding: 2rem 0;
  min-height: calc(100vh - 200px);
}

.loading,
.error,
.not-found {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--text-light);
}

.error,
.not-found {
  color: #ef4444;
}

.back-button {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 1rem;
  transition: all 0.3s;
}

.back-button:hover {
  background: var(--primary-color);
  color: var(--bg-color);
  box-shadow: var(--shadow-glow);
}

.blog-detail-content {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.blog-header {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--border-color);
}

.blog-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.blog-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(6, 182, 212, 0.1);
  color: var(--primary-color);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.blog-tag:hover {
  background: rgba(6, 182, 212, 0.2);
  border-color: var(--primary-color);
}

.blog-body {
  line-height: 1.8;
}

.blog-content {
  font-size: 1.1rem;
  color: var(--text-light);
}

.blog-content :deep(p) {
  margin-bottom: 1.5rem;
  color: var(--text-light);
  font-size: 1.1rem;
  line-height: 1.8;
}

.blog-content :deep(h2) {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  line-height: 1.3;
}

.blog-content :deep(h3) {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
  line-height: 1.4;
}

.blog-content :deep(code) {
  background: rgba(6, 182, 212, 0.1);
  padding: 0.2rem 0.5rem;
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: var(--primary-color);
}

.blog-content :deep(strong) {
  font-weight: bold;
  color: var(--text-color);
}

.blog-content :deep(em) {
  font-style: italic;
}

@media (max-width: 768px) {
  .blog-detail-content {
    padding: 1.5rem;
  }

  .blog-title {
    font-size: 2rem;
  }

  .blog-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

