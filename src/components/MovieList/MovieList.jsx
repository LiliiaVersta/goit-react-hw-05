import { Link, useLocation } from "react-router-dom";
export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
