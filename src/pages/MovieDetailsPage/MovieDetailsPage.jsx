import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import moviesApi from "../../api-key";

const MovieDetailsPage = () => {
  let { state } = useLocation();
  console.log(state);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await moviesApi.getMovieDetails(state.id);
        setDetails(movieData);
        console.log(movieData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, []);
  const ImgUrl = "https://image.tmdb.org/t/p/w500";
  const movieTitle = `${details.title} (${details.release_date.split("-")[0]})`;
  const genreList = details.genres.map((item) => item.name);

  return (
    <section>
      <h1>{movieTitle}</h1>
      <img
        src={ImgUrl + details.poster_path}
        alt={"poster film " + details.title}
      />
      <h3>Overview</h3>
      <p>{details.overview}</p>
      <h3>Genres</h3>
      <p>{genreList}</p>
      <nav>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
