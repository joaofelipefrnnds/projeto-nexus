import { Link } from "react-router-dom";
const Header = () =>{

    return(
        <main>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="{}">INFOSEC</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" href aria-current="page"><Link to='/' style={{ textDecoration: 'none', color: 'gray' }}>Home</Link></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href aria-current="page"><Link to='/Service' style={{ textDecoration: 'none',  color: 'gray' }}>Serviços</Link></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href aria-current="page"><Link to='/Equipe' style={{ textDecoration: 'none', color: 'gray' }}>Equipe</Link></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href aria-current="page"><Link to='/Contato' style={{ textDecoration: 'none', color: 'gray' }}>Contato</Link></a>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
        </main>
    )
}

export default Header;