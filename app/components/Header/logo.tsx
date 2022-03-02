import React from "react"
import {Flex, FlexProps, Text} from "@chakra-ui/react"
import {faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "@remix-run/react";

export default function Logo(props: FlexProps) {
    return (
        <Link to={"/"}>
            <Flex
                align="center"
                justify="space-between"
                {...props}
            >
                <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" className={"white"}/>
                <Text fontSize="lg" fontWeight="bold" color={props.color} px={5}>
                    Developer Tools
                </Text>
            </Flex>
        </Link>
    )
}
