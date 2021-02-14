import * as React from "react";
import { Link } from "react-router-dom";

import PlaceholderImage from "../assets/images/placeholder.png";

import { Card } from "../components/ui";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}): React.ReactElement => {
    return (
        <div className="flex h-80 justify-start items-start w-full">
            <div>
                <Link to="/series">
                    <Card image={PlaceholderImage} placeholder="SERIES" title="Popular Series" />
                </Link>
            </div>
            <div>
                <Link to="/movies">
                    <Card image={PlaceholderImage} placeholder="MOVIES" title="Popular Movies" />
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
