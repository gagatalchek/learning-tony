// консоль лог
const hello = "wordl";
console.log(`hello: ${hello}`);

// переключатель фильмов
<div>
  <div className="switcher">
    <div className="input_container">
      <input type="radio" name="switcher" id="all" />
      <label htmlFor="all" />
      All
      <label />
    </div>
  </div>
  <div className="input_container">
    <input type="radio" name="switcher" id="films" />
    <label htmlFor="films" />
    Фильмы
    <label />
  </div>
  <div className="input_container">
    <input type="radio" name="switcher" id="mult" />
    <label htmlFor="mult" />
    Мультики
    <label />
  </div>
</div>;

// строка инпута
<div>
  <div className="input_container">
    <input type="text" placeholder="Search Movies or TV Shown" />
    <svg></svg>
  </div>
</div>;

// импорт стиля с scss
import s from "./module.scss";
// а также наш файл scss обьязательно переименовуем в название.module.scss

<div className={s.container}>Aboba</div>; // где container будем названием моего компонента
