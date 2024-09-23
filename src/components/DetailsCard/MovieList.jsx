import { Link } from "react-router-dom";

const MovieList = ({ searchedMovies }) => {
  return (
    <>
      <h1 className="hidden"></h1>
      <div>
        {searchedMovies
          ? searchedMovies.map((itm) => {
              return (
                <div key={itm.id}>
                  <Link to={`/movies/${itm.id}`}>{itm.title}</Link>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </>
  );
};
export default MovieList;
