# Scroll Animations Design

**Date:** 2026-03-25
**Project:** drake-krommenhoek-website
**Status:** Approved

---

## Overview

Add smooth fade-in-on-scroll animations to the Experience, Upcoming, About, and Contact sections of the Next.js personal website. The Hero section is excluded (loads immediately). Uses the native Intersection Observer API with no external dependencies.

---

## Architecture

### New File: `hooks/useInView.ts`

A reusable custom hook that wraps `IntersectionObserver`.

**Signature:**
```ts
function useInView<T extends Element = Element>(options?: UseInViewOptions): [React.RefObject<T>, boolean]
```

**Options:**
- `threshold` (default: `0.15`) — fraction of element visible before triggering
- `rootMargin` (default: `'0px 0px -60px 0px'`) — 60px bottom offset so elements trigger before the very edge of the viewport
- `triggerOnce` (default: `true`) — disconnect observer after first trigger (animations don't reverse on scroll-up)

**Exported helpers:**
- `fadeInStyle(isInView: boolean, delay?: number): React.CSSProperties` — returns the animation style object:
  - Hidden: `opacity: 0`, `transform: translateY(20px)`
  - Visible: `opacity: 1`, `transform: translateY(0)`
  - Transition (e.g., delay=80): `opacity 0.6s ease-out 80ms, transform 0.6s ease-out 80ms`

---

## Section Animation

Applied to: **Experience**, **Upcoming**, **About**, **Contact**. Not applied to Hero.

Each section component:
1. Calls `useInView<HTMLElement>()`
2. Attaches the returned `ref` to its `<section>` element
3. Spreads `fadeInStyle(isInView)` into the section's existing `style` prop

`Upcoming.tsx` currently has no `'use client'` directive — it will be added.

---

## Experience Card Stagger

Because hooks cannot be called inside `.map()` loops, a small `AnimatedCard` subcomponent is colocated in `Experience.tsx`. It calls `useInView` internally and wraps card content.

```tsx
const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  return <div ref={ref} style={fadeInStyle(isInView, delay)}>{children}</div>;
};
```

**Stagger per subsection** (delay resets at each subsection boundary):
- Education cards: `delay = index * 80ms` → 0ms, 80ms
- Professional cards: `delay = index * 80ms` → 0ms, 80ms, 160ms, 240ms
- Leadership cards: `delay = index * 80ms` → 0ms, 80ms, 160ms
- Skills grid tiles: `delay = index * 80ms` → 0ms, 80ms, 160ms (the three category cards — Technical Skills, Certifications, Interests — not the individual `<span>` pill tags inside them)

Each `AnimatedCard` has its own `IntersectionObserver`, so cards animate as they enter the viewport naturally while scrolling. The per-index delay ensures a cascade even when multiple cards are visible simultaneously.

---

## Files Changed

| File | Change |
|------|--------|
| `hooks/useInView.ts` | **Create** — at project root alongside `components/`, `lib/`; hook + `fadeInStyle` helper |
| `components/Experience.tsx` | Add `AnimatedCard` subcomponent, wrap all card `<div>`s |
| `components/Upcoming.tsx` | Add `'use client'`, add `useInView` on `<section>` |
| `components/About.tsx` | Add `useInView` on `<section>` |
| `components/Contact.tsx` | Add `useInView` on `<section>` |

---

## Non-Goals

- No animation on the Hero section
- No animation on the Writing page (separate page, out of scope)
- No external animation libraries
- No CSS keyframes or `globals.css` changes
- No changes to existing hover transitions on cards
