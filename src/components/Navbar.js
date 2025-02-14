export default function Navbar() {
    return (
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
          <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    )
  }
  