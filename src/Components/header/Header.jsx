import s from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () =>
  //{ onSwitchPage }
  {
    return (
      <header className={s.header}>
        <div className={s.header_container}>
          <div className={s.left_container}>
            <Link to={`/`}>
              <div
                className={s.logo}
                // onClick={onSwitchPage}
              >
                <img src="logo.png"></img>
              </div>
            </Link>
          </div>
          <div className={s.right_container}>
            <Link to={`/`}>
              <div className={s.button1}>Movies</div>
            </Link>

            <div className={s.button2}>TV Shows</div>
            <div className={s.button3}>
              Suggest me
              <div>
                <svg
                  className={s.arrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.62 3.95331L13.6667 7.99997L9.62 12.0466"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.33337 8H13.5534"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                {/* <img className="arrow" src="arrow-right.svg" /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

export default Header;

// Подключение слушателя событий на клик мышки
// const Header = ({onSwitchPage }) => {
//     return (
//         <header className="header">
//             <div className="header_container">
//                 <button onClick={onSwitchPage}>Click to switch</button>
//             </div>

//         </header>
//     )
// }
