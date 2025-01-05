import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#!">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img className={styles.navLogo} alt="logo" src="./eoalogo1.png" />
            }
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="events.html">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="gallery.html">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="aboutus.html">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={styles.imageBg}>
        <div>
          <h1 className={styles.textOnImg}>CONNECT, SHARE, AND GROW</h1>
          <h1 className={styles.textOnImg}>TOGETHER</h1>
          <p1 className={styles.subtext}>
            Building a vibrant community for all residents in Edge of Auburn
          </p1>
        </div>
      </div>
    </>
  );
};

export default Header;
