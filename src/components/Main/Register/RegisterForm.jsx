import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function RegisterForm() {
  return (
    <section className="form-container col col-12">
      <StepOne />
      <StepTwo />
      <StepThree />
    </section>
  );
}
