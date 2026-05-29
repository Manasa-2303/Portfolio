# Manasa Panuganti — Portfolio

Personal developer portfolio website built with pure HTML, CSS, and JavaScript.

**Live:** (((https://manasa-2303.github.io/Portfolio/)))

## Tech Stack
- HTML5, CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (Intersection Observer, typewriter, custom cursor)
- Google Fonts: JetBrains Mono + Syne
- Font Awesome 6 icons

## Features
- Loader animation
- Typewriter hero section
- Scroll-reveal animations
- Custom cursor (desktop)
- Mobile-responsive hamburger nav
- Dark black & neon-green theme
- Contact form (hook up Formspree for real emails)
- Resume download button

## Folder Structure
```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── resume.pdf   ← add your resume here
│   └── profile.jpg  ← optional photo
└── README.md
```

## Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Manasa-2303/portfolio.git
git push -u origin main
```
Then go to: **GitHub repo → Settings → Pages → Source: main branch** → Save.
Your site will be live at `https://Manasa-2303.github.io/portfolio`

## Connect Real Email (Formspree)
1. Go to https://formspree.io → create free account
2. Create a form → copy your form endpoint
3. In `script.js`, replace the `setTimeout` fake send with:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});
```

---
© 2025 Manasa Panuganti
