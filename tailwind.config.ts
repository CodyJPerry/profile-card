import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        5: '1.25rem',
        'profile-card': '21.25rem',
      },
      height: {
        5: '1.25rem',
        'profile-card': '26.75rem',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
export default config;
