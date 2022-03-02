import {FlexProps, TextProps} from "@chakra-ui/react";
import {ReactChild, ReactChildren} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface MenuToggleProps {
    isOpen: boolean,
    onClick: () => void,
}

interface MenuItemProps extends TextProps {
    children: ReactChild | ReactChildren,
    isLast?: boolean,
    font: IconProp,
    to?: string
}

interface MenuLinksProps {
    isOpen: boolean
}

interface NavbarContainerProps extends FlexProps{
    children: ReactChild | ReactChildren,
}

export type {
    MenuToggleProps,
    MenuItemProps,
    MenuLinksProps,
    NavbarContainerProps
}