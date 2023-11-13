import { useEffect, useState } from "react";
import MovieDetails from "../movie-details/MovieDetails";
import "./home.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { movies } from "../../movies";

const Home = ({ onSwitchPage }) => {
  return (
    <div className="body">
      <div className="h1_h2">
        <h1 className="h1">MaileHereko</h1>
        <p className="h2">
          List of movies and TV Shows, I,{" "}
          <span className="span">Pramod Poudel</span> have watched till date.
          Explore what I have watched and also feel free to make a suggestion.
          😉
        </p>
      </div>
      <div className="container_search">
        <div className="lupa">
          <img src="search-normal.png"></img>
        </div>
        <div className="search">Search Movies or TV Shows</div>
      </div>
      <div className="container_button">
        <div className="all">All</div>
        <div className="movies">Movies</div>
        <div className="tv_shows">TV Shows</div>
      </div>
      <div className="count">
        All<span> (120)</span>
      </div>
      <ul className="list">
        {movies.map((item, index) => {
          return (
            <li key={item.id} onClick={onSwitchPage}>
              <Link to={`/details/${item.id}`}>
                <div className="container_cards">
                  <div className="star">
                    <img src="star.png" />
                    <span>{item.rate}</span>
                  </div>
                  <img src={item.img} />
                  <div className="title">{item.title}</div>
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
