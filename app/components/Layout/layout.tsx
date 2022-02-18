import {useState} from 'react';
import {AppShell} from '@mantine/core';
import {LayoutProps} from "./layout.types";
import Header from "./header";
import Navbar from "./navbar";

export default function Layout({children}: LayoutProps) {
    const [opened, setOpened] = useState(false);

    return (
        <AppShell
            fixed
            navbarOffsetBreakpoint="md"
            navbar={<Navbar opened={opened}/>}
            header={<Header opened={opened} setOpened={setOpened}/>}
            styles={{
                body: {height: "calc(100vh - 80px)"},
                main: {height: "calc(100vh - 80px)", minHeight: "unset"}
            }}
        >
            {children}
        </AppShell>
    );
}
