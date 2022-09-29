import "../style/navbar-style.css";

function NavBar() {
  return (
    <nav className="header-bar">
      <div className="header-logo">
        <h1>B A L L</h1>
        <h2>D e v e l o p e r</h2>
      </div>
      <div className="nav-bar">
        <div className="nav-item">About</div>
        <div className="nav-item">Passions</div>
        <div className="nav-item">Portfolio</div>
        <div className="nav-item">Contact</div>
      </div>
    </nav>
  );
}

export default NavBar;
