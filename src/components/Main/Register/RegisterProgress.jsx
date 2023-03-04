import React from "react";
import { ReactComponent as IconPgComplete } from "src/assets/icons/pg-complete.svg";

function DataPhase({ dataPhase, text, progressLabel }) {
  return (
    <span className="progress-group" data-phase={dataPhase}>
      <span className="progress-icon">
        <span className="text">{text}</span>
        <IconPgComplete className="icon cursor-point" />
      </span>
      <span className="progress-label">{progressLabel}</span>
    </span>
  );
}

const RegisterProgress = () => {
  return (
    <section className="progress-container col col-12">
      <DataPhase dataPhase="address" text={1} progressLabel="寄送地址" />
      <span className="progress-bar" data-order="1"></span>
      <DataPhase dataPhase="shipping" text={2} progressLabel="運送方式" />
      <span className="progress-bar" data-order="2"></span>
      <DataPhase dataPhase="credit-card" text={3} progressLabel="付款資訊" />
    </section>
  );
};

export default RegisterProgress;
