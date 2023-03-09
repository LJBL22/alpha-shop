import { ReactComponent as RightArrow } from "src/assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "src/assets/icons/left-arrow.svg";
import { useContext } from "react";
import { CartContext, CardInfoContext } from "src/components/Main/CartContext";

const ProgressControl = ({ currentPhase, setCurrentPhase }) => {
  //去最近的 Provider 取資料，解構賦值寫法：
  const { cardInfo } = useContext(CardInfoContext);
  const { totalAmount } = useContext(CartContext);

  const handleClick = (e) => {
    if (e === "prev") {
      if (currentPhase === 1) return;
      setCurrentPhase((p) => p - 1);
    } else if (e === "next") {
      if (currentPhase === 3) return;
      setCurrentPhase((p) => p + 1);
    }
  };
  // A6 功能三：印出小計與 card info
  const handleSubmit = (e) => {
    console.log(cardInfo);
    console.log(totalAmount);
  };

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button
          className="next cursor-point"
          onClick={() => handleClick("next")}
        >
          下一步
          <RightArrow />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button
          className="prev cursor-point"
          onClick={() => handleClick("prev")}
        >
          <LeftArrow />
          上一步
        </button>
        <button
          className="next cursor-point"
          onClick={() => handleClick("next")}
        >
          下一步
          <RightArrow />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button
          className="prev cursor-point"
          onClick={() => handleClick("prev")}
        >
          <LeftArrow />
          上一步
        </button>
        <button className="next cursor-point" onClick={handleSubmit}>
          確認下單
        </button>
      </section>
    </section>
  );
};

export default ProgressControl;
