import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesApi } from "../../api-key";
import style from "./MovieReviews.module.css";
const MovieReviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieCredits = await moviesApi.getMovieReviews(movieId);
        console.log(movieCredits.results);
        setReviews(movieCredits.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movieId]);
  return (
    <div>
      {reviews
        ? reviews.map((itm) => {
            return (
              <div key={itm.id} style={{ paddingBottom: "20px" }}>
                <p className={style.author}>{itm.author}</p>
                <p className={style.content}>{itm.content}</p>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
};
export default MovieReviews;
