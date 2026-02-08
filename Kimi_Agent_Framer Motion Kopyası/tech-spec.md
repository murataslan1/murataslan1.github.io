# Bluren Portfolio - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (system fallback) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        surface: '#F5F5F5',
        'surface-light': '#FAFAFA',
        primary: '#2563EB',
        'primary-hover': '#1D4ED8',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'marquee-left': 'marquee-left 30s linear infinite',
        'marquee-right': 'marquee-right 30s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button (customize: rounded-full variant)
- Card
- Badge

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Marquee` | `direction: 'left' \| 'right'`, `children`, `speed?` | Infinite scrolling marquee |
| `Badge` | `icon`, `text`, `variant` | Colored badge pill |
| `ProjectCard` | `testimonial`, `author`, `title`, `description`, `image` | Project showcase card |
| `TechItem` | `icon`, `name`, `description` | Tech stack item |
| `StatCard` | `number`, `label`, `image`, `imagePosition` | Achievement stat card |
| `EmailCard` | `label`, `email` | Contact email card |
| `SocialButton` | `icon`, `href` | Social link button |

### Section Components

| Component | Description |
|-----------|-------------|
| `HeroSection` | Avatar, title, subtitle, marquee badges |
| `InfoCardSection` | Profile info card with social buttons |
| `WhatIDoSection` | Two-column feature cards |
| `ProjectsSection` | Projects carousel/header |
| `TechStackSection` | Tech stack grid |
| `AchievementsSection` | Stats with alternating layout |
| `FooterSection` | Contact CTA + footer links |

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page Load Fade | Framer Motion | `initial={{ opacity: 0, y: 20 }}` `animate={{ opacity: 1, y: 0 }}` with stagger |
| Hero Avatar | Framer Motion | Scale from 0.9 to 1 with spring |
| Marquee Scroll | CSS Animation | `@keyframes` with `translateX`, infinite linear |
| Section Reveal | Framer Motion | `whileInView` with fade + slide up |
| Card Hover | Tailwind + FM | `whileHover={{ y: -4 }}` with shadow transition |
| Button Hover | Tailwind | `hover:scale-102` transition |
| Stagger Children | Framer Motion | `staggerChildren: 0.1` in parent variants |
| Number Count Up | Framer Motion | `useMotionValue` + `useTransform` for counting |

### Animation Variants

```typescript
// Fade up variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Card hover
const cardHover = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
  hover: { 
    y: -4, 
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    transition: { duration: 0.2 }
  }
};
```

## 5. Project File Structure

```
src/
├── components/
│   ├── ui/                    # shadcn components
│   ├── Marquee.tsx
│   ├── Badge.tsx
│   ├── ProjectCard.tsx
│   ├── TechItem.tsx
│   ├── StatCard.tsx
│   ├── EmailCard.tsx
│   └── SocialButton.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── InfoCardSection.tsx
│   ├── WhatIDoSection.tsx
│   ├── ProjectsSection.tsx
│   ├── TechStackSection.tsx
│   ├── AchievementsSection.tsx
│   └── FooterSection.tsx
├── hooks/
│   └── useInView.ts
├── lib/
│   └── utils.ts
├── assets/
│   └── images/
├── App.tsx
├── main.tsx
└── index.css
```

## 6. Package Installation

```bash
# Already included in shadcn init
# - tailwindcss
# - postcss
# - autoprefixer
# - clsx
# - tailwind-merge
# - class-variance-authority

# Additional packages needed
npm install framer-motion lucide-react
```

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, reduced text sizes |
| Tablet | 640-1024px | 2 columns where applicable |
| Desktop | > 1024px | Full layout as designed |

## 8. Performance Considerations

- Use `will-change: transform` on marquee elements
- Lazy load project images
- Use `transform` and `opacity` for animations (GPU accelerated)
- Add `prefers-reduced-motion` media query support
- Optimize images for web (WebP where possible)
