import { createContext } from "react";
//A6 功能一：從 CartContext 取購物車資料
const cartItems = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 617,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 524,
    quantity: 5,
  },
]

const cardInfo = {
  cardholder: "",
  cardNumber: "",
  expiration: "",
  cvc: ""
}

//提醒：createContext 內的參數是初始值，子元件會先從最近的 Provider 取值，若無才從此拿初始值。
export const CartContext = createContext(cartItems)

//A6 功能二
//創立一個 context 儲存信用卡資料（物件）,不能為空物件，否則會跳錯誤：試圖想更改 uncontrolled input
export const CardInfoContext = createContext(cardInfo)