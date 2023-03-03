import React from "react";
import { RadioGroup, Phase } from "./StepCommons";

export default function StepTwo({ onRadioChange }) {
  return (
    <Phase formTitle="運送方式" dataPhase="shipping">
      <RadioGroup
        shippingFee={"免費"}
        shippingType={"standard"}
        text="標準運送"
        period="約 3~7 個工作天"
        onRadioChange={onRadioChange}
      />
      <RadioGroup
        shippingFee={"$500"}
        shippingType={"dhl"}
        text="DHL 貨運"
        period="48 小時內送達"
        onRadioChange={onRadioChange}
      />
    </Phase>
  );
}
