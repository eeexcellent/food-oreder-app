import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function CartButton() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);

  return (
    <button onClick={showCart} className="text-button">
      Cart {items.length > 0 ? `(${items.length})` : null}
    </button>
  );
}
