import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import phoneReducer from "../../features/counter/redux/counter.slice";

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
