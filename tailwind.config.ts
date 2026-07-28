import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#E6D4C2',
        foreground: '#222222',
        card: '#FFFFFF',
        'card-foreground': '#222222',
        primary: '#6F2432',
        'primary-foreground': '#FFFFFF',
        muted: 'rgba(111,36,50,0.07)',
        'muted-foreground': '#6B5C52',
        accent: '#8C3044',
        'accent-foreground': '#FFFFFF',
        border: 'rgba(111,36,50,0.10)',
        ring: '#6F2432',
        destructive: '#DC2626',
        'destructive-foreground': '#FFFFFF',
        // CSS variable bridge
        popover: '#FFFFFF',
        'popover-foreground': '#222222',
        secondary: '#F5EDE4',
        'secondary-foreground': '#222222',
        input: 'rgba(111,36,50,0.12)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '1.875rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 8px 32px -8px rgba(111,36,50,0.14)',
        card: '0 2px 20px rgba(111,36,50,0.08)',
        glow: '0 0 48px -8px rgba(111,36,50,0.28)',
        glass: '0 8px 32px rgba(111,36,50,0.10), inset 0 1px 0 rgba(255,255,255,0.65)',
      },
      keyframes: {
        'float-a': {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-28px) translateX(18px)' },
        },
        'float-b': {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(22px) translateX(-22px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float-a': 'float-a 16s ease-in-out infinite',
        'float-b': 'float-b 20s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
