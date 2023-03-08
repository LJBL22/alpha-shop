import React from "react";

function RadioGroup({
  shippingFee,
  shippingType,
  text,
  period,
  onRadioChange,
}) {
  return (
    <label className="radio-group col col-12" data-price={shippingFee}>
      <input
        id={`shipping-${shippingType}`}
        type="radio"
        name="shipping"
        defaultChecked={shippingType === "standard" && true}
        onChange={() => onRadioChange(shippingFee)}
      />
      <div className="radio-info">
        <div className="col col-12">
          <div className="text">{text}</div>
          <div className="price">
            {typeof shippingFee === "number" ? "$ " + shippingFee : shippingFee}
          </div>
        </div>
        <div className="period col col-12">{period}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  );
}

function InputGroup({
  className,
  inputLabel,
  type,
  placeHolder,
  value,
  name,
  onChange,
}) {
  return (
    <div className={`input-group ${className}`}>
      <div className="input-label">{inputLabel}</div>
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={onChange}
      />
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

export { Phase, Col12, RadioGroup, InputGroup, InputGroupWithSelect };
