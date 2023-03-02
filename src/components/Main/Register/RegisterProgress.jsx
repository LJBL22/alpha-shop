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

function DataOrder({ dataOrder }) {
  return <span className="progress-bar" data-order={dataOrder}></span>;
}

const RegisterProgress = () => {
  return (
    <section className="progress-container col col-12">
      <DataPhase dataPhase="address" text={1} progressLabel="寄送地址" />
      <DataOrder dataOrder={1} />
      <DataPhase dataPhase="shipping" text={2} progressLabel="運送方式" />
      <DataOrder dataOrder={2} />
      <DataPhase dataPhase="credit-card" text={3} progressLabel="付款資訊" />
    </section>
  );
};

export default RegisterProgress;
