import {Box, Stack} from "@chakra-ui/react"
import MenuItem from "./menuItem";
import {MenuLinksProps} from "./header.types";
import {
    BASE64_CONVERTER_URL, CASE_CONVERTER_URL, JWT_DECODE_URL, URI_ENCODE_DECODE_URL,
} from '~/constants/links';
import {faAnchor, faFont, faKey, faLaptopCode} from "@fortawesome/free-solid-svg-icons";

const MenuLinks = ({isOpen}:MenuLinksProps) => {
    return (
        <Box
            display={{base: isOpen ? "block" : "none", md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to={URI_ENCODE_DECODE_URL} font={faAnchor} >URL Encode/Decode</MenuItem>
                <MenuItem to={CASE_CONVERTER_URL} font={faFont} >Case Converter</MenuItem>
                <MenuItem to={JWT_DECODE_URL} font={faKey} >JWT Decoder</MenuItem>
                <MenuItem to={BASE64_CONVERTER_URL} font={faLaptopCode} isLast>Base64 Converter</MenuItem>
            </Stack>

        </Box>
    )
}

export default MenuLinks;