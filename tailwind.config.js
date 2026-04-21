/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan:   '#00D4FF',
          blue:   '#4361EE',
          purple: '#7C3AED',
          dark:   '#0A0F1E',
          darker: '#050A14',
          card:   '#0D1526',
          border: '#1A2540',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00D4FF 0%, #4361EE 50%, #7C3AED 100%)',
        'gradient-brand-r': 'linear-gradient(135deg, #7C3AED 0%, #4361EE 50%, #00D4FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #050A14 0%, #0A0F1E 100%)',
        'glow-card': 'radial-gradient(ellipse at top, rgba(67,97,238,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-cyan':   '0 0 40px rgba(0,212,255,0.25)',
        'glow-purple': '0 0 40px rgba(124,58,237,0.25)',
        'glow-blue':   '0 0 40px rgba(67,97,238,0.3)',
        'card':        '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'gradient-x':   'gradientX 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%':      { boxShadow: '0 0 60px rgba(124,58,237,0.5)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
