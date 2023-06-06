import { createSlice } from "@reduxjs/toolkit";

export type PhoneState = {
  phoneNumber: string;
  isCalling: boolean;
};

const initialState: PhoneState = {
  phoneNumber: "",
  isCalling: false,
};

const sliceTasks = createSlice({
  name: "phone",
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

export const ac = sliceTasks.actions;
export default sliceTasks.reducer;