import React from 'react';
import {
  Slider as BaseSlider,
  HapticModeEnum,
  SliderThemeType,
} from 'react-native-awesome-slider';
import { useSharedValue } from 'react-native-reanimated';
import { Box, Colors, Text } from 'themes';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

interface Props<FieldsType extends FieldValues> {
  name: Path<FieldsType>;
  control: Control<FieldsType>;
  rightText: string;
  leftText: string;
}
export const ControlledSlider = <FieldsType extends FieldValues>({
  control,
  name,
  leftText,
  rightText,
}: Props<FieldsType>) => {
  const progress = useSharedValue(5);
  const min = useSharedValue(5);
  const max = useSharedValue(100);

  const { styles } = useStyles(stylesheet);

  const renderThumb = () => (
    <Box
      width={28}
      height={28}
      backgroundColor="white"
      borderRadius={24}
      style={styles.thumbShadow}
    />
  );

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <Box marginTop={24}>
          <BaseSlider
            markStyle={styles.mark}
            markWidth={5}
            onHapticFeedback={() => {
              ReactNativeHapticFeedback.trigger('selection');
            }}
            hapticMode={HapticModeEnum.BOTH}
            step={19}
            minimumValue={min}
            maximumValue={max}
            progress={progress}
            theme={theme}
            onValueChange={val => onChange(val)}
            thumbWidth={22}
            renderThumb={renderThumb}
          />
          <Box
            marginTop={16}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Text
              color="gray_400"
              fontFamily="GilroyMedium"
              fontSize="m"
              fontWeight="400">
              {leftText}
            </Text>
            <Text
              color="gray_400"
              fontFamily="GilroyMedium"
              fontSize="m"
              fontWeight="400">
              {rightText}
            </Text>
          </Box>
        </Box>
      )}
    />
  );
};

const theme: SliderThemeType = {
  maximumTrackTintColor: Colors.primary_500_opacity_40,
  minimumTrackTintColor: Colors.primary_500,
  bubbleBackgroundColor: Colors.card_background,
  bubbleTextColor: Colors.white,
};

const stylesheet = createStyleSheet(theme => ({
  thumbShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowRadius: 4,
    shadowOpacity: 0.12,
    elevation: 2,
  },
  mark: {
    backgroundColor: theme.colors.primary_500,
    height: 5,
  },
}));
