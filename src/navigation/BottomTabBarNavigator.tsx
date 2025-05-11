import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from 'themes';
import { IconName } from 'react-native-vector-icons';
import { Icon } from 'ui';
import { Routes } from 'services';
import { isIOS } from 'lib';
import { Tab } from './lib';
import { HomeNavigator, SettingsNavigator } from './tabs';
import { MyTasksNavigator } from './tabs/MyTasksNavigator';
import { NotificationsNavigator } from './tabs/NotificationsNavigator';

const titles: Record<string, string> = {
  [Routes.MAIN_NAVIGATOR]: 'Home',
  [Routes.MY_TASKS_NAVIGATOR]: 'My tasks',
  [Routes.NOTIFICATIONS_NAVIGATOR]: 'Notifications',
  [Routes.SETTINGS_NAVIGATOR]: 'Settings',
};

const tabIcons: Record<string, IconName> = {
  [Routes.MAIN_NAVIGATOR]: 'menu',
  [Routes.MY_TASKS_NAVIGATOR]: 'monitor',
  [Routes.NOTIFICATIONS_NAVIGATOR]: 'bell',
  [Routes.SETTINGS_NAVIGATOR]: 'settings',
};

export const BottomTabBarNavigator: React.FC = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        lazy: true,
        tabBarLabel: ({ focused }) => (
          <Text
            fontSize="xs"
            fontWeight="400"
            fontFamily="GilroyMedium"
            color={focused ? 'light_text' : 'icon_gray'}>
            {titles[route.name]}
          </Text>
        ),
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name={tabIcons[route.name]}
              size={20}
              color={focused ? 'light_text' : 'icon_gray'}
            />
          );
        },
      })}
      backBehavior="history">
      <Tab.Screen name="MAIN_NAVIGATOR" component={HomeNavigator} />
      <Tab.Screen name="MY_TASKS_NAVIGATOR" component={MyTasksNavigator} />
      <Tab.Screen
        name="NOTIFICATIONS_NAVIGATOR"
        component={NotificationsNavigator}
      />
      <Tab.Screen name="SETTINGS_NAVIGATOR" component={SettingsNavigator} />
    </Tab.Navigator>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  tabBarItemStyle: {
    marginTop: 6,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: isIOS ? runtime.insets.bottom : 16,
    borderRadius: 35,
    backgroundColor: theme.colors.dark_contrast,
    height: 68,
    paddingBottom: 12,
    overflow: 'hidden',
    borderTopWidth: 0,
    marginHorizontal: 16,
  },
}));
