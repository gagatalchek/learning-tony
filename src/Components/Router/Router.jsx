import { Routes, Route } from "react-router-dom";
// import { Home, MovieDetails } from "../../pages/";
import Home from "../../pages/home/Home";
import MovieDetails from "../../pages/movie-details/MovieDetails";
import Login from "../../pages/login/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<MovieDetails />} />
      <Route path="/login/:id" element={<Login />} />
    </Routes>
  );
};

export default Router;
