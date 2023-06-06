import { useContext } from "react";
import { PhoneContext } from "../../context/phone.context";

export function Action() {
  const {
    phoneContext: { handleCall, handleHang, display, calling },
  } = useContext(PhoneContext);

  function handleDial() {
    handleCall();
  }

  function handleHangUp() {
    handleHang();
  }

  return (
    <>
      <a
        href="#"
        className={`call ${
          calling ? "" : display.length === 9 ? "active" : ""
        }`}
        onClick={handleDial}
      >
        Call
      </a>
      <a
        href="#"
        className={`hang ${calling ? "active" : ""}`}
        onClick={handleHangUp}
      >
        Hang Up
      </a>
    </>
  );
}
