import { actionTypes } from "./phone.actions.types";

export type PhoneAction = {
  type: string;
  payload?: string;
};

export function addNumberToDisplayAction(payload: string): PhoneAction {
  return {
    type: actionTypes.add,
    payload,
  };
}

export function removeNumberFromDisplayAction(): PhoneAction {
  return {
    type: actionTypes.delete,
  };
}

export function toggleCallAction(): PhoneAction {
  return {
    type: actionTypes.toggleCall,
  };
}
