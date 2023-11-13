import "./movie-details.css";
import { movies } from "../../movies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    const movie = movies.find((el) => el.id === Number(params.id));

    console.log({ movie });
  }, [params]);

  return (
    <div className="body_2">
      <div className="poster">
        <img src="poster.png" />
        <div className="mid_container">
          <div className="small_container">
            <div>MaileHereko</div>
            <div className="space">/</div>
            <div>Movies</div>
          </div>
          <div className="avengers">Avengers: Endgame</div>
        </div>
      </div>

      <div className="photo_img">
        <img src="photo_img.png" />
        <div className="second_column">
          <div>
            <h1>Part of the journey is the end.</h1>
          </div>
          <div>
            <h2>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </h2>
          </div>
          <div className="div_star">
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            8.3
          </div>
          <div className="small_text">
            Type
            <div className="big_text">Movie</div>
          </div>
          <div className="small_text">
            Release Date
            <div className="big_text">2019-04-24</div>
          </div>
          <div className="small_text">
            Run time
            <div className="big_text">181 min</div>
          </div>
          <div className="small_text">
            Genres
            <div className="big_text">Adventure, Science Fiction, Action</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
