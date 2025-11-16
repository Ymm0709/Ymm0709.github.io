<template>
  <div class="blog">
    <div class="container">
      <h1 class="section-title">{{ t('blog.title') }}</h1>
      
      <div v-if="loading" class="loading">
        <p>{{ t('blog.loading') }}</p>
      </div>

      <div v-else-if="error" class="error">
        <p>{{ t('blog.error') }} {{ error }}</p>
        <button @click="fetchPosts" class="btn">{{ t('blog.tryAgain') }}</button>
      </div>

      <div v-else class="blog-posts">
        <article 
          v-for="post in posts" 
          :key="post.id" 
          class="blog-card"
          @click="goToPost(post.id)"
        >
          <div class="blog-header">
            <h2 class="blog-title">{{ post.title }}</h2>
            <div class="blog-meta">
              <span class="blog-date">{{ formatDate(post.date) }}</span>
              <span class="blog-read-time">{{ post.readTime }}</span>
            </div>
          </div>
          <p class="blog-excerpt">{{ post.excerpt }}</p>
          <div class="blog-tags">
            <span 
              v-for="tag in post.tags" 
              :key="tag" 
              class="blog-tag"
            >
              {{ tag }}
            </span>
          </div>
          <div class="blog-footer">
            <span class="blog-author">{{ t('blog.by') }} {{ post.author }}</span>
            <span class="read-more">{{ t('blog.readMore') }}</span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { injectLanguage } from '../composables/useLanguage'

const router = useRouter()
const route = useRoute()
const { currentLanguage, t } = injectLanguage()
const posts = ref([])
const loading = ref(true)
const error = ref(null)

const fetchPosts = async () => {
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
    const data = await response.json()
    posts.value = data
    return Promise.resolve()
  } catch (err) {
    error.value = err.message
    console.error('Error fetching blog posts:', err)
    return Promise.reject(err)
  } finally {
    loading.value = false
  }
}

// 监听语言变化，重新加载博客文章
watch(currentLanguage, () => {
  fetchPosts()
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const goToPost = (id) => {
  // 保存当前滚动位置
  const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
  sessionStorage.setItem('blogScrollPosition', scrollPosition.toString())
  router.push(`/blog/${id}`)
}

const restoreScrollPosition = () => {
  const savedPosition = sessionStorage.getItem('blogScrollPosition')
  if (savedPosition) {
    nextTick(() => {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition))
        sessionStorage.removeItem('blogScrollPosition')
      }, 100)
    })
  }
}

onMounted(() => {
  fetchPosts().then(() => {
    restoreScrollPosition()
  })
})

// 监听路由变化，当从详情页返回时恢复滚动位置
watch(() => route.name, (newName) => {
  if (newName === 'Blog') {
    nextTick(() => {
      restoreScrollPosition()
    })
  }
})
</script>

<style scoped>
.blog {
  padding: 2rem 0;
  min-height: calc(100vh - 200px);
}

.loading,
.error {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--text-light);
}

.error {
  color: #ef4444;
}

.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.blog-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
  border-color: var(--primary-color);
  background: var(--bg-card-hover);
}

.blog-header {
  margin-bottom: 1rem;
}

.blog-title {
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.blog-excerpt {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
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

.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.blog-author {
  color: var(--text-light);
  font-size: 0.9rem;
  opacity: 0.8;
}

.read-more {
  color: var(--primary-color);
  font-weight: 500;
}

@media (max-width: 768px) {
  .blog-card {
    padding: 1.5rem;
  }

  .blog-title {
    font-size: 1.5rem;
  }

  .blog-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>

