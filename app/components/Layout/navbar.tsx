import { Navbar as MNavbar } from '@mantine/core';
import { faFont, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '~/components/Layout/menuItem';
import MenuFooter from '~/components/Layout/menuFooter';
import { BASE64_CONVERTER_URL, CASE_CONVERTER_URL } from '~/constants/links';
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
        <MenuItem link={CASE_CONVERTER_URL} font={faFont} title="Case Converter" />
        <MenuItem link={BASE64_CONVERTER_URL} font={faLaptopCode} title="Base64 Converter" />
      </MNavbar.Section>
      <MNavbar.Section>
        <MenuFooter />
      </MNavbar.Section>
    </MNavbar>
  );
}
