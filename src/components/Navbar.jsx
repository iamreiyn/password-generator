function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="https://i.postimg.cc/QxfTfc27/rens.png" alt="Ren's Pass Gen"></img>
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
        <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
              <i class="fa fa-house-user" style={{fontSize:"20px"}}></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.github.com/renisal">
              <i class="fa fa-user" style={{fontSize:"20px"}}></i> Creator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/renisal/password-generator">
              <i class="fa fa-code-fork" style={{fontSize:"20px"}}></i> Source
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/renisal?tab=repositories">
              <i class="fa fa-angles-right" style={{fontSize:"20px"}}></i> More Apps
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
