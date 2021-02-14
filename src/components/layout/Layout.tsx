import * as React from "react";

import Header from "./_Header";
import Footer from "./_Footer";

export interface LayoutProps {
    children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
