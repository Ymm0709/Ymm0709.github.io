# REPORT.md

## Project Overview（项目概述）

这是一个使用 Vue.js 与 Vite 构建的个人作品集网站。网站以现代、响应式设计呈现项目、技能、博客文章以及个人信息，支持双语。所有动态内容均来自 JSON 文件。

## Project Structure

```
personal-website-development/
├── public/
│   ├── data/
│   │   ├── projects.json      # Project data (name, description, technologies, URLs)
│   │   └── blog.json          # Blog post data (title, content, author, tags)
│   └── vite.svg               # Vite logo
├── src/
│   ├── assets/                # Static assets (images, etc.)
│   ├── components/
│   │   └── Navbar.vue         # Navigation bar component
│   ├── router/
│   │   └── index.js           # Vue Router configuration
│   ├── views/
│   │   ├── Home.vue           # Homepage with welcome message and quick links
│   │   ├── About.vue          # About Me page with personal story and goals
│   │   ├── Skills.vue         # Skills and Resume page
│   │   ├── Links.vue          # Useful links page
│   │   ├── Projects.vue       # Projects list page
│   │   ├── ProjectDetail.vue  # Individual project detail page
│   │   ├── Blog.vue           # Blog posts list page
│   │   └── BlogDetail.vue     # Individual blog post detail page
│   ├── App.vue                # Main app component with router-view
│   ├── main.js                # Application entry point
│   └── style.css              # Global styles and CSS variables
├── index.html                 # HTML entry point
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── PROMPTS.md                 # AI prompts documentation
└── REPORT.md                  # This file
```

# 文件说明（File Descriptions）

## 核心文件（Core Files）

### `index.html`

* 应用程序的入口 HTML 文件
* 包含 Vue 挂载点 `<div id="app">`
* 包含响应式设计的 meta 标签

### `src/main.js`

* 应用程序入口文件
* 引入 Vue、App 组件、路由与全局样式
* 创建并挂载 Vue 应用（包含路由支持）

### `src/App.vue`

* 根组件
* 包含 Navbar 组件与 `router-view` 用于页面渲染
* 包含底部区域与主内容布局
* 设置整体页面结构

### `vite.config.js`

* Vite 构建工具的配置文件
* 配置处理 `.vue` 文件的 Vue 插件
* 设置开发服务器与构建选项

---

# 路由配置（Router Configuration）

### `src/router/index.js`

* 使用 Vue Router 定义所有应用路由
* 设置 Home、About、Skills、Links 等静态页面路由
* 配置 Projects 与 Blog 的动态详情页（使用 `:id` 参数）
* 使用 HTML5 History 模式，实现干净的 URL（无 `#`）

---

# 组件（Components）

### `src/components/Navbar.vue`

* 固定在顶部的导航栏
* 移动端具有汉堡菜单的响应式设计
* 使用 `router-link-active` 高亮当前路由
* 提供通往所有主要页面的导航链接

---

# 页面（Views）

### `src/views/Home.vue`

* 首页，包含欢迎信息与个人简介
* 显示头像或 Logo 占位
* 快速导航到主要板块
* 包含渐变背景的 hero 区域
* 展示各板块概览卡片

### `src/views/About.vue`

* 展示详细的个人故事与背景介绍
* 学术兴趣板块（卡片样式）
* 个人兴趣列表
* 未来目标与规划
* 可加入个人照片占位符

### `src/views/Skills.vue`

* 技术技能展示（含动画进度条）
* 百分比技能熟练度
* 教育背景时间轴
* 相关课程标签
* 奖项与成就展示

### `src/views/Links.vue`

* 好友网站链接
* 学习资源（如 MDN、Vue 文档）
* 喜爱的开发者（GitHub Profile）
* 每个链接包含图标、标题、描述与 URL
* 超链接使用新标签页打开并具备安全属性

### `src/views/Projects.vue`

* 从 `projects.json` 加载所有项目
* 使用 Fetch API 异步获取数据
* 响应式网格布局展示项目
* 显示项目名称、简介、技术栈与链接
* 包含加载与错误状态
* 点击卡片跳转到项目详情页

### `src/views/ProjectDetail.vue`

* 展示单个项目的完整信息
* 根据路由参数 ID 获取项目
* 显示详细描述、技术栈、截图、个人贡献
* 提供 GitHub 与 Demo 链接
* 返回项目列表的按钮
* 处理项目不存在的情况

### `src/views/Blog.vue`

* 从 `blog.json` 加载所有博客文章
* 异步获取数据
* 显示标题、摘要、作者、日期、标签
* 显示阅读时间
* 包含加载与错误状态
* 点击跳转到博客详情页

### `src/views/BlogDetail.vue`

* 展示完整博客内容
* 根据路由参数 ID 获取文章
* 将 Markdown 风格内容格式化成 HTML
* 显示作者、日期、标签、阅读时间
* 提供返回按钮
* 处理文章不存在的情况

---

# 数据文件（Data Files）

### `public/data/projects.json`

* 包含项目数据的 JSON 数组，每个项目包括：
  * `id`: 唯一标识
  * `name`: 项目名称
  * `introduction`: 简短介绍
  * `description`: 完整项目说明
  * `screenshots`: 截图路径数组
  * `technologies`: 技术栈数组
  * `contribution`: 个人贡献描述
  * `githubUrl`: GitHub 地址（必填）
  * `demoUrl`: Demo 地址（可选）

### `public/data/blog.json`

* 包含博客文章的 JSON 数组，每篇文章包括：
  * `id`: 唯一标识
  * `title`: 标题
  * `excerpt`: 摘要
  * `content`: 完整内容（Markdown 风格）
  * `author`: 作者
  * `date`: 日期（YYYY-MM-DD）
  * `tags`: 标签数组
  * `readTime`: 预计阅读时长

---

# 样式（Styling）

### `src/style.css`

* 全局样式与 CSS 变量
* 定义主题色（主色、副色、文字色、背景色）
* 可复用工具类（container、section-title、card、btn）
* 字体与间距基础设置
* 响应式断点配置

---

# 关键特性（Key Features）

## 1. 动态内容加载

* 项目与博客均从 JSON 文件加载
* 使用 Fetch API 异步获取数据
* 支持加载状态与错误处理
* 无需修改代码即可更新内容

## 2. 路由系统

* 使用 Vue Router 的客户端路由
* 支持项目与博客详情页（动态路由）
* 无需刷新即可切换页面
* URL 简洁无 `#`

## 3. 响应式设计

* 移动优先布局
* 导航栏支持汉堡菜单
* 网格布局自适应屏幕大小
* 所有设备上均有良好视觉体验

## 4. 良好用户体验

* 平滑动画与 hover 效果
* 加载指示
* 错误重试提示
* 清晰的导航与返回按钮
* 语义化 HTML、可访问性良好

## 5. 高质量代码

* 组件化架构
* 分离关注点
* 可复用组件与样式
* 统一代码风格
* 全面错误处理

---

# 使用技术（Technologies Used）

* **Vue.js 3**
* **Vue Router 4**
* **Vite**
* **JavaScript (ES6+)**
* **CSS3（含 Grid 与 Flexbox）**
* **Fetch API**

---

# 开发流程（Development Workflow）

1. **启动项目**：使用 Vite + Vue 初始化
2. **配置路由**：完成所有页面的路由映射
3. **开发组件**：如 Navbar
4. **编写页面**：Home、About、Skills、Links、Projects、Blog
5. **创建数据文件**：projects.json 与 blog.json
6. **样式设计**：响应式现代 CSS
7. **测试**：检查功能与兼容性
8. **文档**：撰写 PROMPTS.md 与 REPORT.md

## Deployment

- **GitHub Pages**: Deploy static files from dist folder
