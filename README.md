# User Profile Cards — React + TypeScript

A clean, modern and responsive user profile cards page built with React, TypeScript, Vite and Tailwind CSS.

## Features

- Responsive profile-card grid
- Strong TypeScript typing for data and component props
- Reusable `ProfileCard` and `Avatar` components
- Local profile data — no backend or API
- Follow / Following toggle interaction
- Animated online indicator
- Card hover scale and elevation animation
- Profile-image hover treatment
- Responsive typography and spacing
- Accessible buttons and semantic markup
- Tailwind CSS v4 with Vite integration

## Run locally

```bash
npm install
npm run dev
```

## Folder structure

```text
user-profile-cards/
├── public/
│   └── avatars/
├── src/
│   ├── components/
│   │   ├── Avatar.tsx
│   │   ├── FollowButton.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── ProfileGrid.tsx
│   │   └── SectionHeader.tsx
│   ├── data/
│   │   └── profiles.ts
│   ├── types/
│   │   └── profile.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

