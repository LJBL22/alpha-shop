import React from "react";
import RegisterForm from "./RegisterForm";
import RegisterProgress from "./RegisterProgress";

const Register = ({ currentPhase }) => {
  return (
    // register
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase={currentPhase}
      data-total-price="0"
    >
      {/* register-title */}
      <h2 className="register-title col col-12">結帳</h2>
      <RegisterProgress />
      <RegisterForm />
    </section>
  );
};

export default Register;
