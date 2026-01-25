import * as React from 'react';
import { cx } from '../utils/cx';
import { Button } from './Button';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export function Modal({ open, onClose, children, className }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={cx('ui-modal relative w-[min(28rem,90vw)] p-6', className)}>
        <Button
          type="button"
          aria-label="Close"
          className="absolute right-3 top-3 h-8 w-8 px-0 py-0 text-xs"
          onClick={onClose}
        >
          ×
        </Button>
        {children}
      </div>
    </div>
  );
}
