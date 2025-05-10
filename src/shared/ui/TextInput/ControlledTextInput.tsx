import React from 'react';
import { Control, Controller, Path, FieldValues } from 'react-hook-form';
import { UITextInput, Props as TextInputProps } from './TextInput';

interface Props<FieldsType extends FieldValues> extends TextInputProps {
  name: Path<FieldsType>;
  defaultValue?: string;
  control: Control<FieldsType>;
}

export const ControlledTextInput = <FieldsType extends FieldValues>({
  control,
  name,
  ...rest
}: Props<FieldsType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <UITextInput
          value={value}
          onChangeText={val => onChange(val)}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
};
