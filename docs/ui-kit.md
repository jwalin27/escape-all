# Shared UI Package (@escape/ui)

This repo provides a shared UI kit at `packages/ui` so ESC and LMS share the same look and feel.

## Install (local workspace)

ESC (`esc/esc/package.json`) and LMS (`cyber-lms/frontend/package.json`) depend on:

```
"@escape/ui": "file:../../packages/ui"
```

## Usage

```tsx
import { Button, Card, Input, Modal, Navbar, NavbarInner } from '@escape/ui';

<Card className="p-4">
  <Input placeholder="Email" />
  <Button>Submit</Button>
</Card>
```

- Global styles and tokens come from `packages/ui/globals.css` and are imported in each app.
- Tailwind preset is `packages/ui/tailwind.preset.js` and is already referenced by both apps.

## Visual smoke test

- ESC: `/ui`
- LMS: `/ui`

## Testing

```
cd packages/ui
npm test
```
