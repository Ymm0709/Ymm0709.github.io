<template>
  <div class="language-selector">
    <button
      class="lang-option"
      :class="{ active: currentLanguage === 'en' }"
      @click="setLanguage('en')"
    >
      EN
    </button>
    <span class="lang-divider">|</span>
    <button
      class="lang-option"
      :class="{ active: currentLanguage === 'zh' }"
      @click="setLanguage('zh')"
    >
      中文
    </button>
  </div>
</template>

<script setup>
import { injectLanguage } from '../composables/useLanguage'

const { currentLanguage, setLanguage } = injectLanguage()
</script>

<style scoped>
.language-selector {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1001;
}

.lang-option {
  background: transparent;
  border: none;
  color: var(--text-light);
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.lang-option:hover {
  color: var(--primary-color);
  background: rgba(6, 182, 212, 0.1);
}

.lang-option.active {
  color: var(--primary-color);
  background: rgba(6, 182, 212, 0.2);
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
}

.lang-divider {
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .language-selector {
    top: 0.5rem;
    right: 0.5rem;
    gap: 0.3rem;
  }

  .lang-option {
    padding: 0.3rem 0.6rem;
    font-size: 0.85rem;
  }

  .lang-divider {
    font-size: 0.8rem;
  }
}
</style>

