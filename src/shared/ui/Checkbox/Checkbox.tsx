import React from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TouchableOpacity } from 'themes';
import { Icon } from 'ui';

export interface CheckBoxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  size?: number;
  borderRadius?: number;
  disabled?: boolean;
  error?: string;
}

const BASE_SIZE = 26;
const BASE_RADIUS = 3;

export const UICheckbox = ({
  value,
  onChange,
  size = BASE_SIZE,
  borderRadius = BASE_RADIUS,
  disabled = false,
  error = '',
}: CheckBoxProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const isFocusedShared = useSharedValue(0);
  const borderColorShared = useSharedValue(theme.colors.primary_500);

  const backgroundColorShared = useDerivedValue(
    () => (value ? theme.colors.primary_500 : theme.colors.transparent),
    [value],
  );

  const anim = useAnimatedStyle(() => ({
    borderColor: error ? theme.colors.brand_orange : borderColorShared.value,
    borderWidth: 1,
    backgroundColor: backgroundColorShared.value,
  }));

  const handleChangeStatus = () => {
    if (!value) {
      borderColorShared.value = withSpring(theme.colors.primary_500, {
        damping: 15,
        stiffness: 100,
      });
      onChange(true);

      return;
    }
    borderColorShared.value = withSpring(theme.colors.primary_500, {
      damping: 15,
      stiffness: 100,
    });
    onChange(false);
  };

  const handleFocus = () => {
    isFocusedShared.value = withTiming(1);

    borderColorShared.value = withSpring(theme.colors.primary_500, {
      damping: 15,
      stiffness: 100,
    });
  };

  const handleBlur = () => {
    isFocusedShared.value = withTiming(1);

    borderColorShared.value = withSpring(theme.colors.primary_500, {
      damping: 15,
      stiffness: 100,
    });
  };

  return (
    <TouchableOpacity
      onPressIn={handleFocus}
      onPress={handleChangeStatus}
      onPressOut={handleBlur}
      hitSlop={10}
      disabled={disabled}>
      <Animated.View style={[styles.container(size, borderRadius), anim]}>
        {value && (
          <Animated.View
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
            style={styles.box}>
            <Icon name="done" size={18} color="dark_mode" />
          </Animated.View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(_ => ({
  container: (size: number, borderRadius: number) => ({
    width: size,
    height: size,
    borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
