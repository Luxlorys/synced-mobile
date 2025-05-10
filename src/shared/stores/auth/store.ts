import { MMKV } from 'react-native-mmkv';
import { immer } from 'zustand/middleware/immer';
import { Authentication } from 'api';
import { AuthStore, AuthState } from './types';
import { PersistStorageKeys } from '../models';
import { createStore } from '../lib';

const persistStorage = new MMKV({
  id: PersistStorageKeys.AUTH,
});

const initialState: AuthState = {
  authentication: {
    accessToken: '',
    refreshToken: '',
  },
  user: {
    id: 0,
    createdAt: '',
    lastUpdated: null,
    email: '',
    fullName: '',
    role: 'Admin',
    company: {
      identifier: '',
      name: '',
      size: 0,
    },
  },
};

export const useAuthStore = createStore<AuthStore>(
  immer(set => ({
    ...initialState,
    setToken: (authentication: Authentication) => {
      set(state => {
        state.authentication = authentication;
      });
    },
    setUser: user => {
      set(state => {
        state.user = user;
      });
    },
  })),
  'AUTH_STORAGE',
  persistStorage,
);
