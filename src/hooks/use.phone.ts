import { useEffect, useReducer } from "react";
import { PhoneState, phoneReducer } from "../reducer/phone.reducer";
import * as ac from "../reducer/phone.actions.creator";

export function usePhone() {
  const initialState: PhoneState = {
    phoneNumber: "",
    calling: false,
  };

  const keyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  const [phoneState, dispatch] = useReducer(phoneReducer, initialState);

  function handleAddNumber(value: string) {
    if (phoneState.phoneNumber.length < 9) {
      dispatch(ac.addNumberToDisplayAction(value));
    }
  }

  function handleDelete() {
    dispatch(ac.removeNumberFromDisplayAction());
  }

  let timeout: NodeJS.Timeout;

  function handleCall() {
    if (phoneState.phoneNumber.length === 9) {
      dispatch(ac.toggleCallAction());
      timeout = setTimeout(() => {
        dispatch(ac.toggleCallAction());
      }, 5000);
    }
  }

  function handleHang() {
    if (phoneState.calling) {
      dispatch(ac.toggleCallAction());
    }
  }

  useEffect(() => {
    if (!phoneState.calling) {
      if (phoneState.calling) {
        setTimeout(() => {
          dispatch(ac.toggleCallAction());
        }, 2000);
      }
    }
  }, [phoneState.calling]);

  return {
    display: phoneState.phoneNumber,
    calling: phoneState.calling,
    keyValue,
    handleAddNumber,
    handleDelete,
    handleCall,
    handleHang,
  };
}
