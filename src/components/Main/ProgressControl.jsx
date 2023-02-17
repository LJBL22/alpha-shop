import React from "react";
import { ReactComponent as RightArrow } from "src/assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "src/assets/icons/left-arrow.svg";

const ProgressControl = () => {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <RightArrow className="cursor-point" />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          <LeftArrow className="cursor-point" />
          上一步
        </button>
        <button className="next">
          下一步
          <RightArrow className="cursor-point" />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <LeftArrow className="cursor-point" />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  );
};

export default ProgressControl;
