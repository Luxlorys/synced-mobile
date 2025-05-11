import React, { ReactNode, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box } from 'themes';

interface AccordionProps {
  isVisible: boolean;
  children: ReactNode;
  animationSpeed?: number;
  marginTop?: number;
}

export const Accordion = ({
  isVisible,
  children,
  animationSpeed = 1000,
  marginTop = 0,
}: AccordionProps) => {
  const { styles } = useStyles(stylesheet);

  const height = useSharedValue(0);
  const derivedHeight = useDerivedValue(() =>
    withTiming(isVisible ? height.value : 0, {
      duration: animationSpeed,
    }),
  );

  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
    opacity: isVisible ? 1 : 0,
    overflow: 'hidden',
    marginTop,
  }));

  const handleLayout = useCallback(
    // eslint-disable-next-line no-return-assign
    (event: LayoutChangeEvent) =>
      (height.value = event.nativeEvent.layout.height),
    [],
  );

  return (
    <Animated.View style={bodyStyle}>
      <Box onLayout={handleLayout} style={styles.wrapper}>
        {children}
      </Box>
    </Animated.View>
  );
};

const stylesheet = createStyleSheet({
  wrapper: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
  },
});
