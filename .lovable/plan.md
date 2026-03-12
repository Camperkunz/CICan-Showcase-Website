# ImpAct-Climate Micro-Grants Microsite

## Overview

A bilingual (EN/FR) microsite for CICan showcasing ImpAct-Climate Micro-Grant project reports. Clean, accessible, professional design with a "Green Tech meets Academic" aesthetic.

## Pages

### 1. Home Page — Project Gallery

- **Nav Bar**: CICan logo/title + EN/FR language toggle (right side)
- **Hero Section**: Title, brief description of ImpAct-Climate initiative, subtle green gradient or nature-inspired accent
- **Filter Bar**: Theme dropdown (Food, Managment, Indigenous Knowledges, Green Buildings and Land Management etc.), Province dropdown, College Name search input — all filters work together
- **Project Grid**: Responsive card grid (3 cols desktop, 2 tablet, 1 mobile). Each card shows: college logo, preview image, project title, theme badge. Cards link to detail page

### 2. Project Detail Page

- **Header**: College logo, project title, theme tag, college address
- **Sidebar/Info Block**: Project lead name, grant amount/details
- **Key Highlights**: Visual grid with icons showing achievements, stats, and facts
- **Photo Gallery**: 3-4 full-size images with captions
- **Future Outlook**: Highlighted call-out box for next steps
- **Back button**: Returns to gallery (preserving filter state)

## Technical Approach

- **i18next** for EN/FR bilingual support — all UI strings in translation files, project data in a centralized `data.json` with both language versions
- **Centralized `data.json**` containing all project reports with fields for both languages
- **React Router** for SPA navigation (Home `/` and Detail `/project/:id`)
- **Tailwind CSS** with a green-accented, minimalist color palette (white space heavy)
- **WCAG 2.1 compliance**: semantic HTML, aria-labels, high contrast ratios, keyboard navigation, focus indicators
- **Fully responsive** layout optimized for mobile and desktop
- **Sample data** for 6-8 demo projects to showcase the full filtering and detail experience

## Color Palette

- Primary green: forest/emerald tones for eco theme
- Neutral whites and light grays for backgrounds
- Dark charcoal for text (high contrast)
- Accent badges per theme (color-coded)