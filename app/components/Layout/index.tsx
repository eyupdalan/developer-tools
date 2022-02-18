import Layout from "./layout";
import {ComponentType} from "react";

export function withLayout(Component: ComponentType) {
    return () => {
        return (
            <Layout>
                <Component/>
            </Layout>
        )
    }
}

export default Layout;