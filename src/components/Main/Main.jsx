import React from "react";
import ProgressControl from "./ProgressControl";
import Register from "./Register/Register";
import Cart from "./Cart";
import { useState } from "react";

const Main = () => {
  const [currentPhase, setCurrentPhase] = useState(1);
  return (
    <main className="site-main">
      <div className="main-container">
        <Register currentPhase={currentPhase} />
        <Cart />
        <ProgressControl
          currentPhase={currentPhase}
          setCurrentPhase={setCurrentPhase}
        />
      </div>
    </main>
  );
};

export default Main;
