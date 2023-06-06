import { usePhone } from "../hooks/use.phone";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const { handleAddNumber, handleDelete, calling } = usePhone();

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
