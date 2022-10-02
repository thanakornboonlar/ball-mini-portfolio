import { useState } from "react";
import "../style/navbar-style.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else setIsOpen(false);
  };

  return (
    <nav className="nav-section">
      <div className="header-bar">
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
        <div className="nav-dropdown" onClick={handleClick}>
          <svg
            width="70"
            height="60"
            viewBox="0 0 25 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5625 18.875H23.4375C24.3 18.875 25 18.175 25 17.3125C25 16.45 24.3 15.75 23.4375 15.75H1.5625C0.7 15.75 0 16.45 0 17.3125C0 18.175 0.7 18.875 1.5625 18.875ZM1.5625 11.0625H23.4375C24.3 11.0625 25 10.3625 25 9.5C25 8.6375 24.3 7.9375 23.4375 7.9375H1.5625C0.7 7.9375 0 8.6375 0 9.5C0 10.3625 0.7 11.0625 1.5625 11.0625ZM1.5625 3.25H23.4375C24.3 3.25 25 2.55 25 1.6875C25 0.825 24.3 0.125 23.4375 0.125H1.5625C0.7 0.125 0 0.825 0 1.6875C0 2.55 0.7 3.25 1.5625 3.25Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {isOpen === true ? (
        <div className="dropdown-container">
          <div className="dropdown-item">About</div>
          <div className="dropdown-item">Passions</div>
          <div className="dropdown-item">Portfolio</div>
          <div className="dropdown-item">Contact</div>
        </div>
      ) : null}
    </nav>
  );
}

export default NavBar;
