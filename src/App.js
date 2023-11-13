import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "modern-normalize";
import MovieDetails from "./pages/movie-details/MovieDetails";
import Home from "./pages/home/Home";
import Header from "./Components/header/Header";
import Router from "./Components/Router/Router";

const films = [
  {
    id: 1,
    img: "/Black_Widow.png",
    title: "Black Widow",
    rate: 6.8,
  },
  {
    id: 2,
    img: "/Shang_Chi.jpg",
    title: "Shang Chi",
    rate: 7.9,
  },
  {
    id: 3,
    img: "/Loki.jpg",
    title: "Loki",
    rate: 8.4,
  },
  {
    id: 4,
    img: "/How_i_met_your_mother.jpg",
    title: "sokol",
    rate: 8.3,
  },
  {
    id: 5,
    img: "/Money_heist.jpg",
    title: "How I Met Your Mother",
    rate: 8.3,
  },
  {
    id: 6,
    img: "/Friends.jpg",
    title: "Money Heist",
    rate: 8.8,
  },
  {
    id: 7,
    img: "/The_big_bang_theory.jpg",
    title: "Friends",
    rate: 8.1,
  },
  {
    id: 8,
    img: "/Two_and_a_half_man.jpg",
    title: "The Big Bang Theory",
    rate: 7,
  },
];
const sum = (a, b) => {
  return a + b;
};

const result = sum(4, 6);
console.log(result);

// function App() {
//   return (
//     <div className="app">
//       <Header />

//       <div className="container">
//         {/*  старый боди */}

//         {/* <MovieDetails /> */}

//         <Home />
//       </div>
//       <div className="train"></div>
//     </div>
//   );
// }

// export default App;

/* <ul className="list">
  {films.map((item, index) => {
    // console.log("Наш фильм на итерации", index, item);
    return (
      <li key={item.id}>
        <div className="card">
          <img src={item.img} alt="crab" />
          <p> {item.rate} </p>
          <span>{item.rate}</span>
        </div>
      </li>
    );
  })}
</ul>; */
/* <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul> */
// ul {
//   margin: 0;
//   padding: 0;
// }
// li {
//   list-style: none;
// }
/* <ul className="list">
  <li>
    <div className="container_cards">
      <div className="star">
        <img src="star.png" />
        <span>6.8</span>
      </div>
      <img src="Shang-Chi.png" />
      <div className="title">Black Widow</div>
    </div>
  </li>
</ul>; */

// function App () {
//   return (
//     <div>
//       <div>
//         <ul>
//           {films.map((film) => {
//             return (
//               <li key={film.id}>
//                 <Card />
//               </li>
//             );s
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// } цикл, в который мы поместили ui kit

const App = () => {
  const [isShowHomePage, setIsHomeShowPage] = useState(true);

  const handleSwitchPage = () => {
    setIsHomeShowPage((prev) => !prev);
  };
  return (
    <div className="App">
      <Header onSwitchPage={handleSwitchPage} />
      <div className="container">
        <Router />
        {/* {isShowHomePage ? (
          <Home onSwitchPage={handleSwitchPage} />
        ) : (
          <MovieDetails />
        )} */}
      </div>
    </div>
  );
};
export default App;
