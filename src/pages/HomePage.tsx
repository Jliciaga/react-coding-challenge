import * as React from "react";
import { Link } from "react-router-dom";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}): React.ReactElement => {
    return (
        <div>
            <h1>Hello World - Home</h1>
        </div>
    );
};

export default HomePage;
