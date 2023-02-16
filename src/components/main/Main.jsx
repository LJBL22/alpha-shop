import React from "react";
import ProgressControl from "./ProgressControl";
import Register from "./Register/Register";
import Cart from "./Cart";

const Main = () => {
  return (
    <>
      <main class="site-main">
        <div class="main-container">
          <Register />
          <Cart />
          <ProgressControl />
        </div>
      </main>
    </>
  );
};

export default Main;
