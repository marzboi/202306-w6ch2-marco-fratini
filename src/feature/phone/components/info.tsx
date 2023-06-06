import { useContext } from "react";
import { PhoneContext } from "../../context/phone.context";

export function Info() {
  const {
    phoneContext: { calling },
  } = useContext(PhoneContext);

  return <span className="message">{calling ? "Calling" : ""}</span>;
}
