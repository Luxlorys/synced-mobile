import React, { useState } from 'react';
import { Control, Controller, Path, FieldValues } from 'react-hook-form';
import { UITextInput, Props as TextInputProps } from './TextInput';

interface Props<FieldsType extends FieldValues> extends TextInputProps {
  name: Path<FieldsType>;
  defaultValue?: string;
  control: Control<FieldsType>;
}

export const ControlledPasswordTextInput = <FieldsType extends FieldValues>({
  control,
  name,
  ...rest
}: Props<FieldsType>) => {
  const [isSecure, setSecure] = useState(true);

  const handleChangeSecure = () => setSecure(!isSecure);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <UITextInput
          value={value}
          secureTextEntry={isSecure}
          rightIconName={isSecure ? 'eye' : 'eye_off'}
          rightIconColor="white"
          rightIconSize={24}
          onRightPress={handleChangeSecure}
          onChangeText={val => onChange(val)}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
};
