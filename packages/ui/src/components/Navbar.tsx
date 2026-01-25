import * as React from 'react';
import { cx } from '../utils/cx';
import { Button } from './Button';

type NavProps = React.HTMLAttributes<HTMLElement>;

export function Navbar({ className, ...props }: NavProps) {
  return (
    <nav
      className={cx('w-full bg-transparent px-4 py-3 border-b border-[#984a39]/20', className)}
      {...props}
    />
  );
}

export function NavbarInner({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx('mx-auto max-w-7xl grid grid-cols-[auto_1fr_auto] items-center gap-3', className)}
      {...props}
    />
  );
}

export function NavbarLinks({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('hidden md:flex items-center justify-center gap-3', className)} {...props} />;
}

export function NavbarActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('hidden md:flex items-center gap-3 justify-end', className)} {...props} />;
}

export function NavbarToggle({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      type="button"
      className={cx('md:hidden justify-self-end', className)}
      {...props}
    />
  );
}

export function NavbarMobile({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('md:hidden mt-3 px-4 flex flex-col gap-3', className)} {...props} />;
}

export function NavbarBrand({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('flex items-center', className)} {...props} />;
}
