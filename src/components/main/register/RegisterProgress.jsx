import React from "react";
import { ReactComponent as IconPgComplete } from "../../../assets/icons/pg-complete.svg";

function DataPhase({ dataPhase, text, progressLabel }) {
  return (
    <>
      <span className="progress-group" data-phase={dataPhase}>
        <span className="progress-icon">
          <span className="text">{text}</span>
          <IconPgComplete className="icon cursor-point" />
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
      <section className="progress-container col col-12">
        <DataPhase dataPhase="address" text={1} progressLabel="寄送地址" />
        <DataOrder dataOrder={1} />
        <DataPhase dataPhase="shipping" text={2} progressLabel="運送方式" />
        <DataOrder dataOrder={2} />
        <DataPhase dataPhase="credit-card" text={3} progressLabel="付款資訊" />
      </section>
    </div>
  );
};

// const RegisterProgress = () => {
//   return (
//     <section className="progress-container col col-12">
//       <span className="progress-group" data-phase="address">
//         <span className="progress-icon">
//           <span className="text">1</span>
//           <svg className="icon cursor-point">
//             <use xlinkHref="#svg-icon-pg-complete" />
//           </svg>
//         </span>
//         <span className="progress-label">寄送地址</span>
//       </span>
//       <span className="progress-bar" data-order={1} />
//       <span className="progress-group" data-phase="shipping">
//         <span className="progress-icon">
//           <span className="text">2</span>
//           <svg className="icon cursor-point">
//             <use xlinkHref="#svg-icon-pg-complete" />
//           </svg>
//         </span>
//         <span className="progress-label">運送方式</span>
//       </span>
//       <span className="progress-bar" data-order={2} />
//       <span className="progress-group" data-phase="credit-card">
//         <span className="progress-icon">
//           <span className="text">3</span>
//           <svg className="icon cursor-point">
//             <use xlinkHref="#svg-icon-pg-complete" />
//           </svg>
//         </span>
//         <span className="progress-label">付款資訊</span>
//       </span>
//     </section>
//   );
// };

export default RegisterProgress;
