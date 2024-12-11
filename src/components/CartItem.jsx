import { useContext } from "react";
import CartContext from "../store/CartContext";
import { priceFormatter } from "../utils/priceFormatter";

export default function CartItem({ name, quantity, price, onAdd, onRemove }) {
  const cartCtx = useContext(CartContext);

  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {priceFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onAdd}>-</button>
        <span>{quantity}</span>
        <button onClick={onRemove}>+</button>
      </p>
    </li>
  );
}
