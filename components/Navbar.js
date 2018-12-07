const Navbar = () => (
  <div className="row">

    <div className="col-sm-1">
    </div>
    <div className="col-sm-10">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Beach</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nature</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Food</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Culture</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Me</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
    <div className="col-sm-1">
    </div>
  </div>
)

export default Navbar
