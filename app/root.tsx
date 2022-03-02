import React from "react";
import type {MetaFunction} from 'remix';
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch} from 'remix';
import {Box, ChakraProvider, Heading} from '@chakra-ui/react'
import theme from "~/components/theme";

export const meta: MetaFunction = () => ({title: 'Developer Tools'});

interface DocumentProps {
    children: React.ReactNode;
    title?: string;
}

const Document = ({children, title}: DocumentProps) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name="robots" content="all"/>
            {title ? <title>{title}</title> : null}
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}

export default function App() {
    return (
        <Document>
            <ChakraProvider theme={theme}>
                <Outlet/>
            </ChakraProvider>
        </Document>
    )
}

export function ErrorBoundary({error}: { error: Error }) {
    return (
        <Document title='Error!'>
            <ChakraProvider theme={theme}>
                <Box>
                    <Heading as='h1'>There was an error</Heading>
                </Box>
            </ChakraProvider>
        </Document>
    )
}

export function CatchBoundary() {
    let caught = useCatch()

    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <ChakraProvider theme={theme}>
                <Box>
                    <Heading as='h1'>
                        {caught.status} {caught.statusText}
                    </Heading>
                </Box>
            </ChakraProvider>
        </Document>
    )
}