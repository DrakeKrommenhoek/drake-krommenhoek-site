# Drake Krommenhoek - Personal Website

A professional one-page scrolling website built with Next.js, TypeScript, and Tailwind CSS, showcasing education, experience, and personal story.

## Features

- Modern, clean design with Washington and Lee blue color scheme
- Fully responsive and mobile-first
- Smooth scrolling navigation
- Optimized for finance and professional audiences
- Static export for easy deployment
- Accessible and semantic HTML

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## Project Structure

```
drake-krommenhoek-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Landing section
│   ├── Experience.tsx      # Education, work, leadership, skills
│   ├── Upcoming.tsx        # Future internships
│   ├── About.tsx           # Personal story and photos
│   ├── Contact.tsx         # Contact form and links
│   └── Footer.tsx          # Footer with links
├── public/
│   └── images/             # All images organized by category
│       ├── headshot/
│       ├── golf/
│       ├── basketball/
│       ├── about/
│       └── family/
├── content/
│   └── Krommenhoek Resume_Dec.pdf  # Resume (for reference)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. Navigate to the project directory:
```bash
cd ~/Desktop/drake-krommenhoek-website
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Other Commands

- **Build for production:** `npm run build`
- **Start production server:** `npm start`
- **Run linter:** `npm run lint`

## Updating Content

### Updating Resume Information

Resume data is hardcoded in the `components/Experience.tsx` file. To update:

1. Open `components/Experience.tsx`
2. Modify the data in these sections:
   - `education` - Schools and degrees
   - `professionalExperience` - Jobs and internships
   - `leadership` - Leadership roles and activities
   - `skills` - Technical skills, certifications, interests

### Updating Images

Images are stored in `public/images/` and organized by category:

- `headshot/` - Professional headshot for hero section
- `golf/` - Golf photos
- `basketball/` - Basketball photos
- `about/` - Lifestyle and travel photos
- `family/` - Family photos

**To add new images:**

1. Add image files to the appropriate folder in `public/images/`
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
3. For About section photos, update the `imagePaths` array in `components/About.tsx`

**Image naming:**
- Images can have any name
- Keep names descriptive (e.g., `headshot-professional.jpg`)
- Avoid spaces in filenames (use hyphens or underscores)

### Updating Personal Story

The "Who Am I" section content is in `components/About.tsx`. Edit the paragraph content to update your story.

### Updating Contact Information

Contact details are in `components/Contact.tsx` and `components/Footer.tsx`:

- Email addresses
- LinkedIn URL
- Form mailto recipient

## Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Push your code to GitHub:**
   ```bash
   cd ~/Desktop/drake-krommenhoek-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/drake-krommenhoek-website.git
   git push -u origin main
   ```

3. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Your site will be live** at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd ~/Desktop/drake-krommenhoek-website
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Connecting a Custom Domain

### Using drakekrommenhoek.com

1. **Purchase domain** from a registrar (Namecheap, GoDaddy, Google Domains, etc.)

2. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add `drakekrommenhoek.com`
   - Add `www.drakekrommenhoek.com` (optional)

3. **Update DNS settings** at your domain registrar:

   **For root domain (drakekrommenhoek.com):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

4. **Wait for DNS propagation** (can take up to 48 hours, usually much faster)

5. **Enable HTTPS** (automatic in Vercel)

### Alternative: Netlify Deployment

1. **Build static export:**
   ```bash
   npm run build
   ```

2. **Deploy the `out/` folder** to Netlify via:
   - Drag and drop at [netlify.com/drop](https://netlify.com/drop)
   - Or Netlify CLI: `netlify deploy --prod --dir=out`

## Customization

### Colors

Brand colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  'wl-blue': {
    DEFAULT: '#003580',    // Washington & Lee blue
    light: '#0052CC',
    lighter: '#4A90E2',
    lightest: '#E8F1FA',
  },
}
```

To change colors, update these hex values.

### Fonts

Fonts are configured in `tailwind.config.ts`. Currently using system fonts for performance. To use custom fonts:

1. Add font files to `public/fonts/`
2. Import in `app/globals.css`
3. Update `tailwind.config.ts` font family

### Sections

To add, remove, or reorder sections:

1. Create/modify component in `components/`
2. Import in `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

## Performance Tips

- Images are automatically optimized by Next.js
- Static export for fast loading
- Minimal JavaScript for better performance
- Lazy loading for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Issue:** Images not loading
- Check file paths in `public/images/`
- Verify image extensions match actual files
- Ensure images aren't too large (compress if needed)

**Issue:** Build fails
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run lint`
- Verify all imports are correct

**Issue:** Styles not applying
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`

## License

© 2026 Drake Krommenhoek. All rights reserved.

## Contact

- **Email:** drake.krommenhoek@gmail.com
- **University Email:** dkrommenhoek@mail.wlu.edu
- **LinkedIn:** [linkedin.com/in/drakekrommenhoek](https://www.linkedin.com/in/drakekrommenhoek)
