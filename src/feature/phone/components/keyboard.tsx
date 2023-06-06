import { Key } from "./key";

import { usePhone } from "../hooks/use.phone";

export function Keyboard() {
  const { keyValue } = usePhone();

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyValue.map((item) => (
          <Key key={item} item={item}></Key>
        ))}
      </ol>
    </div>
  );
}
