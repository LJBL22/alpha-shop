import React from "react";
import { RadioGroup, Phase } from "./StepCommons";

export default function StepTwo() {
  return (
    <Phase formTitle="運送方式" dataPhase="shipping">
      <RadioGroup
        dataPrice="0"
        priceText="免費"
        id="shipping-standard"
        checked="true"
        text="標準運送"
        period="約 3~7 個工作天"
      />
      <RadioGroup
        dataPrice="500"
        priceText="$500"
        id="shipping-dhl"
        text="DHL 貨運"
        period="48 小時內送達"
      />
    </Phase>
  );
}
