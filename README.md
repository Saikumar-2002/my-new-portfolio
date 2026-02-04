# 🚀 Personal Portfolio Website

A modern, responsive, and professional portfolio website built with React.js for junior/fresher software developers. This project showcases clean code practices, component-based architecture, and stunning UI/UX design.

![Portfolio Preview](https://via.placeholder.com/1200x630/667eea/ffffff?text=Portfolio+Website)

## ✨ Features

- **Modern Design**: Stunning dark theme with gradient accents and glassmorphism effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Elegant transitions and micro-animations throughout
- **Component-Based**: Clean, reusable React components
- **Accessibility**: Proper semantic HTML and focus management
- **SEO Optimized**: Meta tags and structured content for better visibility
- **Form Validation**: Contact form with real-time email validation
- **Smooth Scrolling**: Seamless navigation between sections

## 📋 Sections Included

1. **Hero/Profile** - Eye-catching introduction with profile photo, title, and CTAs
2. **About Me** - Brief introduction and career objectives
3. **Education** - Academic background in timeline format
4. **Experience** - Work experience and internships
5. **Projects** - Portfolio of projects with links
6. **Skills** - Technical skills with progress bars
7. **Interests** - Areas of interest and passions
8. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **React.js** (v19) - Functional components with hooks
- **JavaScript** (ES6+) - Modern JS features
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **Vite** - Fast build tool and dev server
- **HTML5** - Semantic markup

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Education/
│   │   │   ├── Education.jsx
│   │   │   └── Education.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Interests/
│   │   │   ├── Interests.jsx
│   │   │   └── Interests.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd "New Portfolio AI"
   ```

2. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:5173` in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Updating Personal Information

1. **Hero Section** (`src/components/Hero/Hero.jsx`)
   - Update name, title, and summary
   - Replace social media links

2. **About Section** (`src/components/About/About.jsx`)
   - Modify introduction and career objectives

3. **Education Section** (`src/components/Education/Education.jsx`)
   - Update `educationData` array with your education details

4. **Experience Section** (`src/components/Experience/Experience.jsx`)
   - Modify `experienceData` array with your work experience

5. **Projects Section** (`src/components/Projects/Projects.jsx`)
   - Update `projectsData` array with your projects

6. **Skills Section** (`src/components/Skills/Skills.jsx`)
   - Customize `skillsData` object with your skills

7. **Contact Section** (`src/components/Contact/Contact.jsx`)
   - Update `contactInfo` array with your contact details

### Changing Colors

Edit CSS custom properties in `src/App.css`:

```css
:root {
  --color-primary: #667eea;      /* Primary accent color */
  --color-primary-dark: #764ba2; /* Secondary accent */
  --bg-dark: #0a0a1e;           /* Main background */
  /* ... more variables */
}
```

### Adding Profile Photo

Replace the placeholder in `src/components/Hero/Hero.jsx`:

```jsx
{/* Replace placeholder */}
<div className="hero__image-placeholder">
  <span>JD</span>
</div>

{/* With actual image */}
<img src="/path-to-your-photo.jpg" alt="Your Name" />
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📦 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**John Doe**
- GitHub: [@johndoe](https://github.com/johndoe)
- LinkedIn: [John Doe](https://linkedin.com/in/johndoe)
- Email: johndoe@email.com

---

⭐ If you found this helpful, please give it a star!
