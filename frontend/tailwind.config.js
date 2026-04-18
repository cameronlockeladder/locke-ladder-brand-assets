/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#F9F8F6',
        'paper-warm': '#F1EDE5',
        ink: '#1A1C20',
        'ink-soft': '#2B2D32',
        slate: '#50636F',
        'slate-light': '#8A98A1',
        'action-blue': '#316997',
        'deep-navy': '#003B5C',
        'warm-gold': '#857650',
        bronze: '#9A5B3E',
        body: '#404040',
        rule: '#D9D4CA',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'slow-pan': {
          '0%': { transform: 'scale(1.05) translateY(0)' },
          '100%': { transform: 'scale(1.15) translateY(-2%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slow-pan': 'slow-pan 22s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
