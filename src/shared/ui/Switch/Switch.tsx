import React, { useRef } from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Animated, {
  WithSpringConfig,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Colors } from 'themes';
import {
  constructSwitchBackgroundColor,
  constructSwitchBorderColor,
  constructSwitchCircleColor,
} from './helpers';

const clamp = (value: number, lowerBound: number, upperBound: number) => {
  'worklet';

  return Math.min(Math.max(lowerBound, value), upperBound);
};

const SWITCH_CONTAINER_WIDTH = 51;
const SWITCH_CONTAINER_HEIGHT = 31;
const CIRCLE_WIDTH = 27;
const BORDER = 1;
const TRACK_CIRCLE_WIDTH = SWITCH_CONTAINER_WIDTH - CIRCLE_WIDTH - BORDER * 4;

const config: WithSpringConfig = {
  overshootClamping: true,
};

interface SwitchComponentProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchComponentProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const panRef = useRef<PanGestureHandler>(null);

  const { styles } = useStyles(stylesheet);
  const translateX = useSharedValue(value ? TRACK_CIRCLE_WIDTH : 0);

  const handlePress = ({
    nativeEvent: { state },
  }: TapGestureHandlerStateChangeEvent) => {
    if (state !== State.ACTIVE) {
      return;
    }

    onChange(!value);
    translateX.value = withSpring(value ? 0 : TRACK_CIRCLE_WIDTH, config);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: interpolate(
      translateX.value,
      [0, TRACK_CIRCLE_WIDTH / 3, TRACK_CIRCLE_WIDTH],
      [CIRCLE_WIDTH, (CIRCLE_WIDTH / 2) * 2.5, CIRCLE_WIDTH],
    ),
  }));

  const switchBackgroundColor =
    Colors[constructSwitchBackgroundColor(value, disabled)];

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [0, TRACK_CIRCLE_WIDTH],
        [switchBackgroundColor, switchBackgroundColor],
      ),
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_e, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = clamp?.(translationX + ctx.x, 0, TRACK_CIRCLE_WIDTH);
    },
    onEnd: ({ velocityX }) => {
      const endPosition = translateX.value + 0.2 * velocityX;
      const isCloserToEnd =
        Math.abs(TRACK_CIRCLE_WIDTH - endPosition) < Math.abs(endPosition);
      const selectedSnapPoint = isCloserToEnd ? TRACK_CIRCLE_WIDTH : 0;

      translateX.value = withSpring(selectedSnapPoint, config);
      runOnJS(onChange)(selectedSnapPoint !== 0);
    },
  });

  return (
    <TapGestureHandler
      waitFor={panRef}
      onHandlerStateChange={handlePress}
      enabled={!disabled}>
      <Box style={styles.switchBox}>
        <Animated.View
          style={[
            animatedContainerStyle,
            styles.switchContainer(value, disabled),
          ]}>
          <PanGestureHandler ref={panRef} onGestureEvent={onGestureEvent}>
            <Animated.View
              style={[
                styles.circle,
                {
                  backgroundColor:
                    Colors[constructSwitchCircleColor(value, disabled)],
                },
                animatedStyle,
              ]}
            />
          </PanGestureHandler>
        </Animated.View>
      </Box>
    </TapGestureHandler>
  );
};

const stylesheet = createStyleSheet(() => ({
  switchContainer: (value: boolean, disabled: boolean) => ({
    width: SWITCH_CONTAINER_WIDTH,
    height: SWITCH_CONTAINER_HEIGHT,
    borderRadius: 32,
    flexDirection: 'row',
    backgroundColor: Colors[constructSwitchBackgroundColor(value, disabled)],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors[constructSwitchBorderColor(value, disabled)],
  }),
  circle: {
    alignSelf: 'center',
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderRadius: 999,
    borderWidth: BORDER,
    elevation: 18,
    marginHorizontal: 1,
    paddingTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  switchBox: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
