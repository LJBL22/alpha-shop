import React from "react";
import { ReactComponent as IconSearch } from "src/assets/icons/search.svg";
import { ReactComponent as IconCart } from "src/assets/icons/cart.svg";
import { ReactComponent as IconMoon } from "src/assets/icons/moon.svg";
import { ReactComponent as IconSun } from "src/assets/icons/sun.svg";

const SiteMenuList = () => {
  return (
    <ul className="nav-list site-menu-list mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">
          男款
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          女款
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          最新消息
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          客製商品
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          聯絡我們
        </a>
      </li>
    </ul>
  );
};

const SiteActionList = () => {
  return (
    <ul className="nav-list site-action-list">
      <li className="nav-item">
        <IconSearch className="nav-icon cursor-point" />
      </li>
      <li className="nav-item">
        <IconCart className="nav-icon cursor-point" />
      </li>
      <li id="theme-toggle" className="nav-item">
        <IconMoon className="nav-icon cursor-point" />
        <IconSun className="nav-icon cursor-point" />
      </li>
    </ul>
  );
};

export default function Nav() {
  return (
    <>
      {/* navbar-menu */}
      <nav className="navbar-menu">
        <SiteMenuList />
        <SiteActionList />
      </nav>
    </>
  );
}
