import {Navbar as MNavbar} from "@mantine/core";
import {NavbarProps} from "./layout.types";
import {faFont, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "~/components/Layout/menuItem";

export default function Navbar({opened}: NavbarProps) {
    return (
        <MNavbar
            padding="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{base: 300, lg: 400}}
            styles={{
                root: {height: "calc(100vh - 80px)"}
            }}
        >
            <MNavbar.Section grow mt="lg">
                <MenuItem link={"/case-converter"} font={faFont} title={"Case Converter"}/>
                <MenuItem link={"/base64-converter"} font={faLaptopCode} title={"Base64 Converter"}/>
            </MNavbar.Section>
            <MNavbar.Section>Footer</MNavbar.Section>
        </MNavbar>
    )
}