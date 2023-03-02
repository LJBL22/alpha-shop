import { ReactComponent as RightArrow } from "src/assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "src/assets/icons/left-arrow.svg";

const ProgressControl = ({ currentPhase, setCurrentPhase }) => {
  const handleClick = (e) => {
    if (e === "prev") {
      if (currentPhase === 1) return;
      setCurrentPhase((p) => p - 1);
    } else if (e === "next") {
      if (currentPhase === 3) return;
      setCurrentPhase((p) => p + 1);
    }
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
        <button className="next">確認下單</button>
      </section>
    </section>
  );
};

export default ProgressControl;
