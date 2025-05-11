import { Colors } from 'themes';
import { match } from 'ts-pattern';

export type InputSize = 'base' | 'l' | 'sm';

const HEIGHT = {
  SM: 36,
  BASE: 48,
  L: 50,
  MLN: 100,
} as const;

export const constructHeight = (size: InputSize, multiline?: boolean) =>
  match({ size, multiline })
    .with({ multiline: true }, () => HEIGHT.MLN)
    .with({ size: 'l' }, () => HEIGHT.L)
    .with({ size: 'base' }, () => HEIGHT.BASE)
    .with({ size: 'sm' }, () => HEIGHT.SM)
    .exhaustive();

export const constructBorderColor = (focused: boolean, error: boolean) =>
  match<{ focused: boolean; error: boolean }, keyof typeof Colors>({
    focused,
    error,
  })
    .with({ focused: true, error: false }, () => 'primary_500')
    .with({ error: true }, () => 'red_500')
    .otherwise(() => 'white_10_opacity');

export const constructLabelColor = (focused: boolean, error: boolean) =>
  match<{ focused: boolean; error: boolean }, keyof typeof Colors>({
    focused,
    error,
  })
    .with({ focused: true, error: false }, () => 'primary_500')
    .with({ error: true }, () => 'red_500')
    .otherwise(() => 'gray_primary');
