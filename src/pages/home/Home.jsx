import { useEffect, useState } from "react";
import MovieDetails from "../movie-details/MovieDetails";
import s from "./home.module.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { movies } from "../../movies";

const Home = ({ onSwitchPage }) => {
  return (
    <div className={s.body}>
      <div className={s.h1_h2}>
        <h1 className={s.h1}>MaileHereko</h1>
        <p className={s.h2}>
          List of movies and TV Shows, I,{" "}
          <span className={s.span}>Pramod Poudel</span> have watched till date.
          Explore what I have watched and also feel free to make a suggestion.
          😉
        </p>
      </div>
      {/* <div className={s.container_search}>
        <div className={s.lupa}>
          <img src="search-normal.png"></img>
        </div>
        <div className={s.search}>Search Movies or TV Shows</div>
      </div> */}

      <div className={s.input_container_search}>
        <input type="text" placeholder="Search Movies or TV Shown" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeinejoin="round"
          />
        </svg>
      </div>

      <div className={s.switcher}>
        <div className={s.input_container}>
          <input type="radio" name="switcher" id="all" />
          <label htmlFor="all">All</label>
        </div>
        <div className={s.input_container}>
          <input type="radio" name="switcher" id="Movies" />
          <label htmlFor="Movies">Movies</label>
        </div>
        <div className={s.input_container}>
          <input type="radio" name="switcher" id="TV_Shows" />
          <label htmlFor="TV_Shows">TV Shows</label>
        </div>
      </div>
      <div className={s.count}>
        All<span> (120)</span>
      </div>
      <ul className={s.list}>
        {movies.map((item, index) => {
          return (
            <li key={item.id} onClick={onSwitchPage}>
              <Link to={`/details/${item.id}`}>
                <div className={s.container_cards}>
                  <div className={s.star}>
                    <img src="star.png" />
                    <span>{item.rate}</span>
                  </div>
                  <img src={item.img} />
                  <div className={s.title}>{item.title}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
