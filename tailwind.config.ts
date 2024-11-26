import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F7F5',
        accent: '#000000', // Black for text
        lightText: '#9E9E9E', // For subtitles
      },
      keyframes: {
        bounceLeft: {
          '0%, 100%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(0)' },
        },
        bounceRight: {
          '0%, 100%': { transform: 'translateX(10%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'bounce-left': 'bounceLeft 1.5s infinite',
        'bounce-right': 'bounceRight 1.5s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
