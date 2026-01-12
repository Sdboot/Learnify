import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const createThemeStore = () => {
  const initialTheme = (browser && localStorage.getItem('theme') as Theme) || 'light';
  const { subscribe, set } = writable<Theme>(initialTheme);

  return {
    subscribe,
    toggle: () => {
      set((theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', newTheme);
          document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
        return newTheme;
      });
    },
    set: (theme: Theme) => {
      set(theme);
      if (browser) {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }
    }
  };
};

export const theme = createThemeStore();
