import { createSlice } from "@reduxjs/toolkit";

export type PhoneState = {
  phoneNumber: string;
  isCalling: boolean;
};

const initialState: PhoneState = {
  phoneNumber: "",
  isCalling: false,
};

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    addNumberToDisplay: (state, { payload }) => ({
      ...state,
      phoneNumber: state.phoneNumber + payload,
    }),
    destroyNumberToDisplay: (state) => ({
      ...state,
      phoneNumber: state.phoneNumber.substring(0, state.phoneNumber.length - 1),
    }),
    toggleCall: (state) => ({ ...state, isCalling: !state.isCalling }),
  },
});

export const { addNumberToDisplay, destroyNumberToDisplay, toggleCall } =
  phoneSlice.actions;
export default phoneSlice.reducer;
