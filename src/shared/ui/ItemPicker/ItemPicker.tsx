import React, { useCallback } from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Colors, Text, TouchableOpacity } from 'themes';
import { LayoutChangeEvent } from 'react-native';
import { Icon } from 'ui/Icon';
import { constructBorderColor, constructHeight, InputSize } from './lib';

export interface ItemPickerProps {
  value: string;
  items: string[];
  error?: string;
  size?: InputSize;
  placeholder?: string;
  onSelect: (item: string) => void;
  marginTop?: number;
}

export const ItemPicker = ({
  items,
  value,
  onSelect,
  error,
  placeholder,
  marginTop = 0,
  size = 'base',
}: ItemPickerProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const isVisible = useSharedValue(false);

  const height = useSharedValue(0);
  const derivedHeight = useDerivedValue(() =>
    withTiming(isVisible.value ? height.value : 0, {
      duration: 700,
    }),
  );

  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
    backgroundColor: theme.colors.white_10_opacity,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
  }));

  const onContainerPress = () => {
    isVisible.value = !isVisible.value;
  };

  const handleLayout = useCallback(
    // eslint-disable-next-line no-return-assign
    (event: LayoutChangeEvent) =>
      (height.value = event.nativeEvent.layout.height),
    [],
  );

  return (
    <Box>
      <TouchableOpacity
        marginTop={marginTop}
        style={styles.container(false, !!error)}
        height={constructHeight(size)}
        onPress={onContainerPress}>
        <Text
          color="white"
          fontWeight={600}
          fontFamily="GilroyMedium"
          fontSize="base">
          {value || placeholder}
        </Text>
        <Icon name="arrow-ios-down" size={24} color="gray_400" />
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      <Animated.View style={bodyStyle}>
        <Box onLayout={handleLayout} style={styles.wrapper}>
          {items.map((item, index) => (
            <TouchableOpacity
              // eslint-disable-next-line
              key={index}
              padding={12}
              borderWidth={1}
              backgroundColor={
                value === item ? 'white_20_opacity' : 'transparent'
              }
              borderColor="primary_500"
              borderRadius={8}
              onPress={() => {
                onSelect(item);
                onContainerPress();
              }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                color="white"
                fontSize="base"
                fontWeight={500}
                fontFamily="GilroyMedium">
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </Box>
      </Animated.View>
    </Box>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: (isFocused: boolean, isError: boolean) => ({
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.colors.white_10_opacity,
    borderWidth: 1,
    borderColor: Colors[constructBorderColor(isFocused, isError)],
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  }),
  error: {
    color: theme.colors.red_500,
    marginTop: 4,
    fontSize: theme.sizes.s,
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    padding: 16,
    gap: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
}));
