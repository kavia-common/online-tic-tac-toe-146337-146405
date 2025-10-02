# Tic Tac Toe — Remix Frontend (Ocean Professional)

A modern, minimalist two‑player Tic Tac Toe game built with Remix and Tailwind CSS. All game logic and state are handled entirely on the client—no backend, no auth.

- Framework: Remix (Vite)
- Styling: Tailwind CSS
- Theme: Ocean Professional (Blue primary `#2563EB`, Amber accent `#F59E0B`)

## Features

- Local two‑player gameplay (X vs O)
- Centered 3×3 game board
- Status panel with next player / winner / draw
- Prominent Reset, Undo, Redo controls
- Move history panel
- Smooth transitions, rounded corners, subtle shadows/gradients
- Responsive for mobile and desktop

## Getting Started

Install dependencies and start dev server:

```bash
npm install
npm run dev
```

Build for production and run:

```bash
npm run build
npm start
```

The server runs on port 3000 by default.

## Project Structure

- `app/routes/_index.tsx`: Main Tic Tac Toe UI and logic
- `app/root.tsx`: App shell, global links/meta, Tailwind include
- `app/tailwind.css`: Tailwind setup and base styles
- `tailwind.config.ts`: Tailwind config
- `vite.config.ts`: Remix + Vite config

## Theme: Ocean Professional

- Primary: `#2563EB` (blue)
- Accent/Amber: `#F59E0B`
- Error: `#EF4444`
- Background: `#f9fafb`
- Surface: `#ffffff`
- Text: `#111827`

Design guidelines applied:
- Modern, clean layout with subtle gradients
- Rounded corners and soft shadows
- Smooth hover and focus transitions
- Accessible labels for board cells and controls

## Notes

- No environment variables are required.
- No backend services are used.
- This app is safe to deploy as a static Remix app served by the Remix App Server.

## License

MIT
