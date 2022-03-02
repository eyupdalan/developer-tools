import React from "react";
import {Flex} from "@chakra-ui/react";
import {NavbarContainerProps} from "./header.types";

const NavBarContainer = ({children, ...props}: NavbarContainerProps) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={5}
            p={5}
            bg={"green.500"}
            color={"white"}
            {...props}
        >
            {children}
        </Flex>
    )
}

export default NavBarContainer;