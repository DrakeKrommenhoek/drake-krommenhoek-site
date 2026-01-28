# Quick Start Guide

## Run Locally (Development)

```bash
cd ~/Desktop/drake-krommenhoek-website
npm run dev
```

Open your browser to **http://localhost:3000**

Press `Ctrl+C` to stop the server.

---

## Build for Production

```bash
cd ~/Desktop/drake-krommenhoek-website
npm run build
npm start
```

---

## Deploy to Vercel (Easiest)

### Option 1: GitHub + Vercel Dashboard

1. **Create GitHub repo and push code:**
   ```bash
   cd ~/Desktop/drake-krommenhoek-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/drake-krommenhoek-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (settings auto-detected)

3. **Done!** Your site is live at `https://your-project.vercel.app`

### Option 2: Vercel CLI

```bash
npm install -g vercel
cd ~/Desktop/drake-krommenhoek-website
vercel login
vercel
```

Follow the prompts. For production: `vercel --prod`

---

## Add Custom Domain (drakekrommenhoek.com)

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add `drakekrommenhoek.com`

2. **Update DNS at your domain registrar:**

   **A Record:**
   - Name: `@`
   - Value: `76.76.21.21`

   **CNAME Record (www):**
   - Name: `www`
   - Value: `cname.vercel-dns.com`

3. **Wait 5-60 minutes** for DNS propagation

---

## File Structure

```
drake-krommenhoek-website/
├── app/
│   ├── layout.tsx              # Root layout & metadata
│   ├── page.tsx                # Main page structure
│   └── globals.css             # Global styles
├── components/
│   ├── Navbar.tsx              # Navigation
│   ├── Hero.tsx                # Home section
│   ├── Experience.tsx          # Resume content
│   ├── Upcoming.tsx            # MountainGate internship
│   ├── About.tsx               # Personal story
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Footer
├── public/images/              # All images
├── content/                    # Resume PDF
├── package.json                # Dependencies
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind config
└── README.md                   # Full documentation
```

---

## Update Resume Content

**File:** `components/Experience.tsx`

Edit the data arrays:
- `education` - Schools
- `professionalExperience` - Jobs
- `leadership` - Activities
- `skills` - Skills & interests

---

## Update Images

Add images to `public/images/` folders:
- `headshot/` - Main headshot
- `golf/` - Golf photos
- `basketball/` - Basketball photos
- `about/` - Lifestyle photos
- `family/` - Family photos

Then update image paths in `components/About.tsx` if needed.

---

## Brand Colors (Washington & Lee Blue)

Defined in `tailwind.config.ts`:
- Primary: `#003580`
- Light: `#0052CC`
- Lighter: `#4A90E2`
- Lightest: `#E8F1FA`

---

## Sections

1. **Home** - Hero with headshot & CTAs
2. **Experience** - Education, work, leadership, skills
3. **Upcoming** - MountainGate Capital internship
4. **Who Am I** - Personal story & photo grid
5. **Contact** - Contact form & links

---

## Support

Questions? Check `README.md` for detailed documentation.

**Contact:**
- drake.krommenhoek@gmail.com
- dkrommenhoek@mail.wlu.edu
