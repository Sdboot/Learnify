# Learnify - Kids' Library Website

A beautiful, modern, and fully functional kids' book library website built with Svelte, TypeScript, and Tailwind CSS.

## Features

✨ **Core Features:**
- 🔍 Smart searchable library with full-text search
- 📚 Browse books by category, subject, level, and author
- 💖 Save favorite books to local storage
- 🌙 Beautiful light and dark mode with theme persistence
- 📱 Fully responsive and mobile-friendly design
- ⚡ Client-side routing with SvelteKit
- 🎨 Polished, recruiter-friendly UI with smooth animations
- ⭐ Book ratings and reviews
- 📊 Advanced filtering capabilities

## Tech Stack

- **Frontend Framework:** Svelte 5 with SvelteKit
- **Styling:** Tailwind CSS v4
- **State Management:** Svelte Stores
- **Icons:** Lucide Svelte
- **HTTP Client:** Axios
- **Routing:** SvelteKit Client-Side Routing
- **Storage:** Browser LocalStorage API
- **API Integration:** Open Library API & Google Books API (ready)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Learnify
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

Build for production:
```bash
npm run build
```

Preview production build locally:
```bash
npm run preview
```

## Features Breakdown

### 1. Searchable Library
- Real-time search across book titles, authors, and descriptions
- Case-insensitive matching
- Instant result filtering

### 2. Advanced Filtering
- **Category Filter:** Browse by genre (Adventure, Fantasy, Science, Mystery, History, Technology)
- **Subject Filter:** Filter by topic (Fantasy, Astronomy, Magic, Detective, Marine Life, etc.)
- **Level Filter:** Choose by reading level (Beginner, Intermediate, Advanced)
- **Rating Filter:** Find highly-rated books
- **Responsive Filters:** Mobile-friendly collapsible filter panel

### 3. Favorites Management
- Heart icon to mark/unmark favorites
- Favorites saved to browser localStorage
- Persistent favorites across sessions
- Dedicated favorites page
- Quick access from navigation

### 4. Theme Toggle
- Light and dark modes
- Smooth transitions between themes
- Preference saved to localStorage
- Beautiful styling for both themes

### 5. Responsive Design
- Mobile-first approach
- Touch-friendly buttons and controls
- Optimized layouts for all screen sizes

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

**Built with ❤️ for kids who love to read!**

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
