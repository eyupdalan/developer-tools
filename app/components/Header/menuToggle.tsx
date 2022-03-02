import React from "react"
import {Box} from "@chakra-ui/react"
import {MenuToggleProps} from "./header.types";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MenuToggle = ({onClick, isOpen}: MenuToggleProps) => {
    return (
        <Box display={{base: "block", md: "none"}} onClick={onClick}>
            {isOpen ? <FontAwesomeIcon icon={faXmark} size="2x" color="white"/> :
                <FontAwesomeIcon icon={faBars} size="2x" color="white"/>}
        </Box>
    )
}

export default MenuToggle;