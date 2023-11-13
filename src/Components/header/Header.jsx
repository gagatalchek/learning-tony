import "./header.css";

const Header = ({ onSwitchPage }) => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="left_container">
          <div className="logo" onClick={onSwitchPage}>
            <img src="logo.png"></img>
          </div>
        </div>
        <div className="right_container">
          <div className="button1">Movies</div>
          <div className="button2">TV Shows</div>
          <div className="button3">
            Suggest me
            <div>
              <svg
                className="arrow"
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
