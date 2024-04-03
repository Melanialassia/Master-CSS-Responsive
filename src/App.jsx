import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.wrap}>
          <div className={style.logo}>
            <span className={style.gear}>S</span>
            <h3>BLOG</h3>
          </div>
          <nav className={style.menu}>
            <ul>
              <li>
                <a href="#">INICIO</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="#">FORMACIÓN</a>
              </li>
              <li>
                <a href="#">CONTACTO</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
