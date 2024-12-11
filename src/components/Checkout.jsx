import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { priceFormatter } from "../utils/priceFormatter";
import Input from "./Input";
import Modal from "./Modal";

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => item.quantity * item.price + totalPrice,
    0
  );

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const enteredData = Object.fromEntries(fd.entries());

    console.log(enteredData);

    // sending HTTP Request...
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={userProgressCtx.hideCheckout}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {priceFormatter.format(cartTotal)}</p>
        <Input id="full-name" label="Full Name" type="text" required />
        <Input id="email" label="Email" type="email" required />
        <Input id="street" label="Street" type="text" required />

        <div className="control-row">
          <Input id="city" label="City" type="text" required />
          <Input id="postal-code" label="Postal Code" type="text" required />
        </div>
        <p className="modal-actions">
          <button
            onClick={userProgressCtx.hideCheckout}
            className="text-button"
          >
            Close
          </button>
          <button className="button">Submit Order</button>
        </p>
      </form>
    </Modal>
  );
}
