import {Avatar, Group, Navbar as MNavbar, Text, UnstyledButton} from "@mantine/core";
import {NavbarProps} from "./layout.types";
import {Link} from "@remix-run/react";
import {faFont} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navbar({opened}: NavbarProps) {
    return (
        <MNavbar
            padding="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{base: 300, lg: 400}}
            styles={{
                root: { height: "calc(100vh - 80px)"}
            }}
        >
            <MNavbar.Section grow mt="lg">
                <Link to={"/case-converter"}>
                    <UnstyledButton>
                        <Group>
                            <Avatar>
                                <FontAwesomeIcon icon={faFont}/>
                            </Avatar>
                            <Text>Case converter</Text>
                        </Group>
                    </UnstyledButton>
                </Link>
            </MNavbar.Section>
            <MNavbar.Section>Footer</MNavbar.Section>
        </MNavbar>
    )
}