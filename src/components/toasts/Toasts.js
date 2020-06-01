import React, { useState, forwardRef, useImperativeHandle } from "react";
import Toast from "react-bootstrap/Toast";
import "./Toasts.scss";

const Toasts = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  let text = "";
  let toastStyle = "";
  useImperativeHandle(ref, () => ({
    openToast() {
      console.log("openToast");
      setShow(true);
    },
  }));

  return (
    <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide>
      <Toast.Header className={props.toastStyle}>
        <strong className="mr-auto">{props.toastText}</strong>
      </Toast.Header>
    </Toast>
  );
});
export default Toasts;
