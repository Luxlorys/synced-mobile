import React from 'react';
import { Control, Controller, Path, FieldValues } from 'react-hook-form';
import { OtpInput as BaseOtp, OtpProps } from './OtpInput';

interface Props<FieldsType extends FieldValues> extends OtpProps {
  name: Path<FieldsType>;
  defaultValue?: string;
  control: Control<FieldsType>;
}

export const ControlledOtpInput = <FieldsType extends FieldValues>({
  control,
  name,
  ...rest
}: Props<FieldsType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <BaseOtp onTextChange={val => onChange(val)} {...rest} />
      )}
    />
  );
};
