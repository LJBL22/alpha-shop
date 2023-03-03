import React from "react";
import ProgressControl from "./ProgressControl";
import Register from "./Register/Register";
import Cart from "./Cart";
import { useState } from "react";

const Main = () => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [shippingFee, setShippingFee] = useState("免費");
  const handleRadioChange = (price) => {
    setShippingFee(price);
  };
  return (
    <main className="site-main">
      <div className="main-container">
        <Register
          currentPhase={currentPhase}
          shippingFee={shippingFee}
          setShippingFee={setShippingFee}
          onRadioChange={handleRadioChange}
        />
        <Cart shippingFee={shippingFee} setShippingFee={setShippingFee} />
        <ProgressControl
          currentPhase={currentPhase}
          setCurrentPhase={setCurrentPhase}
        />
      </div>
    </main>
  );
};

export default Main;
