import Modal from "./Modal.jsx";

import { use, useEffect, useRef } from "react";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const cartModal = useRef();
  const userProgressCtx = use(UserProgressContext);

  useEffect(() => {
    if (userProgressCtx.progress === "") {
      cartModal.current.close();
    } else if (userProgressCtx.progress === "cart") {
      cartModal.current.open();
    }
  }, [cartModal, userProgressCtx.progress]);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
      ref={cartModal}
    >
      <h2>It's gonna be a Cart here...</h2>
      <button onClick={userProgressCtx.hideCart}>Close</button>
    </Modal>
  );
}
