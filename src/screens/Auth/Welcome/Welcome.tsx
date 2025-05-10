import { isIOS } from 'lib';
import LottieView from 'lottie-react-native';
import React from 'react';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';
import { RouteService } from 'services';
import { Animations, Box, Text } from 'themes';
import { Button, StatusBar } from 'ui';

export const Welcome = () => {
  const { styles } = useStyles(stylesheet);

  const handleSignIn = () => RouteService.navigate('SIGN_IN');

  return (
    <Box flex={1}>
      <StatusBar />
      <Box
        paddingTop={isIOS ? UnistylesRuntime.insets.top : 16}
        backgroundColor="dark_mode"
        borderBottomLeftRadius={36}
        paddingVertical={24}
        borderBottomRightRadius={36}>
        <Text
          textAlign="center"
          color="white_80_opacity"
          fontWeight={500}
          fontSize="lg"
          fontFamily="GilroyRegular">
          Manage your team effortlessly
        </Text>
      </Box>
      <Box
        flex={1}
        paddingHorizontal={16}
        alignItems="center"
        justifyContent="center">
        <Text
          fontSize="title"
          fontWeight={600}
          fontFamily="GilroyMedium"
          color="dark_mode">
          Welcome to Synced
        </Text>
        <LottieView
          source={Animations.ImpostorLoading}
          autoPlay
          loop
          style={styles.animation}
        />
      </Box>
      <Box
        paddingBottom={isIOS ? UnistylesRuntime.insets.bottom : 16}
        paddingTop={24}
        backgroundColor="dark_mode"
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
          marginTop={8}
          title="Create an account"
          type="primary"
          variant="outline"
        />
      </Box>
    </Box>
  );
};

const stylesheet = createStyleSheet({
  animation: {
    height: 200,
    width: 200,
  },
});
