import React from 'react';
import { Control, Controller, Path, FieldValues } from 'react-hook-form';
import { Switch } from './Switch';

interface Props<FieldsType extends FieldValues> {
  name: Path<FieldsType>;
  control: Control<FieldsType>;
}

export const ControlledSwitch = <FieldsType extends FieldValues>({
  control,
  name,
}: Props<FieldsType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Switch value={value} onChange={val => onChange(val)} />
      )}
    />
  );
};
