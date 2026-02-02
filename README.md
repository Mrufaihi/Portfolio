# Portfolio Website

A modern portfolio website built with React, Vite, GSAP, and Tailwind CSS.

## Features

- Modern dark theme design
- Smooth GSAP animations
- Responsive layout
- Project showcase with images and links
- Experience timeline
- Skills display
- Contact section

## Tech Stack

- React 18 + TypeScript
- Vite
- GSAP (with @gsap/react)
- Tailwind CSS
- Framer Motion (installed as backup)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

- `src/components/` - All React components
- `src/App.tsx` - Main app with data arrays
- `public/images/` - Project images
- `tailwind.config.js` - Tailwind configuration

## Customization

- **Colors**: Edit `tailwind.config.js` for color scheme
- **Projects**: Update `projects` array in `src/App.tsx`
- **Experience**: Update `experience` array in `src/App.tsx`
- **Fonts**: Change font in `index.html` and `tailwind.config.js`

## Documentation

- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Complete project documentation, requirements, implementation details, and issues faced
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Design system, color palette, and styling decisions (includes known color issues to discuss)

## Notes

- Add project images to `/public/images/` folder
- Update social links in Navbar and Contact components
- Modify email in Contact component
- **See DESIGN_SYSTEM.md for color issues and design decisions**
