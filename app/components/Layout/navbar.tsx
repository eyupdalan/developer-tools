import { Navbar as MNavbar } from '@mantine/core';
import {
  faFont, faLaptopCode, faKey, faAnchor,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from '~/components/Layout/menuItem';
import MenuFooter from '~/components/Layout/menuFooter';
import {
  BASE64_CONVERTER_URL, CASE_CONVERTER_URL, JWT_DECODE_URL, URI_ENCODE_DECODE_URL,
} from '~/constants/links';
import { NavbarProps } from './layout.types';

export default function Navbar({ opened }: NavbarProps) {
  return (
    <MNavbar
      padding="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ base: 300, lg: 400 }}
      styles={{
        root: { height: 'calc(100vh - 80px)' },
      }}
    >
      <MNavbar.Section grow mt="lg">
        <MenuItem link={URI_ENCODE_DECODE_URL} font={faAnchor} title="URL Encode/Decode" />
        <MenuItem link={CASE_CONVERTER_URL} font={faFont} title="Case Converter" />
        <MenuItem link={JWT_DECODE_URL} font={faKey} title="JWT Decoder" />
        <MenuItem link={BASE64_CONVERTER_URL} font={faLaptopCode} title="Base64 Converter" />
      </MNavbar.Section>
      <MNavbar.Section>
        <MenuFooter />
      </MNavbar.Section>
    </MNavbar>
  );
}
