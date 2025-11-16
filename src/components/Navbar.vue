<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/" class="logo-link">{{ t('portfolio') }}</router-link>
      </div>
      <button class="nav-toggle" @click="toggleMenu" aria-label="Toggle navigation">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
      <div class="nav-right">
        <ul class="nav-menu" :class="{ active: menuOpen }">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMenu">{{ t('nav.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" @click="closeMenu">{{ t('nav.about') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills" class="nav-link" @click="closeMenu">{{ t('nav.skills') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" @click="closeMenu">{{ t('nav.projects') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link" @click="closeMenu">{{ t('nav.blog') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/links" class="nav-link" @click="closeMenu">{{ t('nav.links') }}</router-link>
          </li>
        </ul>
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
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { injectLanguage } from '../composables/useLanguage'

const { currentLanguage, setLanguage, t } = injectLanguage()
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.lang-option {
  background: transparent;
  border: none;
  color: var(--text-light);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.75rem;
  transition: all 0.3s ease;
}

.lang-option:hover {
  color: var(--primary-color);
  background: rgba(6, 182, 212, 0.1);
}

.lang-option.active {
  color: var(--primary-color);
  background: rgba(6, 182, 212, 0.2);
}

.lang-divider {
  color: var(--text-muted);
  font-size: 0.7rem;
}


.logo-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-link:hover {
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: rgba(6, 182, 212, 0.2);
  color: var(--primary-color);
  opacity: 1;
  border-bottom: 2px solid var(--primary-color);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  width: 25px;
  height: 3px;
  background-color: var(--text-color);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-right {
    gap: 1rem;
  }

  .language-selector {
    gap: 0.2rem;
  }

  .lang-option {
    padding: 0.2rem 0.4rem;
    font-size: 0.7rem;
  }

  .lang-divider {
    font-size: 0.65rem;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    flex-direction: column;
    padding: 1rem 0;
    gap: 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: var(--shadow);
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-item {
    width: 100%;
    text-align: center;
  }

  .nav-link {
    display: block;
    padding: 1rem;
    width: 100%;
  }
}
</style>

