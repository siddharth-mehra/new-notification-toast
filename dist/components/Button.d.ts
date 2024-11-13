import * as React from "react";
import { ReactNode } from 'react';
type PropsType = {
    children: ReactNode;
    className?: string;
    [key: string]: any;
};
declare const Button: ({ children, className, ...props }: PropsType) => React.JSX.Element;
export { Button };
