export default function Navbar(){
    return(
        <div >
            <div className="parent desk-nav container">

                <div className="child">
                     <ul>
                    <h6 className="nav-item text-warning">finsweet</h6>
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Menu</li>
                        <li className="nav-item">About Us</li>
                        <li className="nav-item">Our Story</li>
                        <li className="nav-item">Blog</li>
                        <li className="nav-item">Contact</li>
                     </ul>

                </div>
                <div className="child2">
                        <h6 className="text-warning" style={{marginTop:"20px"}}>clone project <span></span><i className="fas fa-arrow-right"></i></h6>
                </div>

            </div>

            <div className="media-nav">
            <nav class="navbar navbar-expand-lg  bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        
        </div>

    
    )
}