import { ref, provide, inject } from 'vue'

const LANGUAGE_KEY = Symbol('language')

// 翻译内容
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      blog: 'Blog',
      skills: 'Skills',
      links: 'Links'
    },
    home: {
      title: 'Welcome to My Portfolio',
      subtitle: 'My name is Yung Zhang, a 12th grade student in Hangzhou Yungu School',
      quickNav: 'Quick Navigation',
      aboutMe: 'About Me',
      aboutMeDesc: 'Learn more about my background, interests, and aspirations',
      skills: 'Skills & Resume',
      skillsDesc: 'View my technical skills and educational background',
      projects: 'Projects',
      projectsDesc: 'Explore my portfolio of projects and GitHub repositories',
      blog: 'Blog',
      blogDesc: 'Read my thoughts and experiences in web development'
    },
    portfolio: 'Yung\'s Portfolio',
    about: {
      title: 'About Me',
      myStory: 'My Story',
      story1: 'Hello! I\'m a passionate web developer with a love for creating beautiful and functional digital experiences. My journey in web development started with curiosity about how websites work, and it has evolved into a full-fledged passion for building innovative solutions.',
      story2: 'I believe in continuous learning and staying updated with the latest technologies and best practices in web development. Whether it\'s front-end frameworks, back-end systems, or new design patterns, I\'m always excited to explore and implement new ideas.',
      academicInterests: 'Academic Interests',
      featuredCourses: 'Featured Courses',
      personalInterests: 'Personal Interests',
      course1: 'CL/AP Computer Science A',
      course2: 'CL/AP Computer Science Principle',
      course3: 'CL Applied Python Programming, Information and Communication Technology',
      course4: 'CL/AP Statistic',
      course5: 'CL/AP Physics C: Mechanics',
      course6: 'CL/AP Calculus BC',
      hci: 'Human-Computer Interaction',
      dataScience: 'Data Science',
      ai: 'AI',
      machineLearning: 'Machine Learning',
      interactionDesign: 'Interaction Design',
      achievements: 'Honors & Awards',
      achievement1: 'Euclid Math Contest – Distinction (Top 25%) (International)',
      achievement1Grade: 'G11',
      achievement2: 'Waterloo Math Contest (Cayley & Fermat) – Top 25% in both contests (International)',
      achievement2Grade: 'G10',
      achievement3: 'Berkeley mini Math Tournament (BmMT) – 3 Bronze Medals (Individual, Team, Puzzle; Top 30%) (International)',
      achievement3Grade: 'G9',
      achievement4: 'Destination Imagination (DI) – 3rd Place Nationwide (Top 5%) in Physics Challenge (National)',
      achievement4Grade: 'G10',
      achievement5: 'CTB Global Youth Research and Innovation Conference – National Forum Selection and Top 50% Paper (National)',
      achievement5Grade: 'G10',
      achievement6: 'Hangzhou Youth Ultimate Frisbee Tournament – 3rd Place, MVP (Regional)',
      achievement6Grade: 'G10',
      achievement7: 'High School Summer Soccer League – Champion (Top 1%) (Regional)',
      achievement7Grade: 'G11',
      achievement8: 'HISBA (Hangzhou International School Basketball Association) – 3rd Place (Regional)',
      achievement8Grade: 'G11',
      achievement9: 'Ultimate Frisbee Class Tournament – Champion (Top 1%) (School)',
      achievement9Grade: 'G12',
      achievement10: 'Incoming Student Arts Scholarship – Recipient (School)',
      achievement10Grade: 'G9',
      goals: 'Personal Aspirations & Goals',
      goal1: 'My goal is to utilize the knowledge I have acquired to assist others and to become an application developer capable of independently completing the entire process from requirement analysis, system design, development to online deployment. I hope to continuously enhance my technical skills through practice, participate in meaningful projects, and create value for more people with my professional abilities. At the same time, I also expect to accumulate experience in solving practical problems and continuously grow into a more influential and responsible developer.',
      hobbies: 'My Hobbies',
      football: 'Football',
      basketball: 'Basketball',
      frisbee: 'Frisbee',
      esports: 'Esports',
      rugby: 'Rugby',
      hobbyHint: 'Click to view',
      photos: 'Photos',
      videos: 'Videos',
      noMedia: 'No photos or videos available',
      close: 'Close'
    },
    skills: {
      title: 'Skills & Resume',
      technicalSkills: 'Technical Skills',
      education: 'Educational Background',
      courses: 'Relevant Courses',
      achievements: 'Awards & Achievements',
      loading: 'Loading...',
      tryAgain: 'Try Again',
      level: 'Level',
      mastery: 'Mastery',
      expert: 'Expert',
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      beginnerPlus: 'Beginner+',
      beginner: 'Beginner',
      edu1Year: '2023 - Present',
      edu1Degree: 'Computer Science',
      edu1Institution: 'Hangzhou Yungu School',
      edu1Description: 'Majoring in Computer Science, with completion of core CSA and CSP courses such as Data Structures, Algorithms, and Database Systems.',
      edu2Year: '2025 Summer Session',
      edu2Degree: 'Stanford Summer School',
      edu2Institution: 'Stanford University',
      edu2Description: 'Completed C++ course, mastering object-oriented programming to analyze datasets; participated in seminars and engaged with peers globally.',
      edu3Year: '2025 Summer Session',
      edu3Degree: 'UCLA Summer School',
      edu3Institution: 'University of California, Los Angeles',
      edu3Description: 'Digital Systems Design course: mastered digital logic and HDL to simulate circuits and create virtual processors, applying abstract CS theory.',
      edu4Year: '2024 - 2025',
      edu4Degree: 'Mathematics',
      edu4Institution: 'Hangzhou Yungu School',
      edu4Description: 'Completed college level mathematics courses including Calculus and Statistics, developing strong analytical and problem-solving skills through rigorous mathematical reasoning and data analysis.'
    },
    projects: {
      title: 'My Projects',
      loading: 'Loading projects...',
      error: 'Error loading projects:',
      tryAgain: 'Try Again',
      github: 'GitHub →',
      demo: 'More →',
      technologies: {
        'Algorithms': 'Algorithms',
        'Data Structures': 'Data Structures',
        'Object-Oriented Programming': 'Object-Oriented Programming',
        'Game Design': 'Game Design',
        'GUI Development': 'GUI Development',
        'Algorithm Design': 'Algorithm Design',
        'Web Programming': 'Web Programming',
        '360° Camera': '360° Camera',
        'Interactive Navigation': 'Interactive Navigation',
        'Project Management': 'Project Management',
        'Power Tools': 'Power Tools',
        'Mechanical Design': 'Mechanical Design',
        'Hardware/Software Integration': 'Hardware/Software Integration',
        'PCB Design': 'PCB Design',
        'Sensor Integration': 'Sensor Integration',
        'HTML': 'HTML',
        'JavaScript': 'JavaScript',
        'CSS': 'CSS',
        'Web Development': 'Web Development',
        'Data Management': 'Data Management'
      },
      detail: {
        loading: 'Loading project...',
        error: 'Error loading project:',
        back: 'Back to Projects',
        screenshots: 'Screenshots',
        description: 'Description',
        technologies: 'Technologies Used',
        contribution: 'My Contribution',
        links: 'Links',
        viewGithub: 'View on GitHub',
        liveDemo: 'More',
        notFound: 'Project not found'
      }
    },
    links: {
      title: 'Useful Links',
      friends: 'Friends\' Websites',
      learning: 'Learning Resources',
      developers: 'Developers I Admire',
      visitSite: 'Visit Site →',
      visitProfile: 'Visit Profile →',
      link1Title: 'GitHub',
      link1Desc: 'The world\'s leading software development platform for version control and collaboration.',
      link2Title: 'Eric Dai\'s Personal Website',
      link2Desc: 'Teacher Mu Jiang\'s personal website. It has everything',
      link3Title: 'MDN Web Docs',
      link3Desc: 'Comprehensive documentation for web technologies including HTML, CSS, and JavaScript.',
      link4Title: 'Manchester United',
      link4Desc: 'Official website of Manchester United Football Club. News, fixtures, and more.',
      link5Title: 'LA Clippers',
      link5Desc: 'Official website of the Los Angeles Clippers. News, schedule, tickets, and more.',
      link6Title: 'Vue.js Official Docs',
      link6Desc: 'Official documentation and guides for Vue.js framework.',
      link7Title: 'freeCodeCamp',
      link7Desc: 'Free online coding bootcamp with interactive lessons and projects.',
      link8Title: 'Instagram',
      link8Desc: 'Share photos and videos, connect with friends and discover new content.',
      link9Title: 'YouTube',
      link9Desc: 'Watch and discover educational content, tutorials, and tech talks.'
    },
    blog: {
      title: 'Blog',
      loading: 'Loading blog posts...',
      error: 'Error loading blog posts:',
      tryAgain: 'Try Again',
      readMore: 'Read more →',
      back: 'Back to Blog',
      by: 'By'
    },
    footer: {
      copyright: 'All rights reserved.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      projects: '项目',
      blog: '博客',
      skills: '技能',
      links: '链接'
    },
    home: {
      title: '欢迎来到我的作品集',
      subtitle: '我叫Yung，是一名来自杭州云谷学校的12年级学生',
      quickNav: '快速导航',
      aboutMe: '关于我',
      aboutMeDesc: '了解更多关于我的背景、兴趣和志向',
      skills: '技能与简历',
      skillsDesc: '查看我的技术技能和教育背景',
      projects: '项目',
      projectsDesc: '探索我的项目作品集和GitHub仓库',
      blog: '博客',
      blogDesc: '阅读我在网页开发方面的思考和经验'
    },
    portfolio: 'Yung\'s Portfolio',
    about: {
      title: '关于我',
      myStory: '我的故事',
      story1: '你好！我是一名热爱创造美观且实用的数字体验的网页开发者。我的网页开发之旅始于对网站工作原理的好奇，现在已经发展成为对构建创新解决方案的全面热情。',
      story2: '我相信持续学习，并始终关注网页开发领域的最新技术和最佳实践。无论是前端框架、后端系统还是新的设计模式，我总是对探索和实施新想法感到兴奋。',
      academicInterests: '学术兴趣',
      featuredCourses: '特色课程',
      personalInterests: '个人兴趣',
      course1: 'CL/AP Computer Science A',
      course2: 'CL/AP Computer Science Principle',
      course3: 'CL Applied Python Programming, Information and Communication Technology',
      course4: 'CL/AP Statistic',
      course5: 'CL/AP Physics C: Mechanics',
      course6: 'CL/AP Calculus BC',
      hci: '人机交互',
      hciZh: '人机交互',
      dataScience: '数据科学',
      dataScienceZh: '数据科学',
      ai: '人工智能',
      aiZh: '人工智能',
      machineLearning: '机器学习',
      machineLearningZh: '机器学习',
      interactionDesign: '交互设计',
      interactionDesignZh: '交互设计',
      hobbyHint: '点击查看',
      hobbyHintZh: '点击查看',
      achievements: '成就与荣誉',
      achievement1: 'Euclid Math Contest – Distinction (Top 25%) (International)',
      achievement1Grade: 'G11',
      achievement2: 'Waterloo Math Contest (Cayley & Fermat) – Top 25% in both contests (International)',
      achievement2Grade: 'G10',
      achievement3: 'Berkeley mini Math Tournament (BmMT) – 3 Bronze Medals (Individual, Team, Puzzle; Top 30%) (International)',
      achievement3Grade: 'G9',
      achievement4: 'Destination Imagination (DI) – 3rd Place Nationwide (Top 5%) in Physics Challenge (National)',
      achievement4Grade: 'G10',
      achievement5: 'CTB Global Youth Research and Innovation Conference – National Forum Selection and Top 50% Paper (National)',
      achievement5Grade: 'G10',
      achievement6: 'Hangzhou Youth Ultimate Frisbee Tournament – 3rd Place, MVP (Regional)',
      achievement6Grade: 'G10',
      achievement7: 'High School Summer Soccer League – Champion (Top 1%) (Regional)',
      achievement7Grade: 'G11',
      achievement8: 'HISBA (Hangzhou International School Basketball Association) – 3rd Place (Regional)',
      achievement8Grade: 'G11',
      achievement9: 'Ultimate Frisbee Class Tournament – Champion (Top 1%) (School)',
      achievement9Grade: 'G12',
      achievement10: 'Incoming Student Arts Scholarship – Recipient (School)',
      achievement10Grade: 'G9',
      goals: '个人志向与目标',
      goal1: '我的目标是运用我所掌握的知识去帮助他人，成长为一名能够独立完成从需求分析、系统设计、开发到上线部署整个流程的应用开发者。我希望在实践中不断提升自己的技术能力，参与真正有意义的项目，用专业能力为更多人创造价值。同时，我也期待在解决实际问题的过程中持续积累经验，不断成长为一名更具影响力和责任感的开发者。',
      hobbies: '我的爱好',
      football: '足球',
      basketball: '篮球',
      frisbee: '飞盘',
      esports: '电竞',
      rugby: '橄榄球',
      hobbyHint: '点击查看',
      photos: '照片',
      videos: '视频',
      noMedia: '暂无照片和视频',
      close: '关闭'
    },
    skills: {
      title: '技能与简历',
      technicalSkills: '技术技能',
      education: '教育背景',
      courses: '相关课程',
      achievements: '奖项与成就',
      loading: '加载中...',
      tryAgain: '重试',
      level: '等级',
      mastery: '熟练度',
      expert: '专家',
      advanced: '高级',
      intermediate: '中级',
      beginnerPlus: '初级+',
      beginner: '初级',
      edu1Year: '2023 - 至今',
      edu1Degree: '计算机科学',
      edu1Institution: '杭州云谷学校',
      edu1Description: '主修计算机科学，完成了核心 CSA 和 CSP 课程，包括数据结构、算法和数据库系统等。',
      edu2Year: '2025 夏季学期',
      edu2Degree: '斯坦福夏校',
      edu2Institution: '斯坦福大学',
      edu2Description: '完成 C++ 课程，掌握面向对象编程以分析数据集；参加研讨会并与全球同行交流。',
      edu3Year: '2025 夏季学期',
      edu3Degree: 'UCLA 夏校',
      edu3Institution: '加州大学洛杉矶分校',
      edu3Description: '数字系统设计课程：掌握数字逻辑和 HDL 以模拟电路并创建虚拟处理器，应用抽象 CS 理论。',
      edu4Year: '2024 - 2025',
      edu4Degree: '数学',
      edu4Institution: '杭州云谷学校',
      edu4Description: '完成大学水平的数学课程，包括微积分和统计学，通过严格的数学推理和数据分析培养强大的分析和解决问题的能力。'
    },
    projects: {
      title: '我的项目',
      loading: '加载项目中...',
      error: '加载项目时出错：',
      tryAgain: '重试',
      github: 'GitHub →',
      demo: '更多 →',
      technologies: {
        'Algorithms': '算法',
        'Data Structures': '数据结构',
        'Object-Oriented Programming': '面向对象编程',
        'Game Design': '游戏设计',
        'GUI Development': 'GUI开发',
        'Algorithm Design': '算法设计',
        'Web Programming': '网页编程',
        '360° Camera': '360°相机',
        'Interactive Navigation': '交互式导航',
        'Project Management': '项目管理',
        'Power Tools': '电动工具',
        'Mechanical Design': '机械设计',
        'Hardware/Software Integration': '硬件/软件集成',
        'PCB Design': 'PCB设计',
        'Sensor Integration': '传感器集成',
        'HTML': 'HTML',
        'JavaScript': 'JavaScript',
        'CSS': 'CSS',
        'Web Development': '网页开发',
        'Data Management': '数据管理'
      },
      detail: {
        loading: '加载项目中...',
        error: '加载项目时出错：',
        back: '返回项目',
        screenshots: '图示',
        description: '项目描述',
        technologies: '使用的技术',
        contribution: '我的贡献',
        links: '链接',
        viewGithub: '在 GitHub 上查看',
        liveDemo: '更多',
        notFound: '项目未找到'
      }
    },
    links: {
      title: '有用链接',
      friends: '朋友的网站',
      learning: '学习资源',
      developers: '我敬佩的开发者',
      visitSite: '访问网站 →',
      visitProfile: '访问主页 →',
      link1Title: 'GitHub',
      link1Desc: '世界领先的软件开发平台，用于版本控制和协作。',
      link2Title: 'Eric Dai 的个人网站',
      link2Desc: '木酱老师的个人网站，非常全面',
      link3Title: 'MDN Web 文档',
      link3Desc: '全面的 Web 技术文档，包括 HTML、CSS 和 JavaScript。',
      link4Title: '曼联',
      link4Desc: '曼彻斯特联足球俱乐部官方网站。新闻、赛程等。',
      link5Title: '洛杉矶快船',
      link5Desc: '洛杉矶快船队官方网站。新闻、赛程、门票等。',
      link6Title: 'Vue.js 官方文档',
      link6Desc: 'Vue.js 框架的官方文档和指南。',
      link7Title: 'freeCodeCamp',
      link7Desc: '免费的在线编程训练营，提供互动课程和项目。',
      link8Title: 'Instagram',
      link8Desc: '分享照片和视频，与朋友联系并发现新内容。',
      link9Title: 'YouTube',
      link9Desc: '观看和发现教育内容、教程和技术讲座。'
    },
    blog: {
      title: '博客',
      loading: '加载博客文章...',
      error: '加载博客文章时出错：',
      tryAgain: '重试',
      readMore: '阅读更多 →',
      back: '返回博客',
      by: '作者'
    },
    footer: {
      copyright: '版权所有。'
    }
  }
}

export function useLanguage() {
  // 从 localStorage 获取保存的语言，默认为英文
  const getSavedLanguage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('language') || 'en'
    }
    return 'en'
  }
  const currentLanguage = ref(getSavedLanguage())

  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLanguage.value = lang
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', lang)
      }
    }
  }

  const toggleLanguage = () => {
    const newLang = currentLanguage.value === 'en' ? 'zh' : 'en'
    setLanguage(newLang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        return key // 如果找不到翻译，返回原始key
      }
    }
    return value
  }

  const translateTechnology = (tech) => {
    // Java 和 Pano2VR 不需要翻译
    if (tech === 'Java' || tech === 'Pano2VR') {
      return tech
    }
    
    // 尝试从翻译对象中获取翻译
    const techTranslations = translations[currentLanguage.value]?.projects?.technologies
    if (techTranslations && techTranslations[tech]) {
      return techTranslations[tech]
    }
    
    // 如果找不到翻译，返回原值
    return tech
  }

  return {
    currentLanguage,
    setLanguage,
    toggleLanguage,
    t,
    translateTechnology
  }
}

export function provideLanguage() {
  const language = useLanguage()
  provide(LANGUAGE_KEY, language)
  return language
}

export function injectLanguage() {
  const language = inject(LANGUAGE_KEY)
  if (!language) {
    throw new Error('Language not provided. Make sure to call provideLanguage() in a parent component.')
  }
  return language
}

