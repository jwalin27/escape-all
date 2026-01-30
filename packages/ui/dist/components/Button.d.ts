import * as React from 'react';
type ButtonVariant = 'primary' | 'secondary';
type ButtonProps<T extends React.ElementType = 'button'> = {
    as?: T;
    variant?: ButtonVariant;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'>;
export declare function Button<T extends React.ElementType = 'button'>(props: ButtonProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map