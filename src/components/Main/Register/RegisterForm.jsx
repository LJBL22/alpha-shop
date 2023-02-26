import React from "react";
import { cities, titles } from "src/constants";

const wLg3 = "input-w-lg-3";
const wLg4 = "input-w-lg-4";
const smFull = "input-w-sm-full";

function RadioGroup({ dataPrice, id, checked = false, text, period }) {
  return (
    <label className="radio-group col col-12" data-price={dataPrice}>
      <input id={id} type="radio" name="shipping" checked={checked} />
      <div className="radio-info">
        <div className="col col-12">
          <div className="text">{text}</div>
          <div className="price"></div>
        </div>
        <div className="period col col-12">{period}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  );
}

function InputGroup({ className, inputLabel, type, placeHolder }) {
  return (
    <div className={`input-group ${className}`}>
      <div className="input-label">{inputLabel}</div>
      <input type={type} placeholder={placeHolder} />
    </div>
  );
}

function InputGroupWithSelect({
  className,
  inputLabel,
  required = false,
  options,
}) {
  return (
    <div className={`input-group ${className}`}>
      <div className="input-label">{inputLabel}</div>
      <div className="select-container">
        <select aria-label="label for options" required={required}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Col12({ children }) {
  return <div className="col col-12">{children}</div>;
}

function Phase({ formTitle, dataPhase, children }) {
  return (
    <form className="col col-12" data-phase={dataPhase}>
      <h3 className="form-title">{formTitle}</h3>
      <section className="form-body col col-12">{children}</section>
    </form>
  );
}

const RegisterForm = () => {
  return (
    <section className="form-container col col-12">
      {/* <!-- address phase --> */}
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
      {/* <!-- shipping phase --> */}
      <Phase formTitle="運送方式" dataPhase="shipping">
        <RadioGroup
          dataPrice="0"
          id="shipping-standard"
          checked="true"
          text="標準運送"
          period="約 3~7 個工作天"
        />
        <RadioGroup
          dataPrice="500"
          id="shipping-dhl"
          text="DHL 貨運"
          period="48 小時內送達"
        />
      </Phase>
      {/* <!-- credit-card phase --> */}
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
    </section>
  );
};

export default RegisterForm;
