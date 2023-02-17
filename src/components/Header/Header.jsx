import React from "react";
import Nav from "./Nav";
import { ReactComponent as IconLogo } from "src/assets/icons/logo.svg";
import { ReactComponent as IconToggle } from "src/assets/icons/toggle.svg";

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
            <IconToggle className="icon-toggle cursor-point" />
          </label>
          <Nav />
          {/* logo */}
          <a className="header-logo-container" href="#">
            <IconLogo className="icon-logo cursor-point" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
