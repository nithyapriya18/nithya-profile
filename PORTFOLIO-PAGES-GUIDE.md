# 🎨 Portfolio Pages Installation Guide

## ✨ What's New - Design & Code Showcase Pages

I've created two quirky, sophisticated portfolio pages to showcase your work:

### 1. **Design Portfolio Page** (`/design`)
- Quirky card-based layout with emoji headers
- Placeholder sections for 6 Figma designs
- Design process timeline
- Tools showcase
- Sophisticated pastel color scheme

### 2. **Code Portfolio Page** (`/code`)
- Project cards with tech stacks
- Feature lists and GitHub links
- Filter by category (AI/ML, Data Science, NLP, etc.)
- Tech stack showcase
- GitHub CTA section

## 📁 New Files

1. **DesignPortfolio.tsx** - Design showcase page component
2. **CodePortfolio.tsx** - Code showcase page component  
3. **Portfolio.css** - Styling for both portfolio pages

## 🚀 Installation Steps

### Step 1: Add New Files to Your Project

Download these files and add them to your project:

```
src/
├── App.tsx (already have)
├── App.css (already have)
├── DesignPortfolio.tsx (NEW)
├── CodePortfolio.tsx (NEW)
└── Portfolio.css (NEW)
```

### Step 2: Set Up React Router

Install React Router if you haven't already:

```bash
npm install react-router-dom
```

### Step 3: Create Main Router File

Create a new file `src/main.tsx` (or update if exists):

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import DesignPortfolio from './DesignPortfolio'
import CodePortfolio from './CodePortfolio'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/design" element={<DesignPortfolio />} />
        <Route path="/code" element={<CodePortfolio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
```

### Step 4: Update Your Main App Navigation

In `App.tsx`, update the navigation links to use React Router:

```typescript
// At the top of App.tsx, add:
import { Link } from 'react-router-dom';

// Then in your nav menu, replace:
<a href="/design">Design</a>
<a href="/code">Code</a>

// With:
<Link to="/design">Design</Link>
<Link to="/code">Code</Link>
```

### Step 5: Update index.html

Make sure your `index.html` has the Google Fonts (should already be there):

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Step 6: Test Locally

```bash
npm install
npm run dev
```

Visit:
- `http://localhost:5173/` - Main page
- `http://localhost:5173/design` - Design portfolio
- `http://localhost:5173/code` - Code portfolio

### Step 7: Push to GitHub

```bash
git add .
git commit -m "Added quirky design and code portfolio pages"
git push
```

Vercel will automatically deploy! 🎉

## 🎨 Customizing the Design Page

### Add Your Figma Designs

1. **Export your Figma designs**:
   - Recommended size: 1600x1200px
   - Format: PNG (for transparency) or JPG
   - Quality: 2x for retina displays

2. **Add images to your project**:
   ```
   public/
   └── designs/
       ├── design1.png
       ├── design2.png
       └── ...
   ```

3. **Update DesignPortfolio.tsx**:

Find the designs array (around line 13) and update:

```typescript
{
  id: 1,
  title: 'Your Design Title',
  category: 'Product Design',
  description: 'Your description here',
  tools: ['Figma', 'Prototyping'],
  color: '#C8A2C8',
  emoji: '🛍️',
  imageUrl: '/designs/design1.png', // Add this line
  placeholder: false, // Change to false
  figmaLink: 'https://figma.com/...' // Optional: add Figma link
}
```

4. **Update the card to show image**:

In the design card (around line 180), replace the placeholder section:

```typescript
{!design.placeholder && design.imageUrl && (
  <div className="design-image">
    <img src={design.imageUrl} alt={design.title} />
  </div>
)}
```

Add this CSS to Portfolio.css:

```css
.design-image {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.design-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.design-card:hover .design-image img {
  transform: scale(1.05);
}
```

## 💻 Customizing the Code Page

### Update Project Details

In `CodePortfolio.tsx`, find the projects array (around line 12):

```typescript
{
  id: 1,
  title: 'Your Project Title',
  category: 'AI/ML',
  description: 'Your project description',
  tech: ['Python', 'FastAPI'], // Update tech stack
  features: [
    'Feature 1',
    'Feature 2'
  ],
  emoji: '🤖',
  color: '#C8A2C8',
  github: 'https://github.com/nithyapriya18/your-repo', // Update
  demo: 'https://your-demo.com', // Add live demo link
  stats: { 
    stars: 15, // Update from GitHub
    language: 'Python', 
    lines: '~5K' 
  }
}
```

### Add More Projects

Just copy a project object and add your own:

```typescript
const projects = [
  // ... existing projects
  {
    id: 7,
    title: 'New Project',
    category: 'Full-Stack',
    description: 'Amazing new project',
    tech: ['React', 'Node.js'],
    features: ['Cool feature 1', 'Cool feature 2'],
    emoji: '🚀',
    color: '#A8C9C3',
    github: 'https://github.com/...',
    demo: 'https://...',
    stats: { stars: 0, language: 'TypeScript', lines: '~3K' }
  }
];
```

### Update Tech Stack

Find the tech categories section (around line 350) and update with your actual tech:

```typescript
<div className="tech-category">
  <h3>Languages</h3>
  <div className="tech-items">
    {['Python', 'JavaScript', 'Your Language'].map((tech, i) => (
      <div key={i} className="tech-item">
        <div className="tech-icon">💻</div>
        <span>{tech}</span>
      </div>
    ))}
  </div>
</div>
```

## 🎯 Adding Real GitHub Stats

To show real GitHub stats (stars, language, etc.):

### Option 1: Manual Update
Just update the numbers in your project objects

### Option 2: Use GitHub API (Advanced)
Add this function to fetch real stats:

```typescript
const fetchGitHubStats = async (repo: string) => {
  const response = await fetch(`https://api.github.com/repos/${repo}`);
  const data = await response.json();
  return {
    stars: data.stargazers_count,
    language: data.language,
    forks: data.forks_count
  };
};
```

## 🌈 Customizing Colors

Each card has its own color. Update in the project/design objects:

```typescript
color: '#C8A2C8' // Soft Lilac
color: '#A8C9C3' // Soft Mint
color: '#D4A5A5' // Dusty Rose
color: '#F5D5CB' // Gentle Peach
color: '#E6D5E8' // Pale Lavender
color: '#B8A9C9' // Muted Purple
```

## 📱 Features Included

### Design Page:
✅ 6 placeholder design cards with emoji headers
✅ Quirky animations and hover effects
✅ Design process timeline (4 steps)
✅ Tools showcase with emojis
✅ Add Design CTA with tips
✅ Fully responsive

### Code Page:
✅ 6 project showcase cards
✅ Category filter pills (All, AI/ML, Data Science, etc.)
✅ Tech stack tags
✅ Feature lists with checkmarks
✅ GitHub and demo links
✅ Tech categories showcase
✅ GitHub CTA section
✅ Fully responsive

## 🎨 Page Structure

Both pages follow this structure:
1. Navigation (same as main site)
2. Hero section with quirky badge
3. Main content (grid of cards)
4. Additional sections (process, tools, tech stack)
5. CTA section
6. Footer

## 🔧 Troubleshooting

**Pages not loading?**
- Make sure React Router is installed
- Check that main.tsx has the correct routes
- Verify file names match exactly

**Navigation not working?**
- Update links to use `<Link>` from react-router-dom
- Make sure BrowserRouter wraps your Routes

**Styles not applying?**
- Ensure Portfolio.css is imported in both portfolio components
- Check that all color variables are defined in App.css

**Images not showing?**
- Verify images are in `/public` folder
- Check file paths are correct
- Use `/designs/image.png` not `./designs/image.png`

## 📸 What You'll Get

### Design Page Features:
- Colorful card headers with emojis
- Professional placeholder areas
- "Add your design" instructions
- Design process steps
- Tool showcase

### Code Page Features:
- Project cards with tech stacks
- Category filtering
- Feature highlights
- GitHub integration
- Tech stack grid
- Coffee counter (because why not 😄)

## 🎉 You're All Set!

Your portfolio now has:
✅ Beautiful main page (Home)
✅ Quirky design showcase (/design)
✅ Professional code portfolio (/code)
✅ Sophisticated pastel aesthetic
✅ Fully responsive
✅ Ready to impress!

---

**Need help?** Let me know if anything doesn't work or if you want to customize further!