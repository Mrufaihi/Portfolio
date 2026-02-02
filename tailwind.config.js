/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Teal blues
        primary: {
          DEFAULT: '#143041',      // Deep teal - main brand color
          light: '#214F5F',         // Lighter teal - secondary elements
          dark: '#0C0F1E',          // Dark navy - background base
        },

        // Accent colors - Warm tones (toned down)
        accent: {
          DEFAULT: '#D66B2E',      // Orange - CTAs, links, highlights
          light: '#F5C05A',         // Golden yellow - active states, highlights
          warm: '#6B504C',          // Earthy brown - neutral accent, borders
        },

        // Background colors
        bg: {
          base: '#0C0F1E',         // Dark navy
          primary: '#143041',      // Deep teal
          secondary: '#214F5F',    // Lighter teal
        },

        // Text colors
        text: {
          primary: '#FFFFFF',       // White - headings
          secondary: '#CCCCCC',     // Light grey - body text
          tertiary: '#999999',      // Medium grey - subtle text
          accent: '#E2773A',       // Orange - links, emphasis
        },

        // Surface colors (for cards, sections)
        surface: {
          card: 'rgba(20, 48, 65, 0.6)',      // Semi-transparent teal
          'card-hover': 'rgba(33, 79, 95, 0.8)', // Lighter on hover
          border: 'rgba(226, 119, 58, 0.3)',   // Orange border
          'border-hover': 'rgba(226, 119, 58, 0.6)', // Brighter on hover
        },

        // Legacy colors (for backward compatibility during migration)
        dark: '#0C0F1E',
        'dark-gray': '#143041',
      },
      fontFamily: {
        sans: ['Rubik', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-discogame': 'linear-gradient(135deg, #0C0F1E 0%, #143041 30%, #214F5F 60%, #D66B2E 85%, #F5C05A 100%)',
        'gradient-radial': 'radial-gradient(ellipse at top left, #0C0F1E 0%, #143041 40%, #214F5F 80%, #E2773A 100%)',
        'gradient-full': 'linear-gradient(135deg, #0C0F1E 0%, #143041 25%, #214F5F 50%, #6B504C 75%, #E2773A 100%)',
      },
    },
  },
  plugins: [],
}
