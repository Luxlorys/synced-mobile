import { Colors } from 'themes';
import { match } from 'ts-pattern';

export const constructBorderColor = (value: Date, error: boolean) =>
  match<{ value: boolean; error: boolean }, keyof typeof Colors>({
    value: !!value,
    error,
  })
    .with({ value: true, error: false }, () => 'dark_mode')
    .with({ error: true }, () => 'brand_orange')
    .otherwise(() => 'dark_mode');
