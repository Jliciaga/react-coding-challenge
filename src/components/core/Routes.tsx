import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, MoviesPage, SeriesPage } from "../../pages";

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}): React.ReactElement => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/movies">
                        <MoviesPage />
                    </Route>
                    <Route path="/series">
                        <SeriesPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;
