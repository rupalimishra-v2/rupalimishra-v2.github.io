# Rupali Mishra - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my work in AI/ML, RAGs, and AI Agents development.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom dark theme
- **Deployment:** GitHub Pages (static export)
- **CI/CD:** GitHub Actions

## Features

- Modern dark theme with gradient accents
- Responsive design (mobile-first)
- Smooth scroll animations using Intersection Observer
- SEO optimized with proper meta tags
- Fast static site generation
- Automated deployment via GitHub Actions

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page (all sections)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Header.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero section (AI/RAG focus)
│   ├── Experience.tsx      # Timeline component
│   ├── Projects.tsx        # Projects grid
│   ├── Skills.tsx          # Skills badges
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Footer
├── lib/
│   ├── data.ts             # All content (centralized)
│   ├── hooks/
│   │   └── useInView.ts    # Scroll animation hook
│   └── utils.ts            # Utility functions
├── public/
│   ├── images/             # Images (companies, projects, personal)
│   └── resume/             # Resume PDF
└── .github/workflows/
    └── deploy.yml          # GitHub Actions deployment
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rupalimishra-v2/rupalimishra-v2.github.io.git
cd rupalimishra-v2.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server (not used for GitHub Pages)
- `npm run lint` - Run ESLint
- `npm run export` - Build and prepare for GitHub Pages

### Updating Content

All content is managed in `lib/data.ts`. To update:

1. **Personal Information:** Edit the `personalInfo` object
2. **Experience:** Add/edit entries in the `experiences` array
3. **Education:** Add/edit entries in the `education` array
4. **Projects:** Add/edit entries in the `projects` array
5. **Skills:** Update the `skills` object with your technologies
6. **Social Links:** Modify the `socialLinks` array

### Adding Images

1. Place images in the appropriate `public/images/` subdirectory:
   - `companies/` - Company logos
   - `projects/` - Project screenshots
   - `personal/` - Personal photos

2. Reference them in `lib/data.ts` using paths like `/images/projects/my-project.png`

### Updating Resume

Replace the PDF file at `public/resume/Rupali_Resume.pdf` with your updated resume.

## Deployment

The site is automatically deployed to GitHub Pages when you push to the `master` branch.

### Manual Deployment

1. Build the site:
```bash
npm run build
```

2. The static files will be in the `out/` directory

3. Commit and push to master:
```bash
git add .
git commit -m "Update portfolio"
git push origin master
```

4. GitHub Actions will automatically deploy the site

### GitHub Pages Setup

Ensure GitHub Pages is configured to use GitHub Actions:

1. Go to your repository settings
2. Navigate to Pages
3. Under "Build and deployment", select "GitHub Actions"

## Customization

### Theme Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* Indigo */ },
  secondary: { /* Purple */ },
  accent: { /* Cyan */ },
  dark: { /* Dark theme shades */ },
}
```

### Animations

Custom animations are defined in `tailwind.config.ts` under `keyframes` and `animation`.

### Sections

To add/remove sections:

1. Create a new component in `components/`
2. Add it to `app/page.tsx`
3. Add a navigation link in `components/Header.tsx`

## Performance

- Next.js static export for optimal performance
- Lazy loading for images below the fold
- Font optimization with next/font
- Automatic code splitting
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Contact

Rupali Mishra
- Email: rupali.mishra304@gmail.com
- GitHub: [@rupalimishra-v2](https://github.com/rupalimishra-v2)
- LinkedIn: [Rupali Mishra](https://www.linkedin.com/in/rupali-mishra-v2/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
