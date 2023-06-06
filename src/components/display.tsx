import { useContext } from "react";
import { PhoneContext } from "../context/phone.context";

export function Display() {
  const {
    phoneContext: { display },
  } = useContext(PhoneContext);

  return <span className="number">{display}</span>;
}
