import { useContext } from "react";
import { PhoneContext } from "../../context/phone.context";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const {
    phoneContext: { handleAddNumber, handleDelete, calling },
  } = useContext(PhoneContext);

  function handleClick() {
    if (!calling) handleAddNumber(item);
  }

  function handleClickDelete() {
    if (!calling) handleDelete();
  }

  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big" onClick={handleClickDelete}>
            {item}
          </button>
        )}
      </li>
    </>
  );
}
