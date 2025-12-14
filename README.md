# Zenply - Strategic Tech Consultancy Landing Page

A modern, modular landing page built with React, TypeScript, and Tailwind CSS v4, featuring scroll animations, internationalization, and a premium "Deep Space" aesthetic.

## 🎨 Design Prompt for AI Agents

If you want to recreate a similar design using an AI design agent, use the following prompt structure:

### Core Design Brief

```
Create a modern landing page for a strategic technology consultancy with these specifications:

AESTHETIC & STYLE:
- Design system: Modular Bento Grid layout (asymmetric card grid)
- Color palette: Deep organic purple-black (#0D0915) background with Bamboo Green (#76B947) primary and Deep Purple (#5D4296) secondary accents
- Visual style: "Deep Space Tech" - dark, premium, with subtle glassmorphism and ambient lighting effects
- Typography: Large, fluid headings (Inter/similar sans-serif), monospace accents for technical elements
- Inspiration: ChainGPT Labs, Wodniack.dev, Patrick Heng portfolio aesthetics

LAYOUT STRUCTURE:
1. Hero Section (80vh):
   - Centered layout with large typography
   - Animated gradient text on key word ("Future")
   - Subtle badge/pill with status indicator
   - Parallax background with floating ambient lights
   - Scroll indicator arrow

2. Services Grid (Bento Grid):
   - Asymmetric 3-column responsive grid
   - Cards with varying spans (1-2 columns)
   - Each card: title, description, icon, custom header visual
   - Glassmorphic backgrounds with subtle borders
   - Hover effects: lift, glow, border color change
   - Staggered entrance animations on scroll

3. Methodology Section:
   - 3-step process timeline
   - Horizontal cards with top border accent
   - Sequential reveal animation (left to right)
   - Hover effects on individual steps

4. CTA Section:
   - Large centered typography
   - Prominent call-to-action button with glow effect
   - Background ambient light (blurred gradient sphere)

5. Footer:
   - Minimal, glassmorphic background
   - Social links with hover states

INTERACTIONS & ANIMATIONS:
- Parallax scrolling on background elements (different speeds)
- Hero fade-out on scroll
- Staggered grid item reveals (0.15s delay between items)
- Smooth hover transitions (lift, glow, color)
- Language switcher with pill toggle design

TECHNICAL REQUIREMENTS:
- Framework: React + TypeScript + Vite
- Styling: Tailwind CSS v4 (CSS-first config with @theme)
- Animations: Framer Motion
- Icons: Lucide React
- Internationalization: EN/ES with context-based translations
- Responsive: Mobile-first, breakpoints at md (768px)

BRANDING ELEMENTS:
- Company: "Zenply" (Strategic Technology Partners)
- Tagline: "Building the Future today"
- Services: Enterprise SaaS, Digital Portfolio, Strategic Consulting, Process Engineering
- Methodology: Strategic Alignment → Modular Build → Seamless Scale

SPECIFIC VISUAL EFFECTS:
- Grid pattern overlay on background (subtle)
- Radial gradient ambient lights (purple/green, heavily blurred)
- Glassmorphism: backdrop-blur with white/5 backgrounds
- Border glow effects on hover
- Animated gradient text (shimmer effect)
- Floating decorative elements (spinning dashed circles)
```

### Key Design Tokens

```css
/* Colors */
--color-background: #0D0915 (Deep Purple-Black)
--color-surface: #171124
--color-surface-highlight: #221936
--color-primary: #76B947 (Bamboo Green)
--color-secondary: #5D4296 (Zenply Purple)

/* Typography Scale */
Hero H1: 6xl → 9xl (responsive)
Section H2: 4xl → 6xl
Card Title: 2xl
Body: xl → 2xl (hero), base (cards)

/* Spacing */
Section padding: py-32 to py-40
Card gap: gap-4 to gap-8
Container: max-w-7xl mx-auto

/* Effects */
Blur intensity: 130px - 150px (ambient lights)
Border opacity: white/5 to white/10
Backdrop blur: backdrop-blur-lg to backdrop-blur-2xl
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   └── BentoGrid.tsx      # Grid container & card components
├── translations.ts         # i18n dictionary (EN/ES)
├── App.tsx                # Main application & layout
├── index.css              # Tailwind config & global styles
└── main.tsx               # Entry point

public/
└── favicon.png            # Zenply brand favicon
```

## 🌍 Internationalization

The site supports English and Spanish. Toggle between languages using the floating switcher (top-right).

Translations are managed in `src/translations.ts` with a simple dictionary structure.

## 🎯 Key Features

- ✅ Modular Bento Grid design
- ✅ Scroll-triggered animations (parallax, staggered reveals)
- ✅ Bilingual support (EN/ES)
- ✅ Glassmorphism & ambient lighting effects
- ✅ Fully responsive (mobile → desktop)
- ✅ Premium "Deep Space Tech" aesthetic
- ✅ Optimized performance (Vite + React 19)

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling (CSS-first config)
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📝 License

MIT

---

**Built with ❤️ for Zenply Consulting**
