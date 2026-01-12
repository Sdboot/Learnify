import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface Favorite {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  addedAt: number;
}

const createFavoritesStore = () => {
  const initialFavorites = (browser ? JSON.parse(localStorage.getItem('favorites') || '[]') : []) as Favorite[];
  const { subscribe, set, update } = writable<Favorite[]>(initialFavorites);

  return {
    subscribe,
    add: (book: Favorite) => {
      update((favorites) => {
        const exists = favorites.some((f) => f.id === book.id);
        if (!exists) {
          const updated = [...favorites, { ...book, addedAt: Date.now() }];
          if (browser) localStorage.setItem('favorites', JSON.stringify(updated));
          return updated;
        }
        return favorites;
      });
    },
    remove: (bookId: string) => {
      update((favorites) => {
        const updated = favorites.filter((f) => f.id !== bookId);
        if (browser) localStorage.setItem('favorites', JSON.stringify(updated));
        return updated;
      });
    },
    isFavorite: (bookId: string) => {
      let result = false;
      subscribe((favorites) => {
        result = favorites.some((f) => f.id === bookId);
      })();
      return result;
    }
  };
};

export const favorites = createFavoritesStore();
