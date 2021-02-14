import * as React from "react";

import Routes from "./components/core/Routes";
import Layout from "./components/layout/Layout";

import "./style.css";

export interface AppProps {}

const App: React.FC<AppProps> = ({}): React.ReactElement => {
    return (
        <Layout>
            <Routes />
        </Layout>
    );
};

export default App;
