import { createContext } from "react";
//A6 功能一：從 CartContext 取購物車資料
export const CartContext = createContext([
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
])

//A6 功能二
//創立一個 context 儲存信用卡資料（物件）
export const CreditCardInfoContext = createContext({})