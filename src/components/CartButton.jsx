import { use } from "react";
import CartContext from "../store/CartContext";

export default function CartButton() {
  const { items } = use(CartContext);

  return (
    <button className="text-button">
      Cart {items.length > 0 ? `(${items.length})` : null}
    </button>
  );
}
