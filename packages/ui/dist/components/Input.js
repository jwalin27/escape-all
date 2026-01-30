import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { cx } from '../utils/cx';
export const Input = React.forwardRef(function Input({ className, ...props }, ref) {
    return _jsx("input", { ref: ref, className: cx('ui-input', className), ...props });
});
