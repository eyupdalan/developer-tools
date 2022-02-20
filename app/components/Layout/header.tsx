import {
    Avatar,
    Burger,
    Group,
    Header as MHeader,
    MediaQuery,
    Text, Title,
    UnstyledButton,
    useMantineTheme
} from "@mantine/core";
import {HeaderProps} from "~/components/Layout/layout.types";
import {Link} from "@remix-run/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";

export default function Header({opened, setOpened}: HeaderProps) {
    const theme = useMantineTheme();

    const onClickBurgerButton = () => {
        setOpened((prev: boolean) => !prev);
    }

    return (
        <MHeader height={70} padding="md">
            <div style={{display: "flex", alignItems: "center", height: "100%"}}>
                <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                    <Burger
                        opened={opened}
                        onClick={onClickBurgerButton}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                <Link to={"/"}>
                    <UnstyledButton>
                        <Group>
                            <Avatar>
                                <FontAwesomeIcon icon={faScrewdriverWrench} size={"2x"} color={"black"}/>
                            </Avatar>
                            <Title order={1}>Developer Tools</Title>
                        </Group>
                    </UnstyledButton>
                </Link>
            </div>
        </MHeader>
    )
}