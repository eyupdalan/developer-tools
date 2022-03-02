import {Link} from "@remix-run/react";
import {MenuItemProps} from "./header.types";
import {Flex, Text} from "@chakra-ui/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MenuItem = ({children, isLast, font, to = "/", ...rest}: MenuItemProps) => {
    return (
        <Link to={to}>
            <Flex
                align="center"
                justify="space-between"
            >
                <FontAwesomeIcon icon={font} />
                <Text {...rest} px={2}>
                    {children}
                </Text>
            </Flex>
        </Link>
    )
}

export default MenuItem;