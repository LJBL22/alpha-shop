import { ReactComponent as IconMinus } from "src/assets/icons/minus.svg";
import { ReactComponent as IconPlus } from "src/assets/icons/plus.svg";
import { initialItems } from "src/constants";
import { useState } from "react";

export default function Cart({ shippingFee }) {
  //設定購物車產品狀態
  const [cartItems, setCartItems] = useState(initialItems);
  //加總購物車裡的品項金額
  //傳遞 props 到 <Item>
  const productsTotalAmount = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((sum, price) => sum + price);

  const totalAmount =
    shippingFee === 500 ? 500 + productsTotalAmount : 0 + productsTotalAmount;
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <Item cartItems={cartItems} onQuantityChange={setCartItems} />
      </section>
      <CartInfo title="運費" price={shippingFee} />
      <CartInfo title="小計" price={"$ " + totalAmount.toLocaleString()} />
    </section>
  );
}

//將 setCartItems 作為 props 傳遞時，更名為較有意義的 onQuantityChange
const Item = ({ cartItems, onQuantityChange }) => {
  // 商品數量增減
  function handleAmountClick(e) {
    const targetId = e.target.closest(".product-container").id;
    const isMinus = e.target.parentElement.classList.contains("minus");
    const nextProduct = cartItems.map((item) => {
      if (item.id === targetId) {
        return {
          ...item,
          quantity: isMinus ? item.quantity - 1 : item.quantity + 1,
        };
      }
      return item;
    });
    // 數量低於 1 之商品移除
    const selectedItem = nextProduct.filter((item) => item.quantity > 0);
    onQuantityChange(selectedItem);
  }

  // 動態渲染商品清單
  const cartLists = cartItems.map((item) => {
    return (
      <div
        className="product-container col col-12"
        data-count={item.quantity}
        data-price={item.price}
        key={item.id}
        id={item.id}
      >
        <img className="img-container" src={item.img} alt="product" />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <IconMinus
                className="product-action minus"
                onClick={handleAmountClick}
              />
              <span className="product-count">{item.quantity}</span>
              <IconPlus
                className="product-action plus"
                onClick={handleAmountClick}
              />
            </div>
          </div>
          <div className="price" />$ {item.price}
        </div>
      </div>
    );
  });
  return cartLists;
};

const CartInfo = ({ title, price }) => {
  return (
    <>
      <section className="cart-info shipping col col-12">
        <div className="text">{title}</div>
        <div className="price">{price}</div>
      </section>
    </>
  );
};
