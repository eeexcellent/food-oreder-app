import { useContext } from "react";
import useHttp from "../hooks/useHttp";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { priceFormatter } from "../utils/priceFormatter";
import Input from "./Input";
import Modal from "./Modal";

const requestUrl = "http://localhost:3000/orders";
const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const { data, isLoading, error, sendRequest, clearData } = useHttp(
    requestUrl,
    requestConfig
  );

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <button className="button" onClick={handleFinish}>
            Okay
          </button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {priceFormatter.format(cartTotal)}</p>
        <Input id="name" label="Full Name" type="text" required />
        <Input id="email" label="Email" type="email" required />
        <Input id="street" label="Street" type="text" required />

        <div className="control-row">
          <Input id="city" label="City" type="text" required />
          <Input id="postal-code" label="Postal Code" type="text" required />
        </div>
        <p className="modal-actions">
          {isLoading && <span>Creating your order...</span>}
          <button
            onClick={handleClose}
            className="text-button"
            disabled={isLoading}
          >
            Close
          </button>
          <button className="button" disabled={isLoading}>
            Submit Order
          </button>
        </p>
      </form>
    </Modal>
  );
}
