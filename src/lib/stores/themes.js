import { writable } from 'svelte/store';
import { browser, dev } from '$app/environment';

const localStorageTheme = browser && localStorage.getItem('theme');

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'cyberpunk',
  'halloween',
  'garden',
  'forest',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'dracula',
  'cmyk',
  'business',
  'lemonade',
  'night',
  'coffee',
  'winter',
];

export const theme = {
  ...writable(localStorageTheme),
  index: themes.findIndex(themeName => themeName === localStorageTheme),
  next() {
    const themeColoredDiv = document.getElementById('theme-colored');
    const themeMeta = document.getElementById('theme-meta');
    const manifestLink = document.getElementById('manifest-link');

    this.index = (this.index + 1) % themes.length;
    const newTheme = themes[this.index];

    console.log('newTheme', newTheme);
    this.set(newTheme);
    localStorage.setItem('theme', newTheme);

    // Update top bar color and other stuff
    const baseUrl = dev
      ? 'http://localhost:4000/'
      : 'https://lopy.suaveware.dev/';
    themeColor = window.getComputedStyle(themeColoredDiv).backgroundColor;
    themeMeta.content = themeColor;

    // DYNAMIC manifest.json
    const manifest = {
      name: 'Lopy',
      short_name: 'Lopy',
      description: 'Simple budgeting app',
      theme_color: themeColor,
      background_color: themeColor,
      display: 'standalone',
      start_url: baseUrl,
      icons: [
        {
          src: `${baseUrl}logo-192.png`,
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${baseUrl}logo-512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${baseUrl}logo-maskable-512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    };
    const content = encodeURIComponent(JSON.stringify(manifest));
    const url = 'data:application/manifest+json,' + content;

    manifestLink.setAttribute('href', url);
  },
};
