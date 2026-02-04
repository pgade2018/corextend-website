import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './client/index.html',
    './client/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(0.99 0 0)',
        foreground: 'oklch(0.15 0.04 265)',
        card: 'oklch(0.99 0.001 0)',
        'card-foreground': 'oklch(0.15 0.04 265)',
        popover: 'oklch(0.99 0.001 0)',
        'popover-foreground': 'oklch(0.15 0.04 265)',
        primary: 'oklch(0.35 0.18 265)',
        'primary-foreground': 'oklch(0.98 0 0)',
        secondary: 'oklch(0.35 0.18 265)',
        'secondary-foreground': 'oklch(0.98 0 0)',
        muted: 'oklch(0.94 0.005 0)',
        'muted-foreground': 'oklch(0.5 0.04 265)',
        accent: 'oklch(0.68 0.28 40)',
        'accent-foreground': 'oklch(0.15 0.04 265)',
        destructive: 'oklch(0.577 0.245 27.325)',
        'destructive-foreground': 'oklch(0.985 0 0)',
        border: 'oklch(0.94 0.005 0)',
        input: 'oklch(0.97 0.002 0)',
        ring: 'oklch(0.68 0.28 40)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
