import { Link, useLocation } from "react-router-dom";
export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      {movies
        ? movies.map((itm) => {
            return (
              <div key={itm.id}>
                <Link to={`/movies/${itm.id}`} state={location}>
                  {itm.title}
                </Link>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
}
