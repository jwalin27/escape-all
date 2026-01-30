import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../utils/cx';
import { Button } from './Button';
export function Navbar({ className, ...props }) {
    return (_jsx("nav", { className: cx('w-full bg-transparent px-4 py-3 border-b border-[#984a39]/20', className), ...props }));
}
export function NavbarInner({ className, ...props }) {
    return (_jsx("div", { className: cx('mx-auto max-w-7xl grid grid-cols-[auto_1fr_auto] items-center gap-3', className), ...props }));
}
export function NavbarLinks({ className, ...props }) {
    return _jsx("div", { className: cx('hidden md:flex items-center justify-center gap-3', className), ...props });
}
export function NavbarActions({ className, ...props }) {
    return _jsx("div", { className: cx('hidden md:flex items-center gap-3 justify-end', className), ...props });
}
export function NavbarToggle({ className, ...props }) {
    return (_jsx(Button, { type: "button", className: cx('md:hidden justify-self-end', className), ...props }));
}
export function NavbarMobile({ className, ...props }) {
    return _jsx("div", { className: cx('md:hidden mt-3 px-4 flex flex-col gap-3', className), ...props });
}
export function NavbarBrand({ className, ...props }) {
    return _jsx("div", { className: cx('flex items-center', className), ...props });
}
