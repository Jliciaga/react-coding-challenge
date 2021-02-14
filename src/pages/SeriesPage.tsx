import * as React from "react";

import { Card, Page } from "../components/ui";
import { TitleContext } from "../components/context";

const url = new URL("../feed/sample.json", import.meta.url);

export interface SeriesPageProps {}

const SeriesPage: React.FC<SeriesPageProps> = ({}): React.ReactElement => {
    const [series, setSeries] = React.useState(null);

    const fetchMovieData = async () => {
        let seriesData = null;

        await fetch(`${url}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => {
                response.json().then((data) => {
                    seriesData = [
                        ...data.entries.filter(
                            (series) => series.releaseYear >= 2010 && series.programType === "series"
                        ),
                    ]
                        .slice(0, 21)
                        .sort((a, b) => {
                            let movieA = a.title.toUpperCase()[0];
                            let movieB = b.title.toUpperCase()[0];

                            if (movieA < movieB) {
                                return -1;
                            }
                            if (movieA > movieB) {
                                return 1;
                            }
                            return 0;
                        });
                    setSeries(seriesData);
                });
            })
            .catch((err) => {
                console.warn(`Unable to fetch movie data: ${err.message}`);
            });
    };

    React.useEffect(() => {
        fetchMovieData();
    }, []);

    return (
        <TitleContext.Provider value="Series">
            <Page>
                <div>
                    <ol className="flex flex-wrap flex-row justify-start">
                        {series !== null ? (
                            series.map((serie) => {
                                return (
                                    <li className="inline-block whitespace-pre-wrap">
                                        <Card
                                            image={serie.images["Poster Art"].url}
                                            title={serie.title}
                                            key={serie.title}
                                        />
                                    </li>
                                );
                            })
                        ) : (
                            <div>Loading...</div>
                        )}
                    </ol>
                </div>
            </Page>
        </TitleContext.Provider>
    );
};

export default SeriesPage;
