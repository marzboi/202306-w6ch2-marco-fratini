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
  name: "phones",
  initialState,
  reducers: {
    add: (state, { payload }) => ({
      ...state,
      phoneNumber: state.phoneNumber + payload,
    }),
    destroyer: (state) => ({
      ...state,
      phoneNumber: state.phoneNumber.substring(0, state.phoneNumber.length - 1),
    }),
    toggleCall: (state) => ({ ...state, isCalling: !state.isCalling }),
  },
});

export const { add, destroyer, toggleCall } = phoneSlice.actions;
export default phoneSlice.reducer;
