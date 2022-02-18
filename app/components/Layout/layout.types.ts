import {ReactChild, ReactChildren} from "react";

declare type StateChangeFunction<T> = (param:T)=>T;

interface LayoutProps {
    children: ReactChild|ReactChildren
}

interface HeaderProps {
    opened: boolean,
    setOpened: (param:StateChangeFunction<boolean>) => void
}

interface NavbarProps {
    opened: boolean
}

export type { LayoutProps, HeaderProps, NavbarProps };