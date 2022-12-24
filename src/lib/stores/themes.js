import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const localStorageTheme = browser && localStorage.getItem('theme');

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'corporate',
  'synthwave',
  'retro',
  'valentine',
  'halloween',
  'garden',
  'lofi',
  'pastel',
  'fantasy',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'night',
  'winter',
];

let index = themes.findIndex(themeName => themeName === localStorageTheme);

export const theme = {
  ...writable(localStorageTheme),
  next() {
    const themeColoredDiv = document.getElementById('theme-colored');
    const themeMeta = document.getElementById('theme-meta');
    const manifestLink = document.getElementById('manifest-link');

    index = (index + 1) % themes.length;
    const newTheme = themes[index];

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
