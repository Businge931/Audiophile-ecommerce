import { useContext, createContext, useState } from "react";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return <context.Provider>{children}</context.Provider>;
};
