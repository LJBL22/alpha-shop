import React from "react";
import { cities, titles, wLg3, wLg4, smFull } from "src/constants";
import {
  InputGroup,
  InputGroupWithSelect,
  Col12,
  Phase,
} from "./RegisterCommons";

export default function StepOne() {
  return (
    <Phase formTitle="寄送地址" dataPhase="address">
      <Col12>
        <InputGroupWithSelect
          className="input-w-lg-2 input-w-sm-s1"
          inputLabel="稱謂"
          options={titles}
        />
        <InputGroup
          className={`${wLg4} input-w-sm-s2`}
          inputLabel="姓名"
          type="text"
          placeHolder="請輸入姓名"
        />
      </Col12>
      <Col12>
        <InputGroup
          className={`${wLg3} ${smFull}`}
          inputLabel="電話"
          type="tel"
          placeHolder="請輸入行動電話"
        />
        <InputGroup
          className={`${wLg3} ${smFull}`}
          inputLabel="Email"
          type="email"
          placeHolder="請輸入電子郵件"
        />
      </Col12>
      <Col12>
        <InputGroupWithSelect
          className={`input-w-lg-2 ${smFull}`}
          inputLabel="縣市"
          options={cities}
          required={true}
        />
        <InputGroup
          className={`${wLg4} ${smFull}`}
          inputLabel="地址"
          type="text"
          placeHolder="請輸入地址"
        />
      </Col12>
    </Phase>
  );
}
