import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      {/* <!-- Inicio HEADER --> */}
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

      {/* <!-- Fin HEADER --> */}

      <section className={style.wrap}>
        <section className={style.info}>
          {/* <!-- Inicio BANNER --> */}
          <div className={style.banner}>
            <h1> CURSO DE MASTER EN CSS CON VÍCTOR ROBLES</h1>
          </div>
          {/* <!-- Fin BANNER --> */}

          {/* <!-- Inicio Cartas --> */}
          <div>
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
          {/* <!-- Fin Cartas --> */}
        </section>

        {/* <!-- Inicio barra lateral --> */}
        <aside className={style.lateral}>

          <h3> BUSCAR</h3>
          <div className={style.search}>
            <form>
              <input type="text" />
              <input type="button" value="L" className={style.gear} />
            </form>
          </div>

          <h3>LOGIN</h3>
          <div>
            <form>
              <label id="user" className={style.gear}>
                {" "}
                U
              </label>
              <input type="email" />
              <label id="password" className={style.gear}>
                w
              </label>
              <input type="password" />
              <input type="submit" value="Entrer" />
              <input type="reset" value="Limpiar" />
              <a href="#"> Registrate aquí</a>
              <a href="#">¿Has olvidado tu contraseña?</a>
            </form>
          </div>

          <h3>REDES SOCIALES</h3>
          <div className={style.social}>
            <div className={style.twitter}>
              <a href="#" className={style.gear}>
                t
              </a>
            </div>
            <div className={style.facebook}>
              <a href="#" className={style.gear}>
                f
              </a>
            </div>
            <div className={style.youtube}>
              <a href="#" className={style.gear}>
                y
              </a>
            </div>
          </div>

          <h3>PATROCINADORES</h3>
          <div className={style.sponsors}></div>

        </aside>
        {/* <!-- Fin barra lateral --> */}
      </section>
    </div>
  );
}

export default App;
