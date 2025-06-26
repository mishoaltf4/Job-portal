import { effect, Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';
const THEME_KEY: string = 'preferred-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangerService {
  private currentTheme = signal<Theme>(this.getStoredTheme());

  constructor() {
    effect((): void => {
      const theme = this.currentTheme();
      this.applyTheme(theme);
      this.saveTheme(theme);
    });
  }

  toggleTheme() {
    const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.currentTheme.set(newTheme);
  }

  private applyTheme(theme: Theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  private saveTheme(theme: Theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  private getStoredTheme(): Theme {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    return prefersDark ? 'dark' : 'light';
  }
}
