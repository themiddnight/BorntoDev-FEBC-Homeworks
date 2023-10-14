const navbarHtml = `
<nav class="navbar navbar-expand-lg sticky-top shadow custom-nav backdrop-blur">
<div class="container">
    <a class="navbar-brand" href="index.html">
        <span class="fw-bold text-warning me-1">
            MIDDNIGHT
            <svg style="transform: translateY(-1px);" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
            <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
            </svg>
        </span>
        <span class="fw-bold">Academy</span>
    </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Courses
        </a>
        <ul class="dropdown-menu custom-dropdown border-0">
          <li><a class="dropdown-item" href="courses.html">All courses</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="course.html">Guitar basics</a></li>
          <li><a class="dropdown-item" href="course.html">Vocal Techniques</a></li>
          <li><a class="dropdown-item" href="course.html">Piano for Beginners</a></li>
          <li><a class="dropdown-item" href="course.html">Music Theory</a></li>
          <li><a class="dropdown-item" href="course.html">Music Production</a></li>
          <li><a class="dropdown-item" href="course.html">Music Arrangement</a></li>
        </ul>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Blogs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Community</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
    <form class="d-flex mb-2 mb-sm-0" role="search">
      <input class="form-control rounded-pill me-2 px-4 border-0 custom-search" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-none" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      </button>
    </form>
  </div>
</div>
</nav>
`;

const footerHtml = `
<div class="px-4">
  <div class="container">
    <footer class="pt-5">
      <div class="row">
        <div class="col col-md-6 mb-3">
          <h5>Section</h5>
          <ul class="nav row-cols-2">
            <li class="nav-item col mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item col mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item col mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item col mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item col mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2 gap-sm-3">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control bg-dark-subtle rounded-pill px-4 border-0" placeholder="Email address">
              <button class="btn btn-outline-light rounded-pill px-4" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>
`;

// insert navbarHtml and footerHtml into the body
document.body.insertAdjacentHTML("afterbegin", navbarHtml);
document.body.insertAdjacentHTML("beforeend", footerHtml);