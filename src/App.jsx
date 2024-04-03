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
      <section className={style.wrap}>
        <section className={style.info}>
          <div className={style.banner}>
            <h1> CURSO DE MASTER EN CSS CON VÍCTOR ROBLES</h1>
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <p className={style.icon}>H</p>
              <h2 className={style.category}>Desarrollo Web</h2>
              <p className={style.description}>
                {" "}
                Aprende los principales lenguajes para desarrollar webs
                ¡Conviertete en un webmaster!
              </p>
            </div>
            <div className={style.card}>
              <p className={style.icon}>_</p>
              <h2 className={style.category}>Sistemas Operativos</h2>
              <p className={style.description}>
                {" "}
                Aprende a administrar sistemas Linux y Windows.
              </p>
            </div>
            <div className={style.card}>
              <p className={style.icon}>S</p>
              <h2 className={style.category}>Hardware</h2>
              <p className={style.description}>
                {" "}
                Conoce los entresijos del hardware.
              </p>
            </div>
            <div className={style.card}>
              <p className={style.icon}>u</p>
              <h2 className={style.category}>Redes e Internet</h2>
              <p className={style.description}>
                {" "}
                Aprende a configurar y administrar redes infromaticas y
                servidores.
              </p>
            </div>
            <div className={style.card}>
              <p className={style.icon}>a</p>
              <h2 className={style.category}>Bases de datos</h2>
              <p className={style.description}>
                {" "}
                Aprende a montar y administrar bases de datos.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
