import React from "react";
import RegisterForm from "./RegisterForm";
import RegisterProgress from "./RegisterProgress";

const Register = () => {
  return (
    // register
    <section
      class="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      {/* register-title */}
      <h2 class="register-title col col-12">結帳</h2>
      <RegisterProgress />
      <RegisterForm />
    </section>
  );
};

export default Register;
