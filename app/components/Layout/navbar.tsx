import {Navbar as MNavbar} from "@mantine/core";
import {NavbarProps} from "./layout.types";
import {faFont, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "~/components/Layout/menuItem";
import MenuFooter from "~/components/Layout/menuFooter";

export const CASE_CONVERTER_URL: string = "/case-converter";
export const BASE64_CONVERTER_URL: string = "/base64-converter";
export const GITHUB_REPO_URL: string = "https://github.com/eyupdalan/developer-tools";

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
                <MenuItem link={CASE_CONVERTER_URL} font={faFont} title={"Case Converter"}/>
                <MenuItem link={BASE64_CONVERTER_URL} font={faLaptopCode} title={"Base64 Converter"}/>
            </MNavbar.Section>
            <MNavbar.Section>
                <MenuFooter/>
            </MNavbar.Section>
        </MNavbar>
    )
}