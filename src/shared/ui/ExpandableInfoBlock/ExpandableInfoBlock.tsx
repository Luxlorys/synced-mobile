import React from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Text, TouchableOpacity } from 'themes';
import { Icon } from 'ui';

interface ExpandableInfoBlockProps {
  title: string;
  reasons: string[];
  expandedByDefaul?: boolean;
}

export const ExpandableInfoBlock = ({
  reasons,
  title,
  expandedByDefaul = false,
}: ExpandableInfoBlockProps) => {
  const { styles } = useStyles(stylesheet);

  const isExpanded = useSharedValue(expandedByDefaul);
  const height = useSharedValue(0);
  const rotation = useSharedValue(expandedByDefaul ? 180 : 0);

  const derivedHeight = useDerivedValue(() =>
    withSpring(isExpanded.value ? height.value : 0),
  );

  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
    overflow: 'hidden',
  }));

  const pressableStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const onToggle = () => {
    isExpanded.value = !isExpanded.value;
    rotation.value = withSpring(isExpanded.value ? 0 : 180);
  };

  return (
    <TouchableOpacity
      onPress={onToggle}
      marginTop={12}
      padding={16}
      backgroundColor="dark_contrast"
      borderRadius={8}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box flex={1}>
          <Text
            color="light_text"
            fontSize="m"
            fontWeight={500}
            fontFamily="PoppinsMedium">
            {title}
          </Text>
        </Box>
        <Animated.View style={[pressableStyle]}>
          <Icon name="arrow-ios-down" size={20} color="white" />
        </Animated.View>
      </Box>
      <Animated.View style={[bodyStyle]}>
        <Box
          style={styles.wrapper}
          // eslint-disable-next-line no-return-assign
          onLayout={event => (height.value = event.nativeEvent.layout.height)}>
          {reasons.map((reason, index) => (
            <Text
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              marginTop={8}
              color="text_default"
              fontSize="s"
              fontWeight={300}
              fontFamily="PoppinsMedium">
              {reason}
            </Text>
          ))}
        </Box>
      </Animated.View>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(_ => ({
  wrapper: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
  },
}));
