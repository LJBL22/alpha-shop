import React from "react";
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

function InputGroupWithSelect({ className, inputLabel, children }) {
  return (
    <div className={`input-group ${className}`}>
      <div className="input-label">{inputLabel}</div>
      {children}
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
              children={
                <div className="select-container">
                  <select>
                    <option value="mr" selected>
                      先生
                    </option>
                    <option value="ms">女士</option>
                    <option value="mx">不明</option>
                  </select>
                </div>
              }
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
              children={
                <div className="select-container">
                  <select required>
                    <option value="">請選擇縣市</option>
                    <option value="KLU">基隆市</option>
                    <option value="TPH">新北市</option>
                    <option value="TPE">臺北市</option>
                    <option value="TYC">桃園市</option>
                    <option value="HSH">新竹縣</option>
                    <option value="HSC">新竹市</option>
                    <option value="MAC">苗栗市</option>
                    <option value="MAL">苗栗縣</option>
                    <option value="TXG">臺中市</option>
                    <option value="CWH">彰化縣</option>
                    <option value="CWS">彰化市</option>
                    <option value="NTC">南投市</option>
                    <option value="NTO">南投縣</option>
                    <option value="YLH">雲林縣</option>
                    <option value="CHY">嘉義縣</option>
                    <option value="CYI">嘉義市</option>
                    <option value="TNN">臺南市</option>
                    <option value="KHH">高雄市</option>
                    <option value="IUH">屏東縣</option>
                    <option value="PTS">屏東市</option>
                    <option value="ILN">宜蘭縣</option>
                    <option value="ILC">宜蘭市</option>
                    <option value="HWA">花蓮縣</option>
                    <option value="HWC">花蓮市</option>
                    <option value="TTC">臺東市</option>
                    <option value="TTT">臺東縣</option>
                    <option value="PEH">澎湖縣</option>
                    <option value="KMN">金門縣</option>
                    <option value="LNN">連江縣</option>
                  </select>
                </div>
              }
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
