import Modal from "./Modal.jsx";

import { useContext, useState } from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext";
import { priceFormatter } from "../utils/priceFormatter.js";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const [infoAnimate, setInfoAnimate] = useState(false);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => item.quantity * item.price + totalPrice,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleOpenCheckout() {
    if (cartCtx.items.length) {
      userProgressCtx.showCheckout();
    } else {
      setInfoAnimate(true);
      setTimeout(() => setInfoAnimate(false), 300);
    }
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      {cartTotal === 0 && (
        <p className={infoAnimate ? "paragraph animate-bg" : "paragraph"}>Your Cart is empty.</p>
      )}
      {cartTotal > 0 && (
        <>
          <ul>
            {cartCtx.items.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                name={cartItem.name}
                quantity={cartItem.quantity}
                price={cartItem.price}
                onAdd={() => cartCtx.removeItem(cartItem.id)}
                onRemove={() => cartCtx.addItem(cartItem)}
              />
            ))}
          </ul>
          <div className="cart-total">
            <p>{cartTotal > 0 ? priceFormatter.format(cartTotal) : null}</p>
          </div>
        </>
      )}
      <div className="modal-actions">
        <button className="text-button" onClick={userProgressCtx.hideCart}>
          Close
        </button>
        <button onClick={handleOpenCheckout} className="button">
          Go to Checkout
        </button>
      </div>
    </Modal>
  );
}
