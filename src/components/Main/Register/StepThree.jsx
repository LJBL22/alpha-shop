import React from "react";
import { InputGroup, Col12, Phase } from "./RegisterCommons";
import { wLg3, wLg4, smFull } from "src/constants";

export default function StepThree() {
  return (
    <Phase formTitle="付款資訊" dataPhase="credit-card">
      <Col12>
        <InputGroup
          className={`${wLg4} ${smFull}`}
          inputLabel="持卡人姓名"
          type="tel"
          placeHolder="John Doe"
        />
      </Col12>
      <Col12>
        <InputGroup
          className={`${wLg4} ${smFull}`}
          inputLabel="卡號"
          type="text"
          placeHolder="1111 2222 3333 4444"
        />
      </Col12>
      <Col12>
        <InputGroup
          className={`${wLg3} input-w-sm-s3`}
          inputLabel="有效期限"
          type="text"
          placeHolder="MM/YY"
        />
        <InputGroup
          className={`${wLg3} input-w-sm-s3`}
          inputLabel="CVC / CCV"
          type="text"
          placeHolder="123"
        />
      </Col12>
    </Phase>
  );
}
