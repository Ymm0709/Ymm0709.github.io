<template>
  <div class="skills">
    <div class="container">
      <h1 class="section-title">{{ t('skills.title') }}</h1>

      <section class="skills-section">
        <h2>{{ t('skills.technicalSkills') }}</h2>
        <div class="skill-cards-container">
          <div 
            v-for="skill in skills" 
            :key="skill.name" 
            class="skill-card"
          >
            <div class="skill-card-header">
              <div class="skill-card-icon">{{ skill.icon || '💻' }}</div>
              <div class="skill-card-title">{{ skill.name }}</div>
            </div>
            <div class="skill-card-body">
              <div class="skill-card-level">
                <span class="level-label">{{ t('skills.level') }}</span>
                <span class="level-value">{{ skill.level }}%</span>
              </div>
              <div class="skill-card-progress">
                <div class="progress-bar">
                  <div 
                    class="progress-fill" 
                    :style="{ width: skill.animatedLevel + '%' }"
                  ></div>
                </div>
              </div>
              <div class="skill-card-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ t('skills.mastery') }}</span>
                  <span class="stat-value">{{ getMasteryLevel(skill.level) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="education-section">
        <h2>{{ t('skills.education') }}</h2>
        <div class="education-timeline">
          <div 
            v-for="edu in education" 
            :key="edu.id" 
            class="education-card"
          >
            <div class="edu-year">{{ t(edu.yearKey) }}</div>
            <div class="edu-content">
              <h3>{{ t(edu.degreeKey) }}</h3>
              <p class="edu-institution">{{ t(edu.institutionKey) }}</p>
              <p class="edu-description">{{ t(edu.descriptionKey) }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="courses-section">
        <h2>{{ t('skills.courses') }}</h2>
        <div class="courses-grid">
          <div 
            v-for="course in courses" 
            :key="course" 
            class="course-tag"
          >
            {{ t(`about.${course}`) }}
          </div>
        </div>
      </section>

      <section class="achievements-section">
        <h2>{{ t('about.achievements') }}</h2>
        <div class="achievements-list">
          <div 
            v-for="achievement in sortedAchievements" 
            :key="achievement.id"
            class="achievement-item"
          >
            <div class="achievement-content">
              <span class="achievement-text">{{ achievement.text }}</span>
              <span class="achievement-grade">{{ achievement.grade }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { injectLanguage } from '../composables/useLanguage'

const { t } = injectLanguage()

// 技能数据 - 属性卡形式，按等级从高到低排序
const skills = ref([
  { name: 'Java', level: 90, icon: '☕', animatedLevel: 0 },
  { name: 'HTML/CSS', level: 86, icon: '🎨', animatedLevel: 0 },
  { name: 'Python', level: 85, icon: '🐍', animatedLevel: 0 },
  { name: 'Logic', level: 82, icon: '🧠', animatedLevel: 0 },
  { name: 'Vue.js', level: 80, icon: '⚡', animatedLevel: 0 },
  { name: 'Git', level: 78, icon: '🔀', animatedLevel: 0 },
  { name: 'C++', level: 77, icon: '⚙️', animatedLevel: 0 },
  { name: 'JS', level: 70, icon: '🟨', animatedLevel: 0 }
])

// 动画进度条
const animateProgressBars = () => {
  skills.value.forEach((skill, index) => {
    setTimeout(() => {
      skill.animatedLevel = skill.level
    }, index * 100) // 每个技能延迟 100ms，形成依次动画效果
  })
}

onMounted(() => {
  // 使用 nextTick 确保 DOM 已渲染
  setTimeout(() => {
    animateProgressBars()
  }, 100)
})

// 获取熟练度等级
const getMasteryLevel = (level) => {
  if (level >= 90) return t('skills.expert')
  if (level >= 80) return t('skills.advanced')
  if (level >= 70) return t('skills.intermediate')
  if (level >= 60) return t('skills.beginnerPlus')
  return t('skills.beginner')
}

// 教育背景数据 - 使用翻译键
const education = computed(() => [
  {
    id: 1,
    yearKey: 'skills.edu1Year',
    degreeKey: 'skills.edu1Degree',
    institutionKey: 'skills.edu1Institution',
    descriptionKey: 'skills.edu1Description'
  },
  {
    id: 2,
    yearKey: 'skills.edu2Year',
    degreeKey: 'skills.edu2Degree',
    institutionKey: 'skills.edu2Institution',
    descriptionKey: 'skills.edu2Description'
  },
  {
    id: 3,
    yearKey: 'skills.edu3Year',
    degreeKey: 'skills.edu3Degree',
    institutionKey: 'skills.edu3Institution',
    descriptionKey: 'skills.edu3Description'
  },
  {
    id: 4,
    yearKey: 'skills.edu4Year',
    degreeKey: 'skills.edu4Degree',
    institutionKey: 'skills.edu4Institution',
    descriptionKey: 'skills.edu4Description'
  }
])

const courses = ref([
  'course1',
  'course3',
  'course2',
  'course4',
  'course5',
  'course6'
])

// 荣誉奖项数据，按年级和级别排序
const achievementsData = [
  { id: 9, key: 'achievement9', gradeKey: 'achievement9Grade', grade: 'G12', level: 'School' },
  { id: 7, key: 'achievement7', gradeKey: 'achievement7Grade', grade: 'G11', level: 'Regional' },
  { id: 8, key: 'achievement8', gradeKey: 'achievement8Grade', grade: 'G11', level: 'Regional' },
  { id: 1, key: 'achievement1', gradeKey: 'achievement1Grade', grade: 'G11', level: 'International' },
  { id: 6, key: 'achievement6', gradeKey: 'achievement6Grade', grade: 'G10', level: 'Regional' },
  { id: 2, key: 'achievement2', gradeKey: 'achievement2Grade', grade: 'G10', level: 'International' },
  { id: 4, key: 'achievement4', gradeKey: 'achievement4Grade', grade: 'G10', level: 'National' },
  { id: 5, key: 'achievement5', gradeKey: 'achievement5Grade', grade: 'G10', level: 'National' },
  { id: 3, key: 'achievement3', gradeKey: 'achievement3Grade', grade: 'G9', level: 'International' },
  { id: 10, key: 'achievement10', gradeKey: 'achievement10Grade', grade: 'G9', level: 'School' }
]

// 排序函数：先按年级（G12 > G11 > G10 > G9），再按级别（International > National > Regional > School）
const sortedAchievements = computed(() => {
  const levelOrder = { 'International': 1, 'National': 2, 'Regional': 3, 'School': 4 }
  
  return [...achievementsData].sort((a, b) => {
    // 先按年级排序（G12 > G11 > G10 > G9）
    const gradeA = parseInt(a.grade.replace('G', ''))
    const gradeB = parseInt(b.grade.replace('G', ''))
    if (gradeA !== gradeB) {
      return gradeB - gradeA // 降序，G12在最上面
    }
    
    // 同年级按级别排序
    return levelOrder[a.level] - levelOrder[b.level]
  }).map(achievement => ({
    id: achievement.id,
    text: t(`about.${achievement.key}`),
    grade: t(`about.${achievement.gradeKey}`)
  }))
})
</script>

<style scoped>
.skills {
  padding: 2rem 0;
  min-height: calc(100vh - 200px);
}

.skills-section,
.education-section,
.courses-section,
.achievements-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.skills-section:hover,
.education-section:hover,
.courses-section:hover,
.achievements-section:hover {
  border-color: var(--border-light);
  box-shadow: var(--shadow-hover);
}

.skills-section h2,
.education-section h2,
.courses-section h2,
.achievements-section h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2rem;
}

/* 技能属性卡样式 */
.skill-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.skill-card {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.skill-card-icon {
  font-size: 2.5rem;
  line-height: 1;
  filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.5));
}

.skill-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  letter-spacing: 0.5px;
}

.skill-card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-card-level {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.level-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.level-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
}

.skill-card-progress {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), rgba(6, 182, 212, 0.8));
  border-radius: 10px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
  width: 0;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skill-card-stats {
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-color);
}

.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.education-card {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.edu-year {
  font-weight: bold;
  color: var(--primary-color);
  min-width: 150px;
  font-size: 1.1rem;
}

.edu-content h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.edu-institution {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.edu-description {
  color: var(--text-light);
  line-height: 1.6;
}

.courses-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.course-tag {
  padding: 0.75rem 1.5rem;
  background: rgba(6, 182, 212, 0.1);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.course-tag:hover {
  background: var(--primary-color);
  color: var(--bg-color);
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
}

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.achievement-item {
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.achievement-item:hover {
  border-color: var(--primary-color);
  background: var(--bg-card-hover);
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.2);
}

.achievement-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.achievement-text {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.6;
  flex: 1;
}

.achievement-grade {
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 15px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .skill-cards-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-card {
    padding: 1.25rem;
  }

  .skill-card-icon {
    font-size: 2rem;
  }

  .skill-card-title {
    font-size: 1.25rem;
  }

  .education-card {
    flex-direction: column;
    gap: 1rem;
  }

  .edu-year {
    min-width: auto;
  }

  .achievement-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .achievement-grade {
    align-self: flex-start;
  }

  .skills-section,
  .education-section,
  .courses-section,
  .achievements-section {
    padding: 1.5rem;
  }
}
</style>

