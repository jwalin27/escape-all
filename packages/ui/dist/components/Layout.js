import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../utils/cx';
export function Page({ className, padded = true, ...props }) {
    return _jsx("section", { className: cx(padded && 'p-8', className), ...props });
}
export function Container({ className, ...props }) {
    return _jsx("div", { className: cx('mx-auto max-w-6xl', className), ...props });
}
