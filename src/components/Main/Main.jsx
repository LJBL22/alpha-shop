import React from "react";
import ProgressControl from "./ProgressControl";
import Register from "./Register/Register";
import Cart from "./Cart";
import { useState, useContext } from "react";
import { CardInfoContext, CartContext } from "src/components/Main/CartContext";

const Main = () => {
  const [currentPhase, setCurrentPhase] = useState(1);
  // const initialItems = useContext(CartContext); 簡化成以下寫法、表利用其初始值
  const [cartItems, setCartItems] = useState(useContext(CartContext));
  const [shippingFee, setShippingFee] = useState("免費");
  //信用卡資料管理
  const [cardInfo, setCardInfo] = useState(useContext(CardInfoContext));

  //購物車物件 cartItems 與金額 totalAmount 管理
  //state lifting: 將 state 從子元件<Cart/>提升上來，做 state 管理，讓其他子元件也可以利用。
  const productsTotalAmount = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((sum, price) => sum + price);

  const totalAmount =
    typeof shippingFee === "number"
      ? shippingFee + productsTotalAmount
      : 0 + productsTotalAmount;

  const handleRadioChange = (price) => {
    setShippingFee(price);
  };

  // 原本 onQuantityChange 是單純在 Cart 內以 setCartItems 引入，state lifting 之後就新增此 event handler，表示將調用 setCartItems 更新 cartItems
  const handleQuantityChange = (item) => {
    setCartItems(item);
  };

  return (
    <main className="site-main">
      <div className="main-container">
        {/* 傳入數個變數讓被 provider 包在內的子元件都可以使用；這些變數在此組成一個物件。若要取值需以點記法或解構賦值方式取出 */}
        {/* 子元件會先從最近的 Provider 取值(例如這裡的物件），若無才從 context 拿初始值。 */}
        <CardInfoContext.Provider value={{ cardInfo, setCardInfo }}>
          <CartContext.Provider value={{ cartItems, totalAmount }}>
            <Register
              currentPhase={currentPhase}
              shippingFee={shippingFee}
              setShippingFee={setShippingFee}
              onRadioChange={handleRadioChange}
            />
            <Cart
              shippingFee={shippingFee}
              setShippingFee={setShippingFee}
              totalAmount={totalAmount}
              onQuantityChange={handleQuantityChange}
            />
            <ProgressControl
              currentPhase={currentPhase}
              setCurrentPhase={setCurrentPhase}
            />
          </CartContext.Provider>
        </CardInfoContext.Provider>
      </div>
    </main>
  );
};

export default Main;
