import * as React from 'react';
import { cx } from '../utils/cx';

type CardProps<T extends React.ElementType = 'div'> = {
  as?: T;
  padded?: boolean;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export function Card<T extends React.ElementType = 'div'>({ as, className, padded = false, ...props }: CardProps<T>) {
  const Component = as || 'div';
  return <Component className={cx('ui-card', padded && 'p-4', className)} {...(props as Record<string, unknown>)} />;
}
