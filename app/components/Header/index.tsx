import React, {useState} from "react";
import MenuToggle from "./menuToggle";
import NavBarContainer from "./navbarContainer";
import Logo from "./logo";
import MenuLinks from "./menuLinks";

const Header = (props:any) => {
    const [isOpen, setIsOpen] = useState(false)

    const onClick = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer {...props}>
            <Logo
                w="100px"
                color={"primary.900"}
            />
            <MenuToggle onClick={onClick} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>

    )
}

export default Header;