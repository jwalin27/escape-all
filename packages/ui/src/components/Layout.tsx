import * as React from 'react';
import { cx } from '../utils/cx';

type PageProps = React.HTMLAttributes<HTMLElement> & {
  padded?: boolean;
};

export function Page({ className, padded = true, ...props }: PageProps) {
  return <section className={cx(padded && 'p-8', className)} {...props} />;
}

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('mx-auto max-w-6xl', className)} {...props} />;
}
