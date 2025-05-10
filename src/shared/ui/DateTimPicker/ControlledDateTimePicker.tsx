import React from 'react';
import { Control, Controller, Path, FieldValues } from 'react-hook-form';
import { UIDateTimePicker, PickerProps } from './DateTimePicker';

interface Props<FieldsType extends FieldValues>
  extends Omit<PickerProps, 'value' | 'onChange'> {
  name: Path<FieldsType>;
  control: Control<FieldsType>;
}

export const ControlledDateTimePicker = <FieldsType extends FieldValues>({
  control,
  name,
  placeholder,
  ...rest
}: Props<FieldsType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <UIDateTimePicker
          placeholder={placeholder}
          value={value}
          onChange={val => onChange(val)}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
};
