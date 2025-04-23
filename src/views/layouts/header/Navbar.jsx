import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav class="navbar navbar-expand-lg bg-transparent px-lg-5 py-lg-3">
          <div class="container-fluid">
            <a class="navbar-brand text-uppercase lead" href="#">KR✒️SH</a>
            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto gap-4 fw-bold">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                  <button class="nav-link btn bg-warning px-4 rounded-4">Download CV</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar