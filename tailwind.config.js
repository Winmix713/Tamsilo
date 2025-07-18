module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#0E0E12',
        neon: '#9c7cf5',
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
