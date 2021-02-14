import * as React from "react";

import { Page } from "../ui";
import Header from "./_Header";
import Footer from "./_Footer";

export interface LayoutProps {
    children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
    return (
        <div className="layout-container">
            <Header />
            <main>
                <Page>{children}</Page>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
