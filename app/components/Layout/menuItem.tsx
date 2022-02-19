import {Link} from "@remix-run/react";
import {Avatar, Group, Text, UnstyledButton} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MenuItemProps} from "~/components/Layout/layout.types";

export default function MenuItem({link, font, title}: MenuItemProps) {
    return (
        <div style={{marginBottom: 10}}>
            <Link to={link}>
                <UnstyledButton>
                    <Group>
                        <Avatar>
                            <FontAwesomeIcon icon={font}/>
                        </Avatar>
                        <Text>{title}</Text>
                    </Group>
                </UnstyledButton>
            </Link>
        </div>
    )
}