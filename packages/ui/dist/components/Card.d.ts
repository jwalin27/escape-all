import * as React from 'react';
type CardProps<T extends React.ElementType = 'div'> = {
    as?: T;
    padded?: boolean;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'>;
export declare function Card<T extends React.ElementType = 'div'>({ as, className, padded, ...props }: CardProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Card.d.ts.map