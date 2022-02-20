import {Link} from "@remix-run/react";
import {Avatar, Group, Text, UnstyledButton} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MenuItemProps} from "~/components/Layout/layout.types";
import {useLocation} from "react-router";

export default function MenuItem({link, font, title, color}: MenuItemProps) {
    const location = useLocation()

    const active = location.pathname === link;
    const colorToSet = color ? color : (active ? "blue" : "gray");

    return (
        <div style={{marginBottom: 10}}>
            <Link to={link}>
                <UnstyledButton>
                    <Group>
                        <Avatar>
                            <FontAwesomeIcon icon={font} color={colorToSet}/>
                        </Avatar>
                        <Text color={colorToSet}>{title}</Text>
                    </Group>
                </UnstyledButton>
            </Link>
        </div>
    )
}