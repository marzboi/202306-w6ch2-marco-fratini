import { usePhone } from "../hooks/use.phone";

export function Action() {
  const { handleCall, handleHang, display, calling } = usePhone();

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
