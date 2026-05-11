module.exports = {
  darkMode: 'class',
  content: [
    './entrypoints/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          background: 'var(--i-background)',
          tone: 'var(--i-background-tone)',
          primaryLight: 'var(--i-primary-light)',
          primaryDark: 'var(--i-primary-dark)',
          secondaryLight: 'var(--i-secondary-light)',
          secondaryDark: 'var(--i-secondary-dark)',
          link: 'var(--i-link-primary)',
        },
      },
    },
  },
  plugins: [],
};
