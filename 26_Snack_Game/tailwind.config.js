module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3d-snake': '4px 4px 6px rgba(0, 0, 0, 0.2), -4px -4px 6px rgba(255, 255, 255, 0.7)',
        '3d-food': 'inset -2px -2px 5px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'snake-body': '#4caf50',
        'snake-head': '#388e3c',
        'food': '#ff7043',
      },
    },
  },
  plugins: [],
};
