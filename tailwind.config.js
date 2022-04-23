module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#e8eddf',
        'light-purple': '#44355b',
        'mid-purple': '#31263e',
        'dark-purple': '#221e22',
        'light-green': '#44ddae',
        'mid-green': '#1fc19e',
        'dark-green': '#0b987c'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
