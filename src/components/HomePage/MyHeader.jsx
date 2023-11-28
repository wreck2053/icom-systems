import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import SearchBox from "./SearchBox";
import { Link } from 'react-router-dom';

function MyHeader() {
  return (
    <>
      <SearchBox />
      <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            I-Com Systems
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-page">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://www.google.com/"
                  target="_blank"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/product-page">
                      View all products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.google.com/"
                      target="_blank"
                    >
                      SSD
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.google.com/"
                      target="_blank"
                    >
                      External Drives SSD
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.google.com/"
                      target="_blank"
                    >
                      Hard Drives
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.google.com/"
                      target="_blank"
                    >
                      External Drives HDD
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" id="search-form">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search-input"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container" id="search-results"></div>
      <script src={bootstrapBundle}></script>
    </>
  );
}

export default MyHeader;
