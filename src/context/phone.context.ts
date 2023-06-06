import { createContext } from "react";
import { usePhone } from "../hooks/use.phone";

export type ContextStructure = {
  phoneContext: ReturnType<typeof usePhone>;
};

export const PhoneContext = createContext<ContextStructure>(
  {} as ContextStructure
);
