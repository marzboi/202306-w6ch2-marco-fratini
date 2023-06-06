import { usePhone } from "../hooks/use.phone";

export function Display() {
  const { display } = usePhone();

  return <span className="number">{display}</span>;
}
