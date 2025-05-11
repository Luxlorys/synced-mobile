import { useCreateTask } from 'features';
import { isIOS } from 'lib';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Text } from 'themes';
import {
  BaseHeader,
  Button,
  ControlledDateTimePicker,
  ControlledItemPicker,
  ControlledTextInput,
  KeyboardAwareScrollView,
} from 'ui';

export const CreateTask = () => {
  const { styles } = useStyles(stylesheet);

  const {
    control,
    handleCreate,
    isPending,
    isValid,
    taskPriorities,
    taskStatuses,
  } = useCreateTask();

  return (
    <Box flex={1} backgroundColor="dark_mode">
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <Box flex={1}>
          <BaseHeader />
          <Text
            color="white"
            fontSize="title"
            fontWeight={600}
            fontFamily="GilroyMedium">
            Create task
          </Text>
          <ControlledTextInput
            marginTop={24}
            control={control}
            name="title"
            placeholder="Title"
          />
          <ControlledTextInput
            marginTop={16}
            control={control}
            name="description"
            placeholder="Description"
            multiline
          />
          <Box flexDirection="row" alignItems="center" gap={6} marginTop={16}>
            <Box flex={1 / 2}>
              <ControlledDateTimePicker
                control={control}
                name="deadline"
                placeholder="YYYY-MM-DD"
                mode="date"
              />
            </Box>
            <Box flex={1 / 2}>
              <ControlledTextInput
                control={control}
                name="estimatedTime"
                placeholder="Hours to complete"
                withError={false}
              />
            </Box>
          </Box>
          <ControlledItemPicker
            marginTop={16}
            items={taskStatuses}
            control={control}
            name="status"
          />
          <ControlledItemPicker
            marginTop={8}
            items={taskPriorities}
            control={control}
            name="priority"
          />
        </Box>
        <Button
          marginTop={24}
          title="Create task"
          type="primary"
          variant="filled"
          isLoading={isPending}
          onPress={handleCreate}
          disabled={!isValid}
        />
      </KeyboardAwareScrollView>
    </Box>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  wrapper: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: isIOS ? runtime.insets.top : 16,
    paddingBottom: isIOS ? runtime.insets.bottom : 16,
    backgroundColor: theme.colors.dark_mode,
  },
}));
