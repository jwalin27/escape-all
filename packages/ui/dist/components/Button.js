import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../utils/cx';
export function Button(props) {
    const { as, variant = 'primary', className, ...rest } = props;
    const Component = as || 'button';
    return (_jsx(Component, { className: cx('keycap-button', variant === 'secondary' && 'keycap-button--secondary', className), ...rest }));
}
