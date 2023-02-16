import React from "react";
import Nav from "./Nav";
const Header = () => {
  return (
    <>
      <div id="svg-icons-container" style={{ display: "none" }} />

      {/* header */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* navbar-toggle */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <svg className="icon-toggle cursor-point">
              <use xlinkHref="#svg-icon-toggle" />
            </svg>
          </label>
          <Nav />
          {/* logo */}
          <a className="header-logo-container" href="#">
            <svg className="icon-logo cursor-point">
              <use xlinkHref="#svg-icon-logo" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
