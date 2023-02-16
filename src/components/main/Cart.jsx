import React from "react";
import { ReactComponent as IconMinus } from "../../assets/icons/minus.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plus.svg";

const initialItems = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

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
              <span className="product-count" />
              <IconPlus className="product-action plus" />
            </div>
          </div>
          <div className="price" />
        </div>
      </div>
    </>
  );
};

const CartInfo = () => {
  return (
    <>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price"></div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price"></div>
      </section>
    </>
  );
};

export default function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {initialItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </section>
      <CartInfo />
    </section>
  );
}
