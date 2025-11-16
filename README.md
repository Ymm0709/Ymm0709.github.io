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

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Option 1: Deploy to `username.github.io` (Recommended)

1. Rename your repository to `Ymm0709.github.io` (replace `Ymm0709` with your GitHub username)
2. The workflow will automatically deploy on every push to `main` branch
3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
4. Your site will be available at `https://Ymm0709.github.io`

#### Option 2: Deploy to Project Pages

If you want to keep the repository name as `personal-website`:

1. Update `vite.config.js` to set `base: '/personal-website/'`
2. The workflow will automatically deploy on every push to `main` branch
3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
4. Your site will be available at `https://Ymm0709.github.io/personal-website/`

#### Manual Deployment (Alternative)

1. Build the project: `npm run build`
2. Push the `dist` folder contents to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Documentation

- **PROMPTS.md**: Documents all AI prompts used during development
- **REPORT.md**: Comprehensive project documentation and file descriptions

## License

This project is open source and available under the MIT License.

## Author

Your Name - [Your GitHub](https://github.com/yourusername)

