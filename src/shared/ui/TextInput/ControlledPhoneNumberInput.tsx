import React from 'react';
import { Control, Controller, Path, FieldValues } from 'react-hook-form';
import { Props as TextInputProps } from './TextInput';
import { UIPhoneNumberInput } from './PhoneNumberInput';

interface Props<FieldsType extends FieldValues> extends TextInputProps {
  name: Path<FieldsType>;
  defaultValue?: string;
  control: Control<FieldsType>;
}

export const ControlledPhoneNumberInput = <FieldsType extends FieldValues>({
  control,
  name,
  ...rest
}: Props<FieldsType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <UIPhoneNumberInput
          value={value}
          onChangeText={val => onChange(val)}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
};
