import style from "./App.module.css";
// IMAGE
import HTML  from "./assets/html5-badge-h-css3-graphics-multimedia-performance-semantics.png";
import fireFox from "./assets/firefox-icon.png";
import chrome from "./assets/chrome.png";
import opera from "./assets/Opera_256x256.png";
import safari from "./assets/safari.png";
import android from "./assets/android.png";
import apple from "./assets/ios.png";

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
          <div className={`${style.box} ${style.login}`}>
            <form>
              <label id="user" className={`${style.gear} ${style.icons}`}>
                U
              </label>
              <input type="email" />
              <label
                id="password"
                className={`${style.gear} ${style.icons} ${style.icons2}`}
              >
                w
              </label>
              <input type="password" />
              <input type="submit" value="Ingresar" />
              <input type="reset" value="Limpiar" />
              <a href="#"> Registrate aquí</a>
              <a href="#">¿Has olvidado tu contraseña?</a>
            </form>
          </div>

          <h3>REDES SOCIALES</h3>
          <div className={`${style.box} ${style.social}`}>
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
          <div className={style.box}></div>
        </aside>
        {/* <!-- Fin barra lateral --> */}

        {/* <!-- Inicio articulos --> */}
        <section className={style.articles}>
          <h2>Últimos artículos</h2>
          <div className={style.clearFloat} />
          <article>
            <div className={style.data}>
              <span> Fecha: 12 dic</span>
              <span>Categorías: Pruebas</span>
            </div>
            <h4>
              <a href="#">Título del artículo</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor est urna, id tincidunt diam gravida eu. Vestibulum vitae
              sem lacus. Vestibulum eget sagittis ligula. Sed commodo sapien id
              molestie elementum. Pellentesque aliquam pharetra elementum.
              Vestibulum et consectetur leo.
            </p>
          </article>
          <article>
            <div className={style.data}>
              <span> Fecha: 12 dic</span>
              <span>Categorías: Pruebas</span>
            </div>
            <h4>
              <a href="#">Título del artículo</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor est urna, id tincidunt diam gravida eu. Vestibulum vitae
              sem lacus. Vestibulum eget sagittis ligula. Sed commodo sapien id
              molestie elementum. Pellentesque aliquam pharetra elementum.
              Vestibulum et consectetur leo.
            </p>
          </article>
          <article>
            <div className={style.data}>
              <span>Fecha: 12 dic</span>
              <span>Categorías: Pruebas</span>
            </div>
            <h4>
              <a href="#">Título del artículo</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor est urna, id tincidunt diam gravida eu. Vestibulum vitae
              sem lacus. Vestibulum eget sagittis ligula. Sed commodo sapien id
              molestie elementum. Pellentesque aliquam pharetra elementum.
              Vestibulum et consectetur leo.
            </p>
          </article>
          <article>
            <div className={style.data}>
              <span>Fecha: 12 dic</span>
              <span>Categorías: Pruebas</span>
            </div>
            <h4>
              <a href="#">Título del artículo</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor est urna, id tincidunt diam gravida eu. Vestibulum vitae
              sem lacus. Vestibulum eget sagittis ligula. Sed commodo sapien id
              molestie elementum. Pellentesque aliquam pharetra elementum.
              Vestibulum et consectetur leo.
            </p>
          </article>
          <article>
            <div className={style.data}>
              <span>Fecha: 12 dic</span>
              <span>Categorías: Pruebas</span>
            </div>
            <h4>
              <a href="#">Título del artículo</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor est urna, id tincidunt diam gravida eu. Vestibulum vitae
              sem lacus. Vestibulum eget sagittis ligula. Sed commodo sapien id
              molestie elementum. Pellentesque aliquam pharetra elementum.
              Vestibulum et consectetur leo.
            </p>
          </article>
          <article className={style.blog}>
            <a href="#"> Ir al blog</a>

          </article>
        </section>
        {/* <!-- Fin articulos --> */}
      </section>
      {/* <!-- Inicio FOOTER --> */}
      <div className={style.clearFloat} />
      <footer className={style.footer}>
        <div className={style.wrap}>
        <nav className={style.menuFooter}>
          <h5>MENÚ</h5>
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
          <div className={style.location}>
            <h5>¿DONDE ESTAMOS?</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.0034831246087!2d-58.38276103029423!3d-34.60380919830959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf425a4a19%3A0xaf19ab7297421a8!2sAv.%209%20de%20Julio%20%26%20Av.%20Corrientes%2C%20C1048%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1712202891338!5m2!1ses!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className={style.information}>
            <h5>Desarrollado con</h5>
            <p>
              <img src={HTML} alt="logo" />
            </p>
            <h5>Optimizado para</h5>
            <p className={style.browsers}>
              <a href="#">
                <img src={fireFox} alt="fireFox" />
              </a>
              <a href="#">
                <img src={chrome} alt="Chrome" />
              </a>
              <a href="#">
                <img src={opera} alt="Opera" />
              </a>
              <a href="#">
                <img src={safari} alt="Safari" />
              </a>
              <a href="#">
                <img src={android} alt="Android" />
              </a>
              <a href="#">
                <img src={apple} alt="Apple" />
              </a>
            </p>
            <h5>AUTOR</h5>
            <p> &copy; Melani Alassia WEB - curso Master de CSS con Vístor Robles</p>
            </div>
        </div>
      </footer>
      {/* <!-- Fin FOOTER --> */}

    </div>
  );
}

export default App;
