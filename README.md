Please visit the link: https://tanaytambe03.github.io/Claude_website/

# The Argon Company — Website

A modern, premium 4-page corporate website built with pure HTML, CSS, and minimal vanilla JS.

## Files

```
argon-website/
├── index.html       ← Home page
├── about.html       ← About Us page
├── services.html    ← Services page
├── contact.html     ← Contact Us page
├── style.css        ← All styles (single shared CSS file)
├── main.js          ← Shared JS (navbar, animations, form)
└── README.md        ← This file
```

## How to Use

### Option 1 — Open Locally (simplest)
1. Download / unzip all files into a single folder.
2. Double-click `index.html` to open in your browser.
3. All internal links between pages will work automatically.

> **Note:** Google Fonts and Unsplash images require an internet connection.

### Option 2 — Local Dev Server (recommended)
If you have Node.js installed:
```bash
npx serve .
```
Then open `http://localhost:3000` in your browser.

Or with Python:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

### Option 3 — Upload to Hosting
Upload all files to any web host (Netlify, Vercel, cPanel, etc.) maintaining the flat file structure. No build step required.

---

## Customisation Guide

### Company Name & Branding
- Search and replace **"The Argon Company"** across all HTML files.
- Update the logo tagline `"Est. 2008 · Global"` in each navbar and footer.

### Colours
Edit CSS variables at the top of `style.css`:
```css
:root {
  --accent: #4F6AF5;        /* Change this to your brand colour */
  --ink:    #1A1917;        /* Primary dark / text */
  --white:  #FAFAFA;        /* Page background */
}
```

### Fonts
The site uses [Google Fonts](https://fonts.google.com/). To change:
1. Update the `@import` at the top of `style.css`.
2. Update `--font-display` and `--font-body` CSS variables.

### Images
All images are from [Unsplash](https://unsplash.com) (free, copyright-free).
Replace any `src="https://images.unsplash.com/..."` URL with your own image URL or local file path.

### Contact Form
The contact form in `contact.html` currently simulates submission with a timeout.
To connect it to a real backend:
1. Replace the `setTimeout` block in `main.js` (near the bottom of the form handler) with a `fetch()` call to your API endpoint.
2. Or use a form service like [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or [EmailJS](https://emailjs.com).

### Google Maps
The map embed in `contact.html` uses a real Google Maps embed for Park Avenue, New York.
To change the location:
1. Go to [Google Maps](https://maps.google.com).
2. Search your address → Share → Embed a map → Copy the `<iframe>` code.
3. Replace the `<iframe>` inside `.map-placeholder` in `contact.html`.

### Navigation Active State
Each page has `class="active"` on the corresponding nav link. This is already set correctly on each page.

---

## Features

- ✅ Sticky navbar with blur-glass scroll effect
- ✅ Mobile-responsive hamburger menu
- ✅ Scroll-reveal fade-up animations (IntersectionObserver)
- ✅ Hero parallax effect
- ✅ Contact form with validation + success state
- ✅ Hover effects on all interactive elements
- ✅ Google Fonts (Cormorant Garamond + DM Sans + DM Mono)
- ✅ Unsplash copyright-free images with proper alt text
- ✅ SEO meta descriptions on every page
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ No frameworks — pure HTML/CSS/JS
- ✅ One shared CSS file for easy maintenance

---

## Browser Support
Chrome, Firefox, Safari, Edge (all modern versions). IE not supported.

---

*Built for The Argon Company — theargoncompany.com*
