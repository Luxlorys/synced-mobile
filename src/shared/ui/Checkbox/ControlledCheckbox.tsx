import React from 'react';
import { Control, Controller, Path, FieldValues } from 'react-hook-form';
import { UICheckbox, CheckBoxProps } from './Checkbox';

interface Props<FieldsType extends FieldValues>
  extends Omit<CheckBoxProps, 'value' | 'onChange'> {
  name: Path<FieldsType>;
  control: Control<FieldsType>;
}

export const ControlledCheckbox = <FieldsType extends FieldValues>({
  control,
  name,
  ...rest
}: Props<FieldsType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <UICheckbox
          error={error?.message}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  );
};
