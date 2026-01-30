import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../utils/cx';
export function Card({ as, className, padded = false, ...props }) {
    const Component = as || 'div';
    return _jsx(Component, { className: cx('ui-card', padded && 'p-4', className), ...props });
}
