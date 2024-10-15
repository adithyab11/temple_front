import React from 'react'

const Nav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Temple App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Darshan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Poojas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Event</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Special Cermony
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Choroonu</a></li>
            <li><a class="dropdown-item" href="#"> Vidyarambam</a></li>
            <li><a class="dropdown-item" href="#">Kalyanam</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav