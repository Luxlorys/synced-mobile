// No imports required from models.
const QUERY_KEYS = {
  SIGN_IN_AUTH_SERVICE: 'SIGN_IN_AUTH_SERVICE',
  SIGN_UP_AUTH_SERVICE: 'SIGN_UP_AUTH_SERVICE',
} as const;

export const AUTH_QUERY_KEYS = {
  signInAuthService: () => [QUERY_KEYS.SIGN_IN_AUTH_SERVICE] as const,
  signUpAuthService: () => [QUERY_KEYS.SIGN_UP_AUTH_SERVICE] as const,
};
