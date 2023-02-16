import React from "react";
import { cities, titles } from "../../../constants/index";

const wLg3 = "input-w-lg-3";
const wLg4 = "input-w-lg-4";
const smFull = "input-w-sm-full";

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
        <select required={required}>
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
    <div>
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
        {/* <form className="col col-12" data-phase="shipping">
          <h3 className="form-title">運送方式</h3>
          <section className="form-body col col-12">
            <label className="radio-group col col-12" data-price="0">
              <input
                id="shipping-standard"
                type="radio"
                name="shipping"
                checked
              />
              <div className="radio-info">
                <div className="col col-12">
                  <div className="text">標準運送</div>
                  <div className="price"></div>
                </div>
                <div className="period col col-12">約 3~7 個工作天</div>
              </div>
              <div className="radio-box-border"></div>
            </label>
            <label className="radio-group col col-12" data-price="500">
              <input id="shipping-dhl" type="radio" name="shipping" />
              <div className="radio-info">
                <div className="col col-12">
                  <div className="text">DHL 貨運</div>
                  <div className="price"></div>
                </div>
                <div className="period col col-12">48 小時內送達</div>
              </div>
              <div className="radio-box-border"></div>
            </label>
          </section>
        </form> */}

        {/* <!-- credit-card phase --> */}
        {/* <form className="col col-12" data-phase="credit-card">
          <h3 className="form-title">付款資訊</h3>
          <section className="form-body col col-12">
            <div className="col col-12">
              <div className="input-group input-w-lg-4 input-w-sm-full">
                <div className="input-label">持卡人姓名</div>
                <input type="text" placeholder="John Doe" />
              </div>
            </div>
            <div className="col col-12">
              <div className="input-group input-w-lg-4 input-w-sm-full">
                <div className="input-label">卡號</div>
                <input type="text" placeholder="1111 2222 3333 4444" />
              </div>
            </div>
            <div className="col col-12">
              <div className="input-group input-w-lg-3 input-w-sm-s3">
                <div className="input-label">有效期限</div>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="input-group input-w-lg-3 input-w-sm-s3">
                <div className="input-label">CVC / CCV</div>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </section>
        </form> */}
      </section>
    </div>
  );
};

export default RegisterForm;
