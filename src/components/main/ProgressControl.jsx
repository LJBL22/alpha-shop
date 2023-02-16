import React from "react";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";

const ProgressControl = () => {
  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase="address">
        <button class="next">
          下一步
          <RightArrow class="cursor-point" />
        </button>
      </section>
      <section class="button-group col col-12" data-phase="shipping">
        <button class="prev">
          <LeftArrow class="cursor-point" />
          上一步
        </button>
        <button class="next">
          下一步
          <RightArrow class="cursor-point" />
        </button>
      </section>
      <section class="button-group col col-12" data-phase="credit-card">
        <button class="prev">
          <LeftArrow class="cursor-point" />
          上一步
        </button>
        <button class="next">確認下單</button>
      </section>
    </section>
  );
};

export default ProgressControl;
