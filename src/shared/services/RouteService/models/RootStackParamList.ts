import { RouteProp } from '@react-navigation/native';
import { Routes } from './Routes';

export type RouteType = keyof typeof Routes;

export type RootStackParamList = {
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.WELCOME]: undefined;
  [Routes.SIGN_IN]: undefined;
  [Routes.SIGN_UP_COMPANY]: {
    email: string;
    password: string;
  };
  [Routes.SIGN_UP_MAIN]: undefined;
  [Routes.SIGN_UP_PARTICIPANT]: {
    email: string;
    password: string;
  };

  [Routes.BOTTOM_TAB_BAR_NAVIGATOR]: undefined;

  [Routes.MAIN_NAVIGATOR]: undefined;
  [Routes.HOME]: undefined;

  [Routes.SETTINGS_NAVIGATOR]: undefined;
  [Routes.SETTINGS]: undefined;

  [Routes.AUTH]: undefined;

  [Routes.PROFILE]: undefined;

  [Routes.ALERTS]: undefined;
};

export type SignUpCompanyRouteProp = RouteProp<
  RootStackParamList,
  'SIGN_UP_COMPANY'
>;

export type SignUpParticipantRouteProp = RouteProp<
  RootStackParamList,
  'SIGN_UP_PARTICIPANT'
>;
