import { useGetAllCompanyTasks } from 'features';
import { isIOS } from 'lib';
import LottieView from 'lottie-react-native';
import React from 'react';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';
import { Animations, Box } from 'themes';
import { StatusBar } from 'ui';
import { UserInfoHeader, CreateNewTaskButton, TasksList } from 'widgets';

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  const { data, isLoading } = useGetAllCompanyTasks();

  return (
    <Box
      flex={1}
      paddingTop={isIOS ? UnistylesRuntime.insets.top : 16}
      paddingBottom={isIOS ? UnistylesRuntime.insets.bottom : 16}
      paddingHorizontal={16}
      backgroundColor="dark_mode">
      <StatusBar />
      <UserInfoHeader />
      <CreateNewTaskButton />
      {isLoading || !data ? (
        <Box flex={1} alignItems="center" justifyContent="center">
          <LottieView
            source={Animations.ImpostorLoading}
            autoPlay
            loop
            style={styles.loading}
          />
        </Box>
      ) : (
        <TasksList tasks={data} />
      )}
    </Box>
  );
};

const stylesheet = createStyleSheet({
  loading: {
    width: 150,
    height: 150,
  },
});
