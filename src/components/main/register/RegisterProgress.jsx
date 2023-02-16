import React from "react";

function DataPhase({ dataPhase, text, progressLabel }) {
  return (
    <>
      <span className="progress-group" data-phase={dataPhase}>
        <span className="progress-icon">
          <span className="text">{text}</span>
          <svg className="icon cursor-point">
            <use xlinkHref="#svg-icon-pg-complete"></use>
          </svg>
        </span>
        <span className="progress-label">{progressLabel}</span>
      </span>
    </>
  );
}

function DataOrder({ dataOrder }) {
  return <span className="progress-bar" data-order={dataOrder}></span>;
}

const RegisterProgress = () => {
  return (
    <div>
      <section class="progress-container col col-12">
        <DataPhase dataPhase="address" text={1} progressLabel="寄送地址" />
        <DataOrder dataOrder={1} />
        <DataPhase dataPhase="shipping" text={2} progressLabel="運送方式" />
        <DataOrder dataOrder={2} />
        <DataPhase dataPhase="credit-card" text={3} progressLabel="付款資訊" />
      </section>
    </div>
  );
};

export default RegisterProgress;
