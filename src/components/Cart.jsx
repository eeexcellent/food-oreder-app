import Modal from "./Modal.jsx";

import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>It's gonna be a Cart here...</h2>
      <button onClick={userProgressCtx.hideCart}>Close</button>
    </Modal>
  );
}
