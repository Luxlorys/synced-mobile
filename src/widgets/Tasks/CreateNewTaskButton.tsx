import { isIOS } from 'lib';
import React from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { RouteService } from 'services';
import { TouchableOpacity } from 'themes';
import { Icon } from 'ui';

export const CreateNewTaskButton = () => {
  const onCreatePress = () => RouteService.navigate('CREATE_TASK');

  return (
    <TouchableOpacity
      onPress={onCreatePress}
      zIndex={999}
      position="absolute"
      width={50}
      height={50}
      bottom={isIOS ? UnistylesRuntime.insets.bottom + 100 : 100}
      right={16}
      borderRadius={25}
      backgroundColor="primary_500"
      alignItems="center"
      justifyContent="center">
      <Icon name="plus" size={24} color="dark_mode" />
    </TouchableOpacity>
  );
};
