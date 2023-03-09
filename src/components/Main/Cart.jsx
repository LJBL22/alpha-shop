import { ReactComponent as IconMinus } from "src/assets/icons/minus.svg";
import { ReactComponent as IconPlus } from "src/assets/icons/plus.svg";
import { useContext } from "react";
import { CartContext } from "src/components/Main/CartContext";

//這裡三個 prop 都是由 main > Cart 傳遞而來 (非 context )
export default function Cart({ shippingFee, onQuantityChange, totalAmount }) {
  // console.log(`這裡是 cart ${totalAmount}`);
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <Item onQuantityChange={onQuantityChange} />
      </section>
      <CartInfo
        title="運費"
        price={
          typeof shippingFee === "number" ? "$ " + shippingFee : shippingFee
        }
      />
      <CartInfo title="小計" price={"$ " + totalAmount.toLocaleString()} />
    </section>
  );
}
const Item = ({ onQuantityChange }) => {
  // useContext 會先去 provider 取值，因此這裡取得物件 { cartItems, totalAmount }，這裡只會用到 cartItems
  // 點記法：const cartItems = useContext(CartContext).cartItems;
  // 解構賦值寫法：不用再取名變數、也可取到 context 指定 key-value pair 的值
  const { cartItems } = useContext(CartContext);
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
    <section className="cart-info shipping col col-12">
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
};
