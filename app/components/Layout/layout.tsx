import {Container} from "@chakra-ui/react";
import {LayoutProps} from './layout.types';
import Header from '../Header';

export default function Index({children}: LayoutProps) {
    return (
        <>
            <Header/>
            <Container maxW={"container.xl"} h={"container.lg"}>
                {children}
            </Container>
        </>
    )
}
