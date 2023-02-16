import React from "react";

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
      {/* search */}
      <li className="nav-item">
        <svg className="nav-icon cursor-point">
          <use xlinkHref="#svg-icon-search" />
        </svg>
      </li>
      {/* cart */}
      <li className="nav-item">
        <svg className="nav-icon cursor-point">
          <use xlinkHref="#svg-icon-cart" />
        </svg>
      </li>
      <li id="theme-toggle" className="nav-item">
        {/* moon */}
        <svg className="nav-icon cursor-point">
          <use xlinkHref="#svg-icon-moon" />
        </svg>
        {/* sun */}
        <svg className="nav-icon cursor-point">
          <use xlinkHref="#svg-icon-sun" />
        </svg>
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
