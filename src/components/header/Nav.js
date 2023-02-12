import React from "react";

const SiteMenuList = () => {
  return "siteMenuList";
};

const SiteActionList = () => {
  return <h4>'site-action-list'</h4>;
};

export default function Nav() {
  return (
    <>
      <div>Nav</div>
      <SiteMenuList />
      <SiteActionList />
    </>
  );
}
