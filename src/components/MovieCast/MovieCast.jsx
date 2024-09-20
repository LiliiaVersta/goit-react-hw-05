import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesApi } from "../../api-key";
import CastCard from "../DetailsCard/CastCard";
import style from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieCredits = await moviesApi.getMovieCredits(movieId);
        console.log(movieCredits.cast);
        setCast(movieCredits.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movieId]);
  const cardList = cast
    ? cast.map((itm) => {
        return <CastCard key={itm.id} itm={itm} />;
      })
    : "Loading...";
  return <div className={style.actors}>{cardList}</div>;
}
