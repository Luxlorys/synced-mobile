import { createSelectors } from '../lib';
import { useAuthStore } from './store';

export const useAuthStoreSelectors = createSelectors(useAuthStore);

export const useSelectUserId = () =>
  useAuthStoreSelectors(state => state.user.id);

export const useSelectAccessToken = () =>
  useAuthStoreSelectors(state => state.authentication.accessToken);

export const useSelectUser = () => useAuthStoreSelectors(state => state.user);

export const useSelectUserName = () =>
  useAuthStoreSelectors(state => state.user.fullName);

export const useSelectUserRole = () =>
  useAuthStoreSelectors(state => state.user.role);
