import { Colors } from 'themes';
import { match } from 'ts-pattern';

const HEIGHT = {
  SM: 36,
  base: 48,
  L: 44,
} as const;

export type ButtonType = 'primary' | 'secondary' | 'danger';

export type ButtonVariant = 'filled' | 'outline' | 'ghost';

export type ButtonSize = 'l' | 'base' | 's';

export const constructHeight = (size: ButtonSize) =>
  match(size)
    .with('l', () => HEIGHT.L)
    .with('base', () => HEIGHT.base)
    .with('s', () => HEIGHT.SM)
    .exhaustive();

export const constructBackgroundColor = (
  variant: ButtonVariant,
  type: ButtonType,
  disabled: boolean,
) =>
  match<
    { variant: ButtonVariant; type: ButtonType; disabled: boolean },
    keyof typeof Colors
  >({
    variant,
    type,
    disabled,
  })
    .with(
      { variant: 'filled', type: 'primary', disabled: false },
      () => 'primary_500',
    )
    .with(
      { variant: 'filled', type: 'secondary', disabled: false },
      () => 'dark_mode',
    )
    .with(
      { variant: 'outline', type: 'primary', disabled: false },
      () => 'transparent',
    )
    .with(
      { variant: 'outline', type: 'secondary', disabled: false },
      () => 'transparent',
    )
    .with({ variant: 'ghost' }, () => 'transparent')
    .with({ disabled: true }, () => 'primary_disabled')
    .with({ type: 'danger' }, () => 'red_500')
    .exhaustive();

/** Variant border color constructor */
export const constructVariantBorderColor = (
  variant: ButtonVariant,
  type: ButtonType,
) =>
  match<{ variant: ButtonVariant; type: ButtonType }, keyof typeof Colors>({
    variant,
    type,
  })
    .with({ variant: 'filled', type: 'primary' }, () => 'transparent')
    .with({ variant: 'filled', type: 'secondary' }, () => 'primary_500')
    .with({ variant: 'outline', type: 'primary' }, () => 'primary_500')
    .with({ variant: 'outline', type: 'secondary' }, () => 'dark_mode')
    .with({ variant: 'ghost' }, () => 'transparent')
    .with({ type: 'danger' }, () => 'red_500')
    .exhaustive();

export const constructVariantBorderWidth = (
  variant: ButtonVariant,
  type: ButtonType,
) =>
  match({ variant, type })
    .with({ variant: 'filled', type: 'primary' }, () => 1)
    .with({ variant: 'filled', type: 'secondary' }, () => 1)
    .with({ variant: 'outline', type: 'primary' }, () => 1)
    .with({ variant: 'outline', type: 'secondary' }, () => 1)
    .with({ variant: 'ghost' }, () => 0)
    .with({ type: 'danger' }, () => 1)
    .exhaustive();

export const constructVatiantTextColor = (
  variant: ButtonVariant,
  type: ButtonType,
  disabled: boolean,
) =>
  match<
    { variant: ButtonVariant; type: ButtonType; disabled: boolean },
    keyof typeof Colors
  >({
    variant,
    type,
    disabled,
  })
    .with(
      { variant: 'filled', type: 'primary', disabled: false },
      () => 'dark_mode',
    )
    .with(
      { variant: 'filled', type: 'secondary', disabled: false },
      () => 'primary_500',
    )
    .with(
      { variant: 'outline', type: 'primary', disabled: false },
      () => 'primary_500',
    )
    .with(
      { variant: 'outline', type: 'secondary', disabled: false },
      () => 'dark_mode',
    )
    .with({ variant: 'ghost', type: 'primary' }, () => 'primary_500')
    .with({ variant: 'ghost', type: 'secondary' }, () => 'white')
    .with({ disabled: true }, () => 'dark_mode')
    .with({ type: 'danger' }, () => 'white')
    .exhaustive();
