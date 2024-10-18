import "./styles.css";

export function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h3 className="logo">
          <a
            href="https://kecbook404.netlify.app/"
            className="link"
            target="_blank"
          >
            Books
          </a>
        </h3>
        <ul className="nav-links">
          <li>
            <a
              href="https://github.com/ARIAVIKNEESH/KEC_BOOK"
              className="link"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/_girlwhocodes"
              className="link"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
