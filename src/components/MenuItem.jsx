import { use } from "react";
import CartContext from "../store/CartContext";

export default function MenuItem({ item }) {
  const { items, addItem } = use(CartContext);

  console.log(items);
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p className="meal-item-price">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "USD",
            }).format(item.price)}
          </p>
          <p className="meal-item-description">{item.description}</p>
          <p className="meal-item-actions">
            <button onClick={() => addItem(item)} className="button">
              Add to Cart
            </button>
          </p>
        </div>
      </article>
    </li>
  );
}
