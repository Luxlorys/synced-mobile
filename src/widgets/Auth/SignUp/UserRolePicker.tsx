import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { Text, TouchableOpacity } from 'themes';

interface UserRolePickerProps {
  isSelected: boolean;
  onPress: () => void;
  text: string;
}
export const UserRolePicker = ({
  isSelected,
  onPress,
  text,
}: UserRolePickerProps) => {
  const { theme } = useStyles();

  const selection = useDerivedValue(() =>
    withTiming(isSelected ? 1 : 0, { duration: 300 }),
  );

  const animatedStyles = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      selection.value,
      [0, 1],
      [theme.colors.primary_500_opacity_20, theme.colors.primary_500],
    );

    const backgroundColor = interpolateColor(
      selection.value,
      [0, 1],
      [theme.colors.transparent, theme.colors.primary_500_opacity_10],
    );

    return {
      borderWidth: 1,
      borderColor,
      borderRadius: 12,
      padding: 18,
      backgroundColor,
    };
  });

  return (
    <Animated.View style={animatedStyles}>
      <TouchableOpacity
        onPress={onPress}
        justifyContent="space-between"
        alignItems="center">
        <Text
          fontSize="base"
          color="white"
          fontFamily="GilroyMedium"
          fontWeight={600}>
          {text}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
