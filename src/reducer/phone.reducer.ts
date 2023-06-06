import { PhoneAction } from "./phone.actions.creator";
import { actionTypes } from "./phone.actions.types";

export type PhoneState = {
  phoneNumber: string;
  calling: boolean;
};

export const phoneReducer = (state: PhoneState, action: PhoneAction) => {
  let payload: string;
  switch (action.type) {
    case actionTypes.add:
      payload = action.payload as string;
      return { ...state, phoneNumber: state.phoneNumber + payload };

    case actionTypes.delete:
      return {
        ...state,
        phoneNumber: state.phoneNumber.substring(
          0,
          state.phoneNumber.length - 1
        ),
      };

    case actionTypes.toggleCall:
      return { ...state, calling: !state.calling };

    default:
      return { ...state };
  }
};
