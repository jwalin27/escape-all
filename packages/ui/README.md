# @escape/ui

Shared UI kit for ESC + LMS.

## Install

```bash
npm install git+https://github.com/escape-all/escape-ui.git#v0.1.0
```

## Usage

```ts
import { Button, Card, Input, Modal } from "@escape/ui";
import "@escape/ui/globals.css";
```

Tailwind preset:

```js
// tailwind.config.js
module.exports = {
  presets: [require("@escape/ui/tailwind.preset.js")],
  content: ["./src/**/*.{js,ts,jsx,tsx}"]
};
```

## Build

```bash
npm install
npm run build
```

Outputs:
- `dist/index.js`
- `dist/index.d.ts`

## Release

```bash
git add .
git commit -m "Make @escape/ui package-ready"
git tag v0.1.0
git push --follow-tags
```
