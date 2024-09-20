import { useEffect, useState } from "react";
import { moviesApi } from "../../api-key";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css";
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const handleTrendMovies = async () => {
      try {
        const response = await moviesApi.fetchMovies();
        setMovies(response.results);
        console.log(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleTrendMovies();
  }, []);
  return (
    <section>
      <h1 className={styles.title}>Trending today</h1>
      <MovieList movies={movies} />
    </section>
  );
}
