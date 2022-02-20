import {ReactChild, ReactChildren} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

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

interface MenuItemProps {
    link: string,
    font: IconProp,
    title: string,
    color?: string
}

export type { LayoutProps, HeaderProps, NavbarProps, MenuItemProps };