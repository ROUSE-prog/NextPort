import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          background: '#F7F7F5',
          accent: '#000000', // Black for text
          lightText: '#9E9E9E', // For subtitles
        },
      },
    },
  },    
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
