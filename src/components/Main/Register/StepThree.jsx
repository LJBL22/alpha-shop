import { InputGroup, Col12, Phase } from "./StepCommons";
import { wLg3, wLg4, smFull } from "src/constants";
import { useContext } from "react";
import { CardInfoContext } from "src/components/Main/CartContext";

export default function StepThree() {
  //解構賦值，取 context Provider 傳遞的兩個變數（這裡都會用到）
  const { cardInfo, setCardInfo } = useContext(CardInfoContext);

  const handleChange = (e) => {
    // e.target 是一個事件目標對象，它有一個 name 和 value 屬性。將 { name, value } 寫在花括號內，代表將 e.target 對象中的 name 和 value 屬性提取出來，然後分別賦值給變數 name 和 value。
    //取 e.target 兩個屬性並賦值給變數 name & value
    const { name, value } = e.target;
    setCardInfo((prevCardInfo) => ({ ...prevCardInfo, [name]: value }));
  };

  //1. 當使用者在這個輸入框中輸入資料時，會觸發 onChange 事件
  //2. 在 handleChange 函式中更新 cardInfo 物件中對應的屬性值
  //3. 當 cardInfo 物件中對應的屬性值被更新時
  //4. 『被綁定 cardInfo 物件屬性值』的 『value 屬性就』會被更新，顯示最新的值。
  return (
    <Phase formTitle="付款資訊" dataPhase="credit-card">
      <Col12>
        <InputGroup
          className={`${wLg4} ${smFull}`}
          inputLabel="持卡人姓名"
          type="text"
          placeHolder="John Doe"
          name="cardholder"
          value={cardInfo.cardholder}
          onChange={handleChange}
        />
      </Col12>
      <Col12>
        <InputGroup
          className={`${wLg4} ${smFull}`}
          inputLabel="卡號"
          type="text"
          placeHolder="1111 2222 3333 4444"
          name="cardNumber"
          value={cardInfo.cardNumber}
          onChange={handleChange}
        />
      </Col12>
      <Col12>
        <InputGroup
          className={`${wLg3} input-w-sm-s3`}
          inputLabel="有效期限"
          type="text"
          placeHolder="MM/YY"
          name="expiration"
          value={cardInfo.expiration}
          onChange={handleChange}
        />
        <InputGroup
          className={`${wLg3} input-w-sm-s3`}
          inputLabel="CVC / CCV"
          type="text"
          placeHolder="123"
          name="cvc"
          value={cardInfo.cvc}
          onChange={handleChange}
        />
      </Col12>
    </Phase>
  );
}
