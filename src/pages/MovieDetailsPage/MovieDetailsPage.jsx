import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { moviesApi } from "../../api-key";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await moviesApi.getMovieDetails(movieId);
        setDetails(movieData);
        console.log(movieData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <section>
      <button onClick={() => navigate(-1)}>Back</button>
      {details ? <DetailsCard data={details} /> : "Loading..."}
      <nav>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" replace>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" replace>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
