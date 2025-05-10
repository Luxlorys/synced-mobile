import { RouteProp } from '@react-navigation/native';
import { Routes } from './Routes';

export type RouteType = keyof typeof Routes;

export type RootStackParamList = {
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.WELCOME]: undefined;
  [Routes.SIGN_IN]: undefined;
  [Routes.SIGN_UP_COMPANY]: undefined;
  [Routes.SIGN_UP_ENTER_INVITE_CODE]: undefined;
  [Routes.SIGN_UP_MAIN]: undefined;
  [Routes.SIGN_UP_PARTICIPANT]: undefined;

  [Routes.BOTTOM_TAB_BAR_NAVIGATOR]: undefined;

  [Routes.MAIN_NAVIGATOR]: undefined;
  [Routes.HOME]: undefined;

  [Routes.SETTINGS_NAVIGATOR]: undefined;
  [Routes.SETTINGS]: undefined;

  [Routes.AUTH]: undefined;

  [Routes.PROFILE]: undefined;

  [Routes.ALERTS]: undefined;
};

export type SignInProp = RouteProp<RootStackParamList, 'PROFILE'>;
