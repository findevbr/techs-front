/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      'fd-background': "#F3F4F5",
      'fd-blue': "#45AAF2",
      'fd-yellow': "#f1c40f",
      'fd-yellow-ghost': "rgba(241, 196, 15, 0.1)",
      'fd-hover': "#F2F2F2",
      'fd-grey': "#666",
      'fd-light': "#ddd",
      'fd-description': "#B9B9B9",
      'fd-descriptionDark': "rgba(0, 0, 0, 0.30)",
      'fd-card': "#fff",
      'fd-primary': "#45AAF2",
      'fd-danger': "#FC5C65",
      'fd-success': "#2ECC71",
      'fd-ghost': "rgba(69, 170, 242, 0.15)",
      'fd-ghost-bg': "rgba(69, 170, 242, 0.05)",
      'fd-ghost-danger': "rgba(252, 92, 101, 0.15)",
      'fd-ghost-dark': "rgba(0, 0, 0, 0.15)",
      'fd-transparent': "transparent",
    },
    dropShadow: {
      'fd-shadow': '0px 2px 5px rgba(0, 0, 0, 0.1)',
      'perfect-shadow': "0px 199px 80px rgba(0, 0, 0, 0.01), 0px 112px 67px rgba(0, 0, 0, 0.05), 0px 50px 50px rgba(0, 0, 0, 0.09);",
    },
    borderRadius: {
      'fd-radius-sm': '3px',
      'fd-radius-lg': '6px',
      'fd-radius-xg': '12px',
    },
    extend: {
      keyframes: {
        fade: {
          '0%, ': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      transitionProperty: { 
        'width': 'width',
        'heigth': 'heigth'
      },
    },
  },
  plugins: [],
}
