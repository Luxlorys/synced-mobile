import { Colors } from 'themes';
import { match } from 'ts-pattern';

/** Switch background color constructor */
export const constructSwitchBackgroundColor = (
  value: boolean,
  disabled: boolean,
) =>
  match<{ value: boolean; disabled: boolean }, keyof typeof Colors>({
    value,
    disabled,
  })
    .with({ value: false, disabled: true }, () => 'gray_400')
    .with({ value: false, disabled: false }, () => 'gray_primary')
    .with({ value: true, disabled: false }, () => 'success')
    .with({ value: true, disabled: true }, () => 'success')
    .exhaustive();

/** Switch circle color constructor */
export const constructSwitchCircleColor = (value: boolean, disabled: boolean) =>
  match<{ value: boolean; disabled: boolean }, keyof typeof Colors>({
    value,
    disabled,
  })
    .with({ value: false, disabled: true }, () => 'gray_400')
    .with({ value: true, disabled: true }, () => 'white')
    .with({ value: false, disabled: false }, () => 'white')
    .otherwise(() => 'white');

/** Switch border color constructor */
export const constructSwitchBorderColor = (value: boolean, disabled: boolean) =>
  match<{ value: boolean; disabled: boolean }, keyof typeof Colors>({
    value,
    disabled,
  })
    .with({ value: false, disabled: false }, () => 'transparent')
    .with({ value: true, disabled: false }, () => 'transparent')
    .with({ value: false, disabled: true }, () => 'transparent')
    .with({ value: true, disabled: true }, () => 'transparent')
    .exhaustive();
