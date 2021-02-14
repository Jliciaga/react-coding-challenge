import * as React from "react";

const url = new URL("../feed/sample.json", import.meta.url);

export interface MoviesPageProps {}

const MoviesPage: React.FC<MoviesPageProps> = ({}): React.ReactElement => {
    const [movies, setMovies] = React.useState(null);

    const fetchMovieData = async () => {
        let movieData = null;

        await fetch(`${url}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => {
                response.json().then((data) => {
                    movieData = [
                        ...data.entries.filter((movie) => movie.releaseYear >= 2010 && movie.programType === "movie"),
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
                    setMovies(movieData);
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
            <h1>Hello World - Movies</h1>
        </div>
    );
};

export default MoviesPage;
