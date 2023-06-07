import * as ac from "../redux/phone.slice";
import { useAppDispatch, useAppSelector } from "../../../core/store/hook";

export function usePhone() {
  const { phoneNumber, isCalling } = useAppSelector((state) => state.phone);
  const dispatch = useAppDispatch();

  const keyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  function handleAddNumber(value: string) {
    if (phoneNumber.length < 9) {
      dispatch(ac.add(value));
    }
  }

  function handleDelete() {
    dispatch(ac.destroyer());
  }

  let timer: NodeJS.Timeout;

  function handleHang() {
    if (isCalling) {
      dispatch(ac.toggleCall());
      clearTimeout(timer);
    }
  }

  function handleCall() {
    if (phoneNumber.length === 9) {
      dispatch(ac.toggleCall());
      timer = setTimeout(() => {
        dispatch(ac.toggleCall());
      }, 5000);
    }
  }

  return {
    display: phoneNumber,
    calling: isCalling,
    keyValue,
    handleAddNumber,
    handleDelete,
    handleCall,
    handleHang,
  };
}
