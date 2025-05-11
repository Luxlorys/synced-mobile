import React from 'react';
import { Control, Controller, Path, FieldValues } from 'react-hook-form';
import { ItemPicker, ItemPickerProps } from './ItemPicker';

interface Props<FieldsType extends FieldValues>
  extends Omit<ItemPickerProps, 'value' | 'onSelect'> {
  name: Path<FieldsType>;
  defaultValue?: string;
  control: Control<FieldsType>;
}

export const ControlledItemPicker = <FieldsType extends FieldValues>({
  control,
  name,
  ...rest
}: Props<FieldsType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <ItemPicker
          error={error?.message}
          value={value}
          onSelect={val => onChange(val)}
          {...rest}
        />
      )}
    />
  );
};
