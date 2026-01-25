import * as React from 'react';
import { cx } from '../utils/cx';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  variant?: ButtonVariant;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export function Button<T extends React.ElementType = 'button'>(props: ButtonProps<T>) {
  const { as, variant = 'primary', className, ...rest } = props;
  const Component = as || 'button';
  return (
    <Component
      className={cx(
        'keycap-button',
        variant === 'secondary' && 'keycap-button--secondary',
        className
      )}
      {...(rest as Record<string, unknown>)}
    />
  );
}
