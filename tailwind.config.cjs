module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
    fontFamily: {
      'display': ['"Fredoka"'],
      'body': ['"Fredoka"'],
    }
	},
	plugins: [require('daisyui')]
};

