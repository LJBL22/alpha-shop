import { ReactComponent as IconMinus } from "src/assets/icons/minus.svg";
import { ReactComponent as IconPlus } from "src/assets/icons/plus.svg";
import { initialItems } from "src/constants";
import { useState } from "react";

export default function Cart() {
  const [cartItems, setTotalPrice] = useState(initialItems);
  const totalPrice = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((sum, price) => sum + price);
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {initialItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </section>
      <CartInfo price={totalPrice} />
    </section>
  );
}
const Item = ({ id, quantity, price, img, name }) => {
  return (
    <>
      <div
        className="product-container col col-12"
        data-count={quantity}
        data-price={price}
      >
        <img className="img-container" src={img} alt="product" />
        <div className="product-info">
          <div className="product-name">{name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <IconMinus className="product-action minus" />
              <span className="product-count">{3}</span>
              <IconPlus className="product-action plus" />
            </div>
          </div>
          <div className="price" />
        </div>
      </div>
    </>
  );
};

const CartInfo = ({ price }) => {
  return (
    <>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{price}</div>
      </section>
    </>
  );
};
