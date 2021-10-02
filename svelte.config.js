import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
