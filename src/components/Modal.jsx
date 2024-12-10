import { createPortal } from "react-dom";

import { useImperativeHandle, useRef } from "react";

export default function Modal({ children, onClose, ref }) {
  const modal = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          modal.current.showModal();
        },
        close() {
          modal.current.close();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog ref={modal} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
