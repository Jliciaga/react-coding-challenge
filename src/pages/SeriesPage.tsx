import * as React from "react";

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
        <div>
            <h1>Hello World - Series</h1>
        </div>
    );
};

export default SeriesPage;
