import { movies } from "../../movies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./movie_details.module.scss";
import { card_details } from "../../movies";
import { IMG_PATH, getMovie, getMovieById } from "../../services/api-movies";

const MovieDetails = () => {
  // const [movie, setMovie] = useState({});

  // const params = useParams();

  // useEffect(() => {
  //   const _movie = card_details.find((el) => el.id === Number(params.id));
  //   setMovie(_movie);
  // }, [params]);

  const [movie, setMovie] = useState({});

  const params = useParams();

  const getMovie = async () => {
    try {
      const response = await getMovieById(params.id);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovie();
  }, [params]);

  return (
    <div className={s.body_2}>
      <div className={s.poster}>
        <img src="poster.png" />
        <div className={s.mid_container}>
          <div className={s.small_container}>
            <div>{movie.upper1}</div>
            <div className={s.space}>/</div>
            <div>{movie.upper2}</div>
          </div>
          <div className={s.avengers}>{movie.title}</div>
        </div>
      </div>

      <div className={s.photo_img}>
        <img src={movie.img} />
        <div className={s.second_column}>
          <div>
            <h1>{movie.title2}</h1>
          </div>
          <div>
            <h2>{movie.description}</h2>
          </div>
          <div className={s.div_star}>
            {/* <img src="star.png" /> */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15333 2.34001L10.3267 4.68668C10.4867 5.01334 10.9133 5.32668 11.2733 5.38668L13.4 5.74001C14.76 5.96668 15.08 6.95334 14.1 7.92668L12.4467 9.58001C12.1667 9.86001 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86001 3.55333 9.58001L1.9 7.92668C0.926667 6.95334 1.24 5.96668 2.6 5.74001L4.72667 5.38668C5.08 5.32668 5.50667 5.01334 5.66667 4.68668L6.84 2.34001C7.48 1.06668 8.52 1.06668 9.15333 2.34001Z"
                stroke="#FFAD49"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {movie.rate}
          </div>
          <div className={s.small_text}>
            Type
            <div className={s.big_text}>{movie.type}</div>
          </div>
          <div className={s.small_text}>
            Release Date
            <div className={s.big_text}>{movie.release_date}</div>
          </div>
          <div className={s.small_text}>
            Run time
            <div className={s.big_text}>{movie.run_time}</div>
          </div>
          <div className={s.small_text}>
            Genres
            <div className={s.big_text}>{movie.genres}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
