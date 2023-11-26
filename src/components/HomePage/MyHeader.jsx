import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import SearchBox from "./SearchBox";

function MyHeader() {
  return (
    <>
      <SearchBox />
      <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            I-Com Systems
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-page">
                  About Us
                </a>
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
                    <a className="dropdown-item" href="/product-page">
                      View all products
                    </a>
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
