import { InputGroup, Col12, Phase } from "./StepCommons";
import { wLg3, wLg4, smFull } from "src/constants";
import { useState, useContext } from "react";
import { CreditCardInfoContext } from "src/components/Main/CartContext";

export default function StepThree({ e }) {
  //   2-1 實作 useState 來儲存進這個 context
  const creditCardInfo = useContext(CreditCardInfoContext);
  const [inputInfo, setInputInfo] = useState(creditCardInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputInfo({ ...inputInfo, [name]: value });
  };

  //接下來 抓取 inputInfo ，利用每一次更新（新增加入） setState 存到 context 中

  // 2-3 誰會更動到總金額 、 在那邊放入 setter function
  //cart 小計也要 一起存進去，達到跨元件儲存
  // 畫面更新 > state
  // 資料更新 > context 儲存的資料是否要更新
  return (
    <CreditCardInfoContext.Provider value={inputInfo}>
      <Phase formTitle="付款資訊" dataPhase="credit-card">
        <Col12>
          <InputGroup
            className={`${wLg4} ${smFull}`}
            inputLabel="持卡人姓名"
            type="text"
            placeHolder="John Doe"
            name="cardholder"
            onChange={handleChange}
          />
        </Col12>
        <Col12>
          <InputGroup
            className={`${wLg4} ${smFull}`}
            inputLabel="卡號"
            type="text"
            name="cardNumber"
            onChange={handleChange}
            placeHolder="1111 2222 3333 4444"
          />
        </Col12>
        <Col12>
          <InputGroup
            className={`${wLg3} input-w-sm-s3`}
            inputLabel="有效期限"
            type="text"
            name="expiration"
            onChange={handleChange}
            placeHolder="MM/YY"
          />
          <InputGroup
            className={`${wLg3} input-w-sm-s3`}
            inputLabel="CVC / CCV"
            type="text"
            name="cvc"
            placeHolder="123"
            onChange={handleChange}
          />
        </Col12>
      </Phase>
      {/* 檢查用 */}
      {JSON.stringify(inputInfo)}
    </CreditCardInfoContext.Provider>
  );
}
