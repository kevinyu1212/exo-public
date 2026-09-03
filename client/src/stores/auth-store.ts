'use client';

import { create } from 'zustand';
import { getMe, type User } from '@/lib/auth-api';

type AuthState = {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  isHydrated: boolean;
  setAuth: (user: User, accessToken: string) => void;
  logout: () => void;
  hydrate: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isLoading: true,
  isHydrated: false,

  setAuth: (user, accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(user));

    set({
      user,
      accessToken,
      isLoading: false,
      isHydrated: true,
    });
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');

    set({
      user: null,
      accessToken: null,
      isLoading: false,
      isHydrated: true,
    });
  },

  hydrate: async () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      set({
        user: null,
        accessToken: null,
        isLoading: false,
        isHydrated: true,
      });
      return;
    }

    try {
      const user = await getMe(token);

      localStorage.setItem('user', JSON.stringify(user));

      set({
        user,
        accessToken: token,
        isLoading: false,
        isHydrated: true,
      });
    } catch {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');

      set({
        user: null,
        accessToken: null,
        isLoading: false,
        isHydrated: true,
      });
    }
  },
}));
