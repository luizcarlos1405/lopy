# Lopy

Simple and beautiful budgeting app.

## Troubleshooting

If you see an error related to the static adapter try replacing the code from
`node_modules/@sveltejs/adapter-static/index.js` with

```javascrip t
'use strict';

module.exports = function({ pages = 'build', assets = pages, fallback } = {}) {
  /** @type {import('@sveltejs/kit').Adapter} */
  const adapter = {
    name: '@sveltejs/adapter-static',

    async adapt({ utils }) {
      utils.copy_static_files(assets);
      utils.copy_client_files(assets);

      await utils.prerender({
        fallback,
        all: !fallback,
        dest: pages,
      });
    },
  };

  return adapter;
};
```
