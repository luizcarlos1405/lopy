module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    logs: false
  },
  theme: {
    extend: {},
    fontFamily: {
      display: ['"Fredoka"'],
      body: ['"Fredoka"'],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
