import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Colors, Text } from 'themes';
import { Pressable } from 'react-native';
/* eslint-disable-next-line boundaries/element-types */
import { getShortDateFormat, getTimeFormat } from 'lib';
import { Icon } from 'ui';
import { constructBorderColor } from './lib';

export interface PickerProps {
  onChange: (date: Date) => void;
  maxDate?: Date;
  minDate?: Date;
  value: Date;
  error?: string;
  placeholder?: string;
  mode: 'date' | 'time';
  marginTop?: number;
}

export const UIDateTimePicker = ({
  mode,
  placeholder = '',
  error = '',
  value,
  onChange,
  maxDate,
  minDate,
  marginTop = 0,
}: PickerProps) => {
  const { styles } = useStyles(stylesheet);

  const [show, setShow] = useState<boolean>(false);

  const open = () => {
    setShow(prev => !prev);
    if (value === undefined) {
      onChange(minDate || new Date());
    }
  };

  const close = () => setShow(prev => !prev);

  return (
    <Box marginTop={marginTop}>
      <Pressable onPress={open}>
        <Box style={styles.container(value!, !!error)}>
          {mode === 'date' && (
            <Text
              fontSize="base"
              fontFamily="PoppinsMedium"
              color={value ? 'white' : 'gray_400'}>
              {value ? getShortDateFormat(value) : placeholder}
            </Text>
          )}
          {mode === 'time' && (
            <Text
              fontSize="base"
              fontFamily="PoppinsMedium"
              color={value ? 'white' : 'gray_400'}>
              {value ? getTimeFormat(value) : placeholder}
            </Text>
          )}
          <Icon name="chevron_down" size={20} color="white" />
        </Box>
      </Pressable>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {show && (
        <DatePicker
          modal
          date={value}
          onConfirm={date => {
            onChange(date);
            setShow(prev => !prev);
          }}
          maximumDate={maxDate}
          minimumDate={minDate}
          mode={mode}
          open={show}
          onCancel={close}
        />
      )}
    </Box>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: (value: Date, error: boolean) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors[constructBorderColor(value, error)],
    backgroundColor: theme.colors.white_10_opacity,
    paddingHorizontal: 18,
    height: 48,
    marginVertical: 4,
  }),
  errorText: {
    color: theme.colors.brand_orange,
    marginTop: 2,
    fontSize: theme.sizes.s,
  },
}));
