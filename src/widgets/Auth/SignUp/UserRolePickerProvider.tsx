import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Box } from 'themes';
import { SelectedUserRole } from 'features/Auth/auth.features.models';
import { UserRolePicker } from './UserRolePicker';

interface Props<FieldsType extends FieldValues> {
  name: Path<FieldsType>;
  control: Control<FieldsType>;
  items: SelectedUserRole[];
}

export const UserRolePickerProvider = <FieldsType extends FieldValues>({
  control,
  name,
  items,
}: Props<FieldsType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Box marginTop={24} flexDirection="row" alignItems="center" gap={6}>
          <Box flex={1 / 2}>
            <UserRolePicker
              text={items[0].label}
              isSelected={value?.value === items[0].value}
              onPress={() => onChange(items[0])}
            />
          </Box>
          <Box flex={1 / 2}>
            <UserRolePicker
              text={items[1].label}
              isSelected={value?.value === items[1].value}
              onPress={() => onChange(items[1])}
            />
          </Box>
        </Box>
      )}
    />
  );
};
