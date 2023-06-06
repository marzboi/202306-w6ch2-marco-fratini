import { usePhone } from "../hooks/use.phone";
import { PhoneContext } from "./phone.context";

export function PhoneContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    phoneContext: usePhone(),
  };
  return (
    <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
  );
}
