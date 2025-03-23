import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ["var(--font-hero-new)", "sans"], // Default Font
        neue: ["var(--font-neue-reman-gt)", "sans"], // Optional Font
      },
      boxShadow: {
        'custom': '0px 0px 49.5px #00000096',
      },
      colors: {
        'light-green': {
            DEFAULT: '#AEE9B6',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FFFFFF',
            300: '#EEFAF0',
            400: '#CEF2D3',
            500: '#AEE9B6',
            600: '#82DD8E',
            700: '#56D166',
            800: '#33BC46',
            900: '#279035',
            950: '#217A2D'
        },
        'mid-light-green': {
            DEFAULT: '#89D991',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#E6F7E7',
            300: '#C7EDCB',
            400: '#A8E3AE',
            500: '#89D991',
            600: '#5FCB69',
            700: '#3BB747',
            800: '#2D8C37',
            900: '#206226',
            950: '#194D1E'
        },
        'purples': {
            DEFAULT: '#240D4B',
            50: '#7234DC',
            100: '#6725D6',
            200: '#561FB3',
            300: '#451991',
            400: '#35136E',
            500: '#240D4B',
            600: '#0D051B',
            700: '#000000',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },
        'light-purples': {
            DEFAULT: '#41286C',
            50: '#9B7DCF',
            100: '#906EC9',
            200: '#7950BE',
            300: '#653EA8',
            400: '#53338A',
            500: '#41286C',
            600: '#281943',
            700: '#100A1A',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },
        'dark-green': {
            DEFAULT: '#022221',
            50: '#0CCFC9',
            100: '#0BBCB7',
            200: '#099691',
            300: '#076F6C',
            400: '#044946',
            500: '#022221',
            600: '#000000',
            700: '#000000',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },
        'mine-shaft': {
            DEFAULT: '#232323',
            50: '#7F7F7F',
            100: '#757575',
            200: '#606060',
            300: '#4C4C4C',
            400: '#373737',
            500: '#232323',
            600: '#070707',
            700: '#000000',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },

    },
    
    },
  },
  plugins: [],
};
export default config;
