import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../utils/cx';
import { Button } from './Button';
export function Modal({ open, onClose, children, className }) {
    if (!open)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50", children: _jsxs("div", { className: cx('ui-modal relative w-[min(28rem,90vw)] p-6', className), children: [_jsx(Button, { type: "button", "aria-label": "Close", className: "absolute right-3 top-3 h-8 w-8 px-0 py-0 text-xs", onClick: onClose, children: "\u00D7" }), children] }) }));
}
