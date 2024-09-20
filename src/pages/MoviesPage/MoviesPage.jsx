import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { moviesApi } from "../../api-key";
import style from "./MoviesPage.module.css";
const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams", searchParams.get("query"));
  useEffect(() => {
    const getMovieByQuery = async () => {
      try {
        const moviesResult = await moviesApi.getMovieByQuery(
          searchParams.get("query")
        );
        console.log(moviesResult);
        setSearchedMovies(moviesResult.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieByQuery();
    if (searchParams.get("query")) setQuery(searchParams.get("query"));
  }, [searchParams]);
  async function handleSubmit(event) {
    event.preventDefault();
    setSearchParams({ query: query });
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
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
    </section>
  );
};
export default MoviesPage;
