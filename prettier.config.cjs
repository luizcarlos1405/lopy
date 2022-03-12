module.exports = {
  trailingComma: "es5",
  singleQuote: true,
  arrowParens: "avoid",
  bracketSpacing: true,
  svelteStrictMode: false,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
};
