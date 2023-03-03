import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function RegisterForm({
  shippingFee,
  setShippingFee,
  onRadioChange,
}) {
  return (
    <section className="form-container col col-12">
      <StepOne />
      <StepTwo
        shippingFee={shippingFee}
        setShippingFee={setShippingFee}
        onRadioChange={onRadioChange}
      />
      <StepThree />
    </section>
  );
}
