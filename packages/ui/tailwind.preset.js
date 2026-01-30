import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let defaultTheme;
try {
  defaultTheme = require('tailwindcss/defaultTheme');
} catch (err) {
  defaultTheme = require(require.resolve('tailwindcss/defaultTheme', { paths: [process.cwd()] }));
}

export default {
  theme: {
    extend: {
      colors: {
        'esc-bg': '#ece7dd',
        'esc-ink': '#1a1a1a',
        'esc-card': '#ffffff',
        'esc-card-border': '#d8c7b3',
        'esc-keycap': '#f5e0ba',
        'esc-keycap-ink': '#2f1b10',
        'esc-keycap-border': '#ad7c65',
        'esc-keycap-shadow': '#984a39'
      },
      fontFamily: {
        sans: ['Special Elite', ...defaultTheme.fontFamily.sans],
        mono: ['Special Elite', ...defaultTheme.fontFamily.mono]
      }
    }
  }
};
