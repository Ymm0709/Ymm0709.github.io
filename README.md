# Personal Portfolio Website

A modern, responsive personal portfolio website built with Vue.js and Vite. This website showcases projects, skills, blog posts, and personal information.

## Features

- 🏠 **Homepage** with welcome message and quick navigation
- 👤 **About Me** page with personal story, interests, and goals
- 💼 **Skills & Resume** page with technical skills, education, and achievements
- 🔗 **Links** page with useful resources and developer profiles
- 📁 **Projects Portfolio** with dynamic project listings and detail pages
- 📝 **Blog/Journal** with blog post listings and full post views
- 📱 **Responsive Design** that works on all devices
- 🎨 **Modern UI** with beautiful gradients and animations

## Tech Stack

- Vue.js 3 (Composition API)
- Vue Router 4
- Vite
- JavaScript (ES6+)
- CSS3 (Grid, Flexbox)

## Project Structure

```
├── public/
│   └── data/
│       ├── projects.json    # Project data
│       └── blog.json        # Blog post data
├── src/
│   ├── components/          # Reusable components
│   ├── router/              # Vue Router configuration
│   ├── views/               # Page components
│   ├── App.vue              # Root component
│   ├── main.js              # Application entry point
│   └── style.css            # Global styles
├── PROMPTS.md               # AI prompts documentation
└── REPORT.md                # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website-development
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Projects

Edit `public/data/projects.json` to add or modify projects. Each project should include:
- `id`: Unique identifier
- `name`: Project name
- `introduction`: Short description
- `description`: Full description
- `technologies`: Array of technologies used
- `githubUrl`: GitHub repository URL
- `demoUrl`: Live demo URL (optional)

### Adding Blog Posts

Edit `public/data/blog.json` to add or modify blog posts. Each post should include:
- `id`: Unique identifier
- `title`: Post title
- `excerpt`: Short summary
- `content`: Full post content
- `author`: Author name
- `date`: Publication date (YYYY-MM-DD)
- `tags`: Array of tags
- `readTime`: Estimated reading time

### Styling

Edit `src/style.css` to customize colors, fonts, and other styles. CSS variables are defined at the top of the file for easy customization.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages

本项目已配置为使用 GitHub Actions 自动部署到 GitHub Pages。

#### 部署到 `username.github.io`（当前配置）

当前项目已配置为部署到 `https://Ymm0709.github.io/` 格式的网址。

**重要提示：** 要实现 `username.github.io` 格式的网址，需要将仓库重命名为 `Ymm0709.github.io`。

**部署步骤：**

1. **重命名仓库**（如果还没有）：
   - 前往 GitHub 仓库页面
   - 点击 Settings（设置）
   - 在页面底部找到 "Repository name"（仓库名称）
   - 将仓库名改为 `Ymm0709.github.io`（将 `Ymm0709` 替换为你的 GitHub 用户名）
   - 点击 Rename（重命名）

2. **启用 GitHub Pages**：
   - 在仓库 Settings（设置）中，找到 Pages（页面）选项
   - 在 "Source"（源）下，选择 "GitHub Actions"
   - 保存设置

3. **推送代码**：
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

4. **等待部署完成**：
   - 前往仓库的 Actions（操作）标签页
   - 查看部署工作流的状态
   - 部署完成后，你的网站将在 `https://Ymm0709.github.io` 可用

**注意：** 首次部署可能需要几分钟时间。部署完成后，每次推送到 `main` 分支都会自动触发新的部署。

#### 部署到项目页面（可选）

如果你想保持当前仓库名称，可以部署到项目页面：

1. 更新 `vite.config.js` 中的 `base` 为 `/仓库名/`
2. 按照上述步骤启用 GitHub Pages
3. 网站将可在 `https://Ymm0709.github.io/仓库名/` 访问

## Documentation

- **PROMPTS.md**: Documents all AI prompts used during development
- **REPORT.md**: Comprehensive project documentation and file descriptions

## License

This project is open source and available under the MIT License.

## Author

Your Name - [Your GitHub](https://github.com/yourusername)

