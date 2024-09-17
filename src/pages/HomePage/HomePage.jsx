import { useEffect, useState } from "react";
import moviesApi from "../../api-key";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleTrendMovies = async () => {
      try {
        const trendMovies = await moviesApi.fetchMovies();
        setMovies(trendMovies);
        console.log(trendMovies);
      } catch (error) {
        console.log(error);
      }
    };
    handleTrendMovies();
  }, []);
  return (
    <section>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </section>
  );
}
