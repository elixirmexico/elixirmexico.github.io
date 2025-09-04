# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 3000 with auto-open
- `npm run build` - Build for production (runs TypeScript check + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on .ts/.tsx files (max-warnings 0)

### TypeScript
- `tsc` - Run TypeScript compiler directly for type checking

## Architecture

This is a React + TypeScript + Vite web application for the Elixir México community website.

### Tech Stack
- **Build Tool**: Vite 5 with React plugin
- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom purple color palette
- **Language**: TypeScript with strict mode enabled
- **Linting**: ESLint with TypeScript and React Hooks plugins

### Component Structure
The application follows a component-based architecture:
- `src/App.tsx` - Main app component that orchestrates the layout
- `src/components/` - All UI components (Header, Hero, Features, Community, Footer)
- Components are functional React components using TypeScript

### Key Configuration
- **TypeScript**: Strict mode enabled with no unused locals/parameters checks
- **Vite**: Configured to use port 3000 and auto-open browser on dev
- **Tailwind**: Custom purple color palette extended for brand consistency
- **Build Output**: `dist/` directory contains production build

### Development Notes
- All components should be TypeScript functional components
- Tailwind CSS classes are used for styling (no separate CSS modules)
- The site uses a gradient background theme (purple-50 to indigo-50)
- Public assets are served from `/public` directory