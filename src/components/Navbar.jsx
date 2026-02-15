const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 px-lg-5 fixed-top">

      <div className="container-fluid">

        {/* LOGO */}
        <a className="navbar-brand thematic-logo" href="/">
          T h e m a t i c <span>   E v e n t s</span>
        </a>

        {/* HAMBURGER BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSE MENU */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-lg-4 text-center text-lg-start">

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#work">Work</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact-section">Contact</a>
            </li>

          </ul>
        </div>

      </div>

      {/* STYLE */}
      <style>{`
        .thematic-logo {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 3px;
          text-decoration: none;
          color: #000;
          font-family: "Bebas Neue", sans-serif;
        }

        .thematic-logo span {
          color: #0dcaf0;
          font-weight: 600;
        }

        .nav-link {
          font-weight: 500;
        }

        .nav-link:hover {
          color: #0dcaf0;
        }
      `}</style>

    </nav>
  );
};

export default Navbar;

