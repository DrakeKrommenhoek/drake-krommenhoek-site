# Scroll Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add fade-in-on-scroll animations to the Experience, Upcoming, About, and Contact sections using a reusable `useInView` hook built on the native IntersectionObserver API.

**Architecture:** A `useInView` hook returns `[ref, isInView]` and a `fadeInStyle` helper produces the animation style object. Sections attach the ref directly to their `<section>` element and spread the style. Experience cards are wrapped by a colocated `AnimatedCard` subcomponent (required since hooks cannot be called inside `.map()`), with an `index`-based delay for stagger.

**Tech Stack:** Next.js 14 App Router, TypeScript, React 18, inline `React.CSSProperties` (no test framework present — verification is TypeScript compilation + visual browser check)

---

## File Map

| Path | Action | Responsibility |
|------|--------|---------------|
| `hooks/useInView.ts` | **Create** | IntersectionObserver hook + `fadeInStyle` helper |
| `components/About.tsx` | **Modify** | Add section-level fade-in |
| `components/Contact.tsx` | **Modify** | Add section-level fade-in |
| `components/Upcoming.tsx` | **Modify** | Add `'use client'` + section-level fade-in |
| `components/Experience.tsx` | **Modify** | Add `AnimatedCard` subcomponent + wrap all cards with stagger |

---

## Task 1: Create `hooks/useInView.ts`

**Files:**
- Create: `hooks/useInView.ts`

- [ ] **Step 1: Create the file**

Create `hooks/useInView.ts` at the project root (same level as `components/`, `lib/`):

```ts
'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends Element = Element>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView] as const;
}

export function fadeInStyle(isInView: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors. If you see `Cannot find name 'React'` on the `React.CSSProperties` return type, add `import type React from 'react';` at the top of the file.

- [ ] **Step 3: Commit**

```bash
git add hooks/useInView.ts
git commit -m "feat: add useInView hook with fadeInStyle helper"
```

---

## Task 2: Animate the About Section

**Files:**
- Modify: `components/About.tsx`

- [ ] **Step 1: Add imports and hook call**

At the top of `components/About.tsx`, add:

```tsx
import { useInView, fadeInStyle } from '@/hooks/useInView';
```

Inside the `About` component body (before the `return`), add:

```tsx
const [ref, isInView] = useInView<HTMLElement>();
```

- [ ] **Step 2: Attach ref and animation style to the section element**

Find the opening `<section` tag (line ~5):

```tsx
<section id="about" className="bg-white">
```

Replace with:

```tsx
<section
  id="about"
  ref={ref}
  className="bg-white"
  style={fadeInStyle(isInView)}
>
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Visual check**

Start the dev server (`npm run dev`) and navigate to `http://localhost:3000`. Scroll past the Experience section to the About section. It should fade in and slide up as it enters the viewport. Reload the page — About should be invisible on load and animate in as you scroll to it.

- [ ] **Step 5: Commit**

```bash
git add components/About.tsx
git commit -m "feat: add fade-in-on-scroll to About section"
```

---

## Task 3: Animate the Contact Section

**Files:**
- Modify: `components/Contact.tsx`

- [ ] **Step 1: Add import**

`Contact.tsx` already has `'use client'` and imports from `react`. Add to its imports:

```tsx
import { useInView, fadeInStyle } from '@/hooks/useInView';
```

- [ ] **Step 2: Add hook call**

Inside the `Contact` component, after the existing `useState` calls, add:

```tsx
const [ref, isInView] = useInView<HTMLElement>();
```

- [ ] **Step 3: Attach ref and style to the section element**

Find (line ~50):

```tsx
<section id="contact" style={{ backgroundColor: '#F7F5F0' }}>
```

Replace with:

```tsx
<section
  id="contact"
  ref={ref}
  style={{ backgroundColor: '#F7F5F0', ...fadeInStyle(isInView) }}
>
```

Note the spread — the section already has a `style` prop with `backgroundColor`, so use object spread to merge.

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Visual check**

Scroll to the Contact section. It should fade in as it enters the viewport.

- [ ] **Step 6: Commit**

```bash
git add components/Contact.tsx
git commit -m "feat: add fade-in-on-scroll to Contact section"
```

---

## Task 4: Animate the Upcoming Section

**Files:**
- Modify: `components/Upcoming.tsx`

- [ ] **Step 1: Add `'use client'` directive**

`Upcoming.tsx` is currently a server component. Add this as the very first line of the file (before any imports):

```tsx
'use client';
```

- [ ] **Step 2: Add imports**

After the `'use client'` directive, add:

```tsx
import { useInView, fadeInStyle } from '@/hooks/useInView';
```

- [ ] **Step 3: Add hook call**

Inside the `Upcoming` component body (before the `return`), add:

```tsx
const [ref, isInView] = useInView<HTMLElement>();
```

- [ ] **Step 4: Attach ref and style to the section element**

Find (line ~3):

```tsx
<section id="upcoming" className="bg-white">
```

Replace with:

```tsx
<section
  id="upcoming"
  ref={ref}
  className="bg-white"
  style={fadeInStyle(isInView)}
>
```

- [ ] **Step 5: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 6: Visual check**

Scroll to the Upcoming section. It should animate in.

- [ ] **Step 7: Commit**

```bash
git add components/Upcoming.tsx
git commit -m "feat: add fade-in-on-scroll to Upcoming section"
```

---

## Task 5: Animate the Experience Section with Staggered Cards

**Files:**
- Modify: `components/Experience.tsx`

This is the most involved task. You'll add an `AnimatedCard` subcomponent (colocated at the top of the file), apply it to every card map, and animate the section header independently.

- [ ] **Step 1: Add import**

At the top of `components/Experience.tsx`, add:

```tsx
import { useInView, fadeInStyle } from '@/hooks/useInView';
```

- [ ] **Step 2: Add the `AnimatedCard` subcomponent**

After the existing `BulletItem` component (around line 29), add:

```tsx
const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} style={fadeInStyle(isInView, delay)}>
      {children}
    </div>
  );
};
```

- [ ] **Step 3: Animate the section itself**

Inside the `Experience` component body (before the `return`), add:

```tsx
const [sectionRef, sectionInView] = useInView<HTMLElement>();
```

Find the opening `<section` tag:

```tsx
<section id="experience" style={{ backgroundColor: '#F7F5F0' }}>
```

Replace with:

```tsx
<section
  id="experience"
  ref={sectionRef}
  style={{ backgroundColor: '#F7F5F0', ...fadeInStyle(sectionInView) }}
>
```

- [ ] **Step 4: Wrap Education cards**

Find the Education `.map()` block (around line 166):

```tsx
{education.map((edu, index) => (
  <div key={index} style={eduCardStyle}>
```

Replace with:

```tsx
{education.map((edu, index) => (
  <AnimatedCard key={index} delay={index * 80}>
    <div style={eduCardStyle}>
```

Close the new wrapper — find the matching closing `</div>` for `eduCardStyle` (after the `</ul>`) and add `</AnimatedCard>` after it:

```tsx
    </div>
  </AnimatedCard>
))}
```

- [ ] **Step 5: Wrap Professional Experience cards**

Find the Professional `.map()` block (around line 207):

```tsx
{professionalExperience.map((exp, index) => (
  <div key={index} style={cardStyle}>
```

Replace with:

```tsx
{professionalExperience.map((exp, index) => (
  <AnimatedCard key={index} delay={index * 80}>
    <div style={cardStyle}>
```

Add the closing wrapper after the inner `</div>`:

```tsx
    </div>
  </AnimatedCard>
))}
```

- [ ] **Step 6: Wrap Leadership cards**

Find the Leadership `.map()` block (around line 241):

```tsx
{leadership.map((item, index) => (
  <div key={index} style={cardStyle}>
```

Replace with:

```tsx
{leadership.map((item, index) => (
  <AnimatedCard key={index} delay={index * 80}>
    <div style={cardStyle}>
```

Add the closing wrapper after the inner `</div>`:

```tsx
    </div>
  </AnimatedCard>
))}
```

- [ ] **Step 7: Wrap Skills grid tiles**

Find the Skills `.map()` block (around line 277):

```tsx
{[
  { label: 'Technical Skills', items: skills.technical },
  { label: 'Certifications', items: skills.certifications },
  { label: 'Interests', items: skills.interests },
].map(({ label, items }) => (
  <div key={label} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E4', padding: '1.5rem' }}>
```

Replace with (stagger index comes from the outer array — use the array index by switching to index-based map):

```tsx
{[
  { label: 'Technical Skills', items: skills.technical },
  { label: 'Certifications', items: skills.certifications },
  { label: 'Interests', items: skills.interests },
].map(({ label, items }, index) => (
  <AnimatedCard key={label} delay={index * 80}>
    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E4', padding: '1.5rem' }}>
```

Add closing wrapper after the inner `</div>`:

```tsx
    </div>
  </AnimatedCard>
))}
```

- [ ] **Step 8: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors. Common issue to watch for: if the `key` prop was previously on the outer `<div>`, it must now be on `<AnimatedCard>` instead (as shown above).

- [ ] **Step 9: Visual check**

Scroll through the Experience section. Expected behaviour:
- The entire section fades in as its top enters the viewport
- Within each subsection (Education, Professional, Leadership, Skills), cards cascade in one-by-one with an 80ms gap between each
- No card animates more than once (triggerOnce: true)

- [ ] **Step 10: Commit**

```bash
git add components/Experience.tsx
git commit -m "feat: add staggered fade-in-on-scroll to Experience section cards"
```

---

## Final Verification

- [ ] Run `npx tsc --noEmit` — zero errors
- [ ] Run `npm run build` — build succeeds
- [ ] Open `http://localhost:3000` and scroll through the full page:
  - Hero: **no animation** — loads instantly at full opacity ✓
  - Experience: section fades in, then cards cascade per subsection ✓
  - Upcoming: fades in ✓
  - About: fades in ✓
  - Contact: fades in ✓
