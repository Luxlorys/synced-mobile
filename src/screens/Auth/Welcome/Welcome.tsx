import { isIOS } from 'lib';
import React from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { RouteService } from 'services';
import { Box, Text } from 'themes';
import { Button, ExpandableInfoBlock, StatusBar } from 'ui';

export const Welcome = () => {
  const handleSignIn = () => RouteService.navigate('SIGN_IN');

  const handleSignUp = () => RouteService.navigate('SIGN_UP_MAIN');

  return (
    <Box
      flex={1}
      backgroundColor="dark_mode"
      paddingTop={isIOS ? UnistylesRuntime.insets.top : 16}>
      <StatusBar />
      <Box flex={1} paddingHorizontal={16}>
        <Text
          marginTop={24}
          fontSize="title"
          textAlign="center"
          fontWeight={600}
          fontFamily="GilroyMedium"
          color="white_80_opacity">
          Welcome to Synced
        </Text>
        <ExpandableInfoBlock
          expandedByDefaul
          title="🧠 Smart Team Management"
          reasons={[
            'Empower your team without hiring extra managers. Assign tasks, track status, and keep everyone aligned with a few taps.',
          ]}
        />
        <ExpandableInfoBlock
          title="📊 Clear Insights & Reports"
          reasons={[
            'Understand team performance at a glance. Track task completion, spot delays, and measure productivity over time.',
          ]}
        />
        <ExpandableInfoBlock
          expandedByDefaul
          title="💬 Built-in Communication"
          reasons={[
            'No more scattered messages. Discuss tasks, share updates, and request approvals—all within the app.',
          ]}
        />
        <ExpandableInfoBlock
          title="📅 Simple Yet Powerful Workflows"
          reasons={[
            'Stay organized with easy task flows, priorities, and dependencies. Keep projects moving without the complexity of big tools.',
          ]}
        />
      </Box>
      <Box
        paddingBottom={isIOS ? UnistylesRuntime.insets.bottom : 16}
        paddingTop={24}
        backgroundColor="dark_contrast"
        borderTopLeftRadius={36}
        borderTopRightRadius={36}
        alignItems="center"
        justifyContent="center"
        paddingHorizontal={16}>
        <Button
          onPress={handleSignIn}
          title="Alredy have an account? Sign In"
          type="primary"
          variant="filled"
        />
        <Button
          onPress={handleSignUp}
          marginTop={8}
          title="Create an account"
          type="primary"
          variant="outline"
        />
      </Box>
    </Box>
  );
};
