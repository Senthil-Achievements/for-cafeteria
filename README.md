# Cafeteria Frontend

A responsive, visually stunning web application for browsing and ordering from a corporate cafeteria menu. Features a highly stylized "Black Neon" dark theme with glowing interactive elements and animated background paths.

## Live Demo

- GitHub Pages: [https://senthil-achievements.github.io/for-cafeteria/](https://senthil-achievements.github.io/for-cafeteria/)

## Key Features

- **Dynamic Dark Theme**: Premium black backdrop with neon accents.
- **Interactive Menu**: Browse categorized food items with clear visibility and "Add to Cart" functionality.
- **Custom Add-Ons**: Modal system for customizing items before checkout.
- **Secure Mock Checkout**: Simulated UPI payment gateway to process orders safely.
- **Cross-Platform Ready**: Designed as a responsive React web app, fully compatible with mobile, tablet, and desktop viewports. Capacitor JS is pre-configured for future Android/iOS native app generation.

## How to Run Locally

To get this project running on your own machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Senthil-Achievements/frontend-only.git
   ```

2. Navigate into the project directory:
   ```bash
   cd frontend-only
   ```

3. Install the required Node dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the local development server:
```bash
npm run dev
```
Open the provided `localhost` link (usually `http://localhost:5173`) in your browser to view the application.

## Technologies Used
- React 19
- Vite
- Tailwind CSS 
- TypeScript
- Framer Motion
- Lucide React Iconography    tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
