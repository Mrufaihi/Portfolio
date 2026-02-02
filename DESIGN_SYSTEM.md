# Design System

## Color Palette

### Primary Colors (Teal Blues)

- `primary` / `primary-DEFAULT`: `#143041` - Deep teal (main brand color)
- `primary-light`: `#214F5F` - Lighter teal (secondary elements)
- `primary-dark`: `#0C0F1E` - Dark navy (background base)

### Accent Colors (Warm Tones)

- `accent` / `accent-DEFAULT`: `#E2773A` - Vibrant orange (CTAs, links, highlights)
- `accent-light`: `#FFCB68` - Golden yellow (active states, highlights)
- `accent-warm`: `#6B504C` - Earthy brown (neutral accent, borders)

### Background Gradient

- Gradient: `linear-gradient(135deg, #0C0F1E 0%, #143041 30%, #214F5F 60%, #E2773A 85%, #FFCB68 100%)`
- Applied to body with `background-attachment: fixed`

### Text Colors

- Primary headings: `#FFFFFF` (white)
- Body text: `#F5F5F5` (slight off-white)
- Secondary text: `#E8E8E8` (light grey)
- Tertiary text: `#D0D0D0` (medium grey)
- Accent text: `#E2773A` (orange)

### Surface Colors (Cards, Sections)

- Card background: `rgba(20, 48, 65, 0.6)` - Semi-transparent teal
- Card hover: `rgba(33, 79, 95, 0.8)` - Lighter on hover
- Border: `rgba(226, 119, 58, 0.3)` - Orange border
- Border hover: `rgba(226, 119, 58, 0.6)` - Brighter on hover

## Typography

### Font Family

- Primary: `Rubik` (from Google Fonts)
- Fallback: `system-ui, sans-serif`
- Weights: 300, 400, 500, 600, 700, 800, 900

### Type Scale

- Hero title: `text-6xl md:text-8xl` (60px - 96px)
- Section titles: `text-4xl md:text-5xl` (36px - 48px)
- Subheadings: `text-2xl` (24px)
- Body text: `text-lg` (18px)
- Small text: `text-sm` (14px)

### Font Weights

- Bold: `font-bold` (700) - Headings
- Semibold: `font-semibold` (600) - Subheadings, buttons
- Medium: `font-medium` (500) - Navigation
- Regular: Default (400) - Body text

## Usage Examples

```jsx
// Buttons
<button className="bg-accent text-white">Click</button>

// Links
<a className="text-accent hover:text-accent-light">Link</a>

// Cards
<div className="bg-primary border border-white/10">Card</div>

// Headings
<h1 className="text-white">Title</h1>
<p className="text-[#F5F5F5]">Body text</p>
```
