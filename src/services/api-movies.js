const API_KEY = "15ccc9a8c676c1c9b5477fb06b4d7b82";
const baseURL = "https://api.themoviedb.org/3";
export const IMG_PATH = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

export const getMovie = (name) => {
  return fetch(
    `${baseURL}/search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`
  );
};

export const getMovieById = (id) => {
  return fetch(
    `${baseURL}/search/movie?api_key=${API_KEY}&query=${id}&language=en-US&page=1&include_adult=false`
  );
};
