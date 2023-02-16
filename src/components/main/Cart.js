import React from "react";

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
        class="product-container col col-12"
        data-count={quantity}
        data-price={price}
      >
        <img class="img-container" src={img} alt="product" />
        <div class="product-info">
          <div class="product-name">{name}</div>
          <div class="product-control-container">
            <div class="product-control">
              <svg class="product-action minus">
                <use xlinkHref="#svg-icon-minus"></use>
              </svg>
              <span class="product-count"></span>
              <svg class="product-action plus">
                <use xlinkHref="#svg-icon-plus"></use>
              </svg>
            </div>
          </div>
          <div class="price"></div>
        </div>
      </div>
    </>
  );
};

const CartInfo = () => {
  return (
    <>
      <section class="cart-info shipping col col-12">
        <div class="text">運費</div>
        <div class="price"></div>
      </section>
      <section class="cart-info total col col-12">
        <div class="text">小計</div>
        <div class="price"></div>
      </section>
    </>
  );
};

export default function Cart() {
  return (
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
      <section class="product-list col col-12" data-total-price="0">
        {initialItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </section>
      <CartInfo />
    </section>
  );
}
