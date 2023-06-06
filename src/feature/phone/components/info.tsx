import { usePhone } from "../hooks/use.phone";

export function Info() {
  const { calling } = usePhone();

  return <span className="message">{calling ? "Calling" : ""}</span>;
}
