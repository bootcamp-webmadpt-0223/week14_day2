import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [allMovies, setAllMovies] = useState(moviesDataJSON);

  const addNewMovie = movie => {
    console.log(movie);
    movie._id = movie.title + movie.director;
    setMovies(state => [movie, ...state]);
    setAllMovies(state => [movie, ...state]);
  };

  const filterMoviesByName = event => {
    console.log(event.target.value);
    const selectedValue = event.target.value;
    let nextMovies = [...allMovies];
    if (selectedValue !== "All") {
      nextMovies = allMovies.filter(movie =>
        movie.title.startsWith(selectedValue)
      );
    }

    setMovies(nextMovies);

    // setMovies(() => {
    //   if (selectedValue === "All") {
    //     return [...allMovies];
    //   }
    //   return allMovies.filter(movie => movie.title.startsWith(selectedValue));
    // });
  };

  return (
    <div>
      <FilterMovies filterMoviesByName={filterMoviesByName} />
      <AddMovie addNewMovie={addNewMovie} />
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
